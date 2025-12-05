import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere, Torus } from '@react-three/drei';
import { useRef, useState } from 'react';
import { Mesh } from 'three';

function RotatingBox({ animationEnabled }: { animationEnabled: boolean }) {
    const meshRef = useRef<Mesh>(null!);
    const [hovered, setHovered] = useState(false);
    const [active, setActive] = useState(false);

    // Rotate on every frame
    useFrame((state, delta) => {
        if (!animationEnabled) return;
        meshRef.current.rotation.x += delta * 0.5;
        meshRef.current.rotation.y += delta * 0.3;
    });

    return (
        <Box
            ref={meshRef}
            args={[2, 2, 2]}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            position={[-3, 0, 0]}
        >
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </Box>
    );
}

function BouncingSphere({ animationEnabled }: { animationEnabled: boolean }) {
    const meshRef = useRef<Mesh>(null!);
    const [active, setActive] = useState(false);

    useFrame((state) => {
        if (!animationEnabled) return;
        meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 1;
    });

    return (
        <Sphere
            ref={meshRef}
            args={[1, 32, 32]}
            position={[0, 0, 0]}
            scale={active ? 1.3 : 1}
            onClick={() => setActive(!active)}
        >
            <meshStandardMaterial color={active ? '#00ff88' : '#0088ff'} />
        </Sphere>
    );
}

function SpinningTorus({ animationEnabled }: { animationEnabled: boolean }) {
    const meshRef = useRef<Mesh>(null!);
    const [hovered, setHovered] = useState(false);

    useFrame((state, delta) => {
        if (!animationEnabled) return;
        meshRef.current.rotation.x += delta;
        meshRef.current.rotation.y += delta * 0.5;
    });

    return (
        <Torus
            ref={meshRef}
            args={[1, 0.4, 16, 100]}
            position={[3, 0, 0]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <meshStandardMaterial color={hovered ? '#ff00ff' : '#ffff00'} wireframe />
        </Torus>
    );
}

function Scene({ animationEnabled }: { animationEnabled: boolean }) {
    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />

            {/* 3D Objects */}
            <RotatingBox animationEnabled={animationEnabled} />
            <BouncingSphere animationEnabled={animationEnabled} />
            <SpinningTorus animationEnabled={animationEnabled} />

            {/* 3D Text */}
            <Text position={[0, 3, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                React Three Fiber
            </Text>

            <Text position={[0, -3, 0]} fontSize={0.3} color="#cccccc" anchorX="center" anchorY="middle">
                Click and hover on objects!
            </Text>

            {/* Camera Controls */}
            <OrbitControls />
        </>
    );
}

function App() {
    const [animationEnabled, setAnimationEnabled] = useState(false);

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: '#1a1a1a' }}>
            <div
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    color: 'white',
                    fontFamily: 'monospace',
                    zIndex: 1,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    padding: '16px',
                    borderRadius: '8px',
                    maxWidth: '400px',
                }}
            >
                <h2 style={{ margin: '0 0 12px 0', fontSize: '20px' }}>🎮 React Three Fiber Demo</h2>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', lineHeight: '1.5' }}>
                    This 3D scene is built with React components! R3F uses a custom reconciler to map JSX to Three.js
                    objects.
                </p>
                <ul style={{ margin: '8px 0', paddingLeft: '20px', fontSize: '13px' }}>
                    <li>
                        <code>&lt;Box&gt;</code> → THREE.BoxGeometry
                    </li>
                    <li>
                        <code>&lt;Sphere&gt;</code> → THREE.SphereGeometry
                    </li>
                    <li>
                        <code>&lt;meshStandardMaterial&gt;</code> → THREE.MeshStandardMaterial
                    </li>
                </ul>
                <p style={{ margin: '12px 0 0 0', fontSize: '12px', color: '#999' }}>
                    Try dragging to orbit, scrolling to zoom, and clicking objects!
                </p>
                <button
                    onClick={() => setAnimationEnabled(!animationEnabled)}
                    style={{
                        marginTop: '12px',
                        padding: '8px 16px',
                        backgroundColor: animationEnabled ? '#4CAF50' : '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontFamily: 'monospace',
                    }}
                >
                    {animationEnabled ? '⏸ Pause Animations' : '▶ Play Animations'}
                </button>
            </div>

            <Canvas camera={{ position: [0, 0, 8] }}>
                <Scene animationEnabled={animationEnabled} />
            </Canvas>
        </div>
    );
}

export default App;
