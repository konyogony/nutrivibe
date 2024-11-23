'use client';

import { useMediaQuery } from '@/lib/use-media-query';
import { cn } from '@/lib/utils';
import 'motion';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import {
    AmbientLight,
    DirectionalLight,
    Group,
    MathUtils,
    Mesh,
    PerspectiveCamera,
    Scene,
    SpotLight,
    WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface ProteinBarProps {
    className?: string;
}

export const ProteinBar = ({ className }: ProteinBarProps) => {
    const mountRef = useRef<HTMLDivElement>(null);

    // Use ref to store mouse position, avoiding re-renders
    const mousePos = useRef({ x: 0, y: 0 });
    const mobile = !useMediaQuery('(min-width: 768px)');

    // State to track model loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene, camera, and renderer setup
        const scene = new Scene();
        const camera = new PerspectiveCamera(80, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.set(0, 1, 3);
        camera.lookAt(0, 0, 0);

        const renderer = new WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // Lighting setup
        const directionalLight = new DirectionalLight(0xffffff, 3);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const ambientLight = new AmbientLight(0x404040, 1.5);
        scene.add(ambientLight);

        const sideLight = new DirectionalLight(0xffffff, 2);
        sideLight.position.set(-5, 2, 0);
        scene.add(sideLight);

        const spotlight = new SpotLight(0xffffff, 1.5);
        spotlight.position.set(-3, 5, 3);
        spotlight.target.position.set(0, 0, 0);
        scene.add(spotlight);
        scene.add(spotlight.target);

        // Load the 3D model
        const loader = new GLTFLoader();
        let model: Group | null = null;
        loader.load(
            '/bar4.glb',
            (gltf) => {
                model = gltf.scene;
                model.scale.set(0.5, 0.5, 0.5); // Adjust scale
                model.position.set(0, 0, 0); // Adjust position

                // Reset model's rotation and then apply new rotation
                scene.add(model);

                // Set loading to false once model is loaded
                setLoading(false);
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
                setLoading(false); // Stop loading even if there's an error
            },
        );

        // Time variable to control the oscillation
        let time = 0;

        // Mouse position tracking
        const onMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1; // Normalize mouse position to [-1, 1]
            const y = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize to [-1, 1]
            mousePos.current = { x, y }; // Update mouse position in ref
        };

        // Attach mousemove listener
        window.addEventListener('mousemove', onMouseMove);

        // Animation loop
        const animate = () => {
            if (model) {
                time += 0.0025; // Controls the speed of the oscillation
                const oscillationRotationX = Math.sin(time) * 0.15; // Oscillation rotation
                const oscillationRotationY = Math.cos(time) * 0.05; // Oscillation rotation

                const maxRotation = Math.PI / 12; // Maximum rotation limit (15 degrees)
                const targetRotationX = oscillationRotationX + mousePos.current.y * maxRotation;
                const targetRotationY = oscillationRotationY + mousePos.current.x * maxRotation;

                // Smoothly interpolate the current rotation toward the target rotation
                model.rotation.x = MathUtils.lerp(model.rotation.x, targetRotationX, 0.01);
                model.rotation.y = MathUtils.lerp(model.rotation.y, targetRotationY, 0.01);

                // Add optional Z-axis oscillation
                model.rotation.z = Math.sin(time) * 0.15;

                // Constrain rotations to avoid excessive movement
                model.rotation.x = Math.max(-maxRotation, Math.min(maxRotation, model.rotation.x));
                model.rotation.y = Math.max(-maxRotation, Math.min(maxRotation, model.rotation.y));
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // Handle window resizing
        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
            if (model) {
                scene.remove(model);
                model.traverse((child) => {
                    if ((child as Mesh).geometry) {
                        (child as Mesh).geometry.dispose();
                    }
                    if ((child as Mesh).material) {
                        const material = (child as Mesh).material;
                        if (Array.isArray(material)) {
                            material.forEach((mat) => mat.dispose());
                        } else {
                            material.dispose();
                        }
                    }
                });
            }
            mount.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []); // Empty dependency array to run this effect once
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            ref={mountRef}
            className={cn('relative h-full w-full translate-x-1/3 overflow-visible', className)}
        />
    );
};
