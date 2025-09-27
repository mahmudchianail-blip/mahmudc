// FIX: Removed the unused 'Stars' component that was causing JSX errors.
// The component was attempting to use react-three-fiber syntax without the
// necessary library setup. The remaining 'StarsCanvas' component correctly
// implements the starfield effect using vanilla Three.js. Also cleaned up imports.
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StarsCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentCanvas = canvasRef.current;
        if (!currentCanvas) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        // FIX: Explicitly set the clear color to transparent to prevent rendering artifacts.
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        currentCanvas.appendChild(renderer.domElement);

        const starsGeometry = new THREE.BufferGeometry();
        const starsVertices: number[] = [];
        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 2000;
            const y = (Math.random() - 0.5) * 2000;
            const z = (Math.random() - 0.5) * 2000;
            starsVertices.push(x, y, z);
        }
        starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));

        const starsMaterial = new THREE.PointsMaterial({
            color: 0x915eff,
            size: 1.5,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        camera.position.z = 1;

        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            stars.rotation.x += 0.0002;
            stars.rotation.y += 0.0002;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            if (currentCanvas && renderer.domElement.parentElement) {
                currentCanvas.removeChild(renderer.domElement);
            }
            starsGeometry.dispose();
            starsMaterial.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={canvasRef} className="w-full h-auto fixed inset-0 z-[-1] pointer-events-none" />;
};

export default StarsCanvas;
