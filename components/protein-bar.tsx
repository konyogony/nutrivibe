'use client';

import { useMediaQuery } from '@/lib/use-media-query';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import {
    AmbientLight,
    DirectionalLight,
    Group,
    LinearFilter,
    MathUtils,
    Mesh,
    MeshStandardMaterial,
    NearestFilter,
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
    const mousePos = useRef({ x: 0, y: 0 });

    const mobile = !useMediaQuery('(min-width: 768px)');
    const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

    console.log(reducedMotion, mobile);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new Scene();
        const camera = new PerspectiveCamera(80, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.set(0, 1, 3);
        camera.lookAt(0, 0, 0);

        const renderer = new WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

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

        const loader = new GLTFLoader();
        let model: Group | null = null;
        loader.load(
            '/bar4.glb',
            (gltf) => {
                model = gltf.scene;
                model.scale.set(0.5, 0.5, 0.5);
                model.position.set(0, 0, 0);
                scene.add(model);

                // Set texture filtering properties
                model.traverse((child) => {
                    if ((child as Mesh).isMesh) {
                        const mesh = child as Mesh;
                        if (mesh.material && Array.isArray(mesh.material)) {
                            mesh.material.forEach((material) => {
                                const meshMaterial = material as MeshStandardMaterial;
                                if (meshMaterial.map) {
                                    meshMaterial.map.minFilter = LinearFilter;
                                    meshMaterial.map.magFilter = NearestFilter;
                                    meshMaterial.map.needsUpdate = true;
                                }
                            });
                        } else if (mesh.material) {
                            const meshMaterial = mesh.material as MeshStandardMaterial;
                            if (meshMaterial.map) {
                                meshMaterial.map.minFilter = LinearFilter;
                                meshMaterial.map.magFilter = NearestFilter;
                                meshMaterial.map.needsUpdate = true;
                            }
                        }
                    }
                });
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
            },
        );

        let time = 0;

        const onMouseMove = (event: MouseEvent) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            mousePos.current = { x, y };
        };

        if (!mobile) {
            window.addEventListener('mousemove', onMouseMove);
        }

        const animate = () => {
            if (model) {
                time += 0.0025;
                const oscillationRotationX = Math.sin(time) * 0.15;
                const oscillationRotationY = Math.cos(time) * 0.05;

                const maxRotation = Math.PI / 12;
                const targetRotationX = oscillationRotationX + mousePos.current.y * maxRotation;
                const targetRotationY = oscillationRotationY + mousePos.current.x * maxRotation;

                model.rotation.x = MathUtils.lerp(model.rotation.x, targetRotationX, 0.01);
                model.rotation.y = MathUtils.lerp(model.rotation.y, targetRotationY, 0.01);

                model.rotation.z = Math.sin(time) * 0.15;

                model.rotation.x = Math.max(-maxRotation, Math.min(maxRotation, model.rotation.x));
                model.rotation.y = Math.max(-maxRotation, Math.min(maxRotation, model.rotation.y));
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        if (!reducedMotion) {
            animate();
        }

        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (!mobile) {
                window.removeEventListener('mousemove', onMouseMove);
            }
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
    }, [reducedMotion, mobile]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: mobile ? 1 : 0.6 }}
            animate={{ opacity: 1, scale: 1.2, rotate: 15 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            ref={mountRef}
            className={cn('h-full w-full overflow-visible brightness-90 md:brightness-100', className)}
            style={{ transformOrigin: 'center' }}
        />
    );
};
