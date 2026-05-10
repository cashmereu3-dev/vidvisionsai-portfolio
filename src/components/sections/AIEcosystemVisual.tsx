import React, { useRef, useMemo, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Text, Line, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { PROJECTS } from '../../constants/content';

function EcosystemNode({ 
  position, 
  title, 
  index, 
  isActive, 
  onClick 
}: { 
  position: [number, number, number], 
  title: string, 
  index: number, 
  isActive: boolean,
  onClick: () => void 
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(time + index) * 0.2;
      mesh.current.rotation.y += 0.01;
    }
  });

  const baseColor = index % 2 === 0 ? "#3b82f6" : "#6366f1";
  const activeColor = "#f3f4f6";
  const hoverColor = "#60a5fa";

  return (
    <group 
      position={position} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <Float speed={2} rotationIntensity={hovered ? 1 : 0.5} floatIntensity={hovered ? 2 : 1}>
        <Sphere ref={mesh} args={[0.4, 24, 24]}>
          <MeshDistortMaterial
            color={isActive ? activeColor : (hovered ? hoverColor : baseColor)}
            speed={hovered ? 5 : 3}
            distort={hovered || isActive ? 0.5 : 0.3}
            radius={1}
            emissive={isActive ? "#ffffff" : (hovered ? "#3b82f6" : "#000000")}
            emissiveIntensity={isActive ? 1 : (hovered ? 0.5 : 0)}
          />
        </Sphere>
        
        {/* Connection Pulse Shell */}
        {(isActive || hovered) && (
          <Sphere args={[0.6, 32, 32]}>
            <meshBasicMaterial color={isActive ? "#ffffff" : "#3b82f6"} transparent opacity={0.1} />
          </Sphere>
        )}
      </Float>
      
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.25}
        color={isActive ? "#ffffff" : (hovered ? "#60a5fa" : "white")}
        font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoSruN3297ZfL9vE.woff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="rgba(0,0,0,0.5)"
      >
        {title}
      </Text>
    </group>
  );
}

function Connections({ activeNodeIndex }: { activeNodeIndex: number | null }) {
  const linePoints = useMemo(() => {
    const points = [];
    const count = PROJECTS.length;
    for (let i = 0; i < count; i++) {
      const angle1 = (i / count) * Math.PI * 2;
      const x1 = Math.cos(angle1) * 6;
      const z1 = Math.sin(angle1) * 6;
      
      const angle2 = ((i + 1) % count / count) * Math.PI * 2;
      const x2 = Math.cos(angle2) * 6;
      const z2 = Math.sin(angle2) * 6;
      
      points.push({ pts: [[x1, 0, z1], [x2, 0, z2]], index1: i, index2: (i + 1) % count });
      points.push({ pts: [[x1, 0, z1], [0, 0, 0]], index1: i, index2: -1 }); // -1 for center
    }
    return points;
  }, []);

  return (
    <group>
      {linePoints.map((line, i) => {
        const isConnectedToActive = activeNodeIndex !== null && (line.index1 === activeNodeIndex || line.index2 === activeNodeIndex);
        return (
          <Line
            key={i}
            points={line.pts as [number, number, number][]}
            color={isConnectedToActive ? "#ffffff" : "#3b82f6"}
            lineWidth={isConnectedToActive ? 1.5 : 0.5}
            opacity={isConnectedToActive ? 0.6 : 0.2}
            transparent
          />
        );
      })}
    </group>
  );
}

export default function AIEcosystemVisual() {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  const nodes = useMemo(() => {
    return PROJECTS.map((project, i) => {
      const angle = (i / PROJECTS.length) * Math.PI * 2;
      return {
        ...project,
        position: [Math.cos(angle) * 6, 0, Math.sin(angle) * 6] as [number, number, number],
        index: i
      };
    });
  }, []);

  const activeProject = nodes.find(p => p.id === activeId);
  const activeIndex = activeProject ? activeProject.index : null;

  return (
    <div className="w-full h-[600px] relative rounded-3xl overflow-hidden border border-white/10 bg-[#020203] shadow-2xl">
      <Canvas camera={{ position: [0, 10, 15], fov: 45 }}>
        <color attach="background" args={['#020203']} />
        <fog attach="fog" args={['#020203', 10, 30]} />
        
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <Suspense fallback={null}>
          <group rotation={[0, 0, 0]}>
            <Connections activeNodeIndex={activeIndex} />
            
            {nodes.map((node) => (
              <EcosystemNode 
                key={node.id} 
                position={node.position} 
                title={node.title} 
                index={node.index}
                isActive={activeId === node.id}
                onClick={() => setActiveId(activeId === node.id ? null : node.id)}
              />
            ))}
            
            {/* Central Hub Node */}
            <group position={[0, 0, 0]}>
              <Sphere args={[1.2, 48, 48]}>
                <MeshDistortMaterial
                  color="#0067b8"
                  speed={4}
                  distort={0.2}
                  radius={1}
                  emissive="#005a9e"
                  emissiveIntensity={0.5}
                />
              </Sphere>
              <Text
                position={[0, 2, 0]}
                fontSize={0.5}
                color="white"
                font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoSruN3297ZfL9vE.woff"
                anchorX="center"
                anchorY="middle"
                fontWeight="bold"
              >
                CORE_OS
              </Text>
            </group>
          </group>
        </Suspense>
        
        <OrbitControls 
          enableZoom={false} 
          autoRotate={!activeId} 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
      
      {/* HUD Overlays */}
      <div className="absolute top-6 left-6 pointer-events-none flex flex-col gap-4">
        {activeProject && (
          <div className="p-6 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-xl max-w-sm pointer-events-auto animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="text-[10px] font-mono text-blue-500 mb-2 uppercase tracking-widest font-bold">Node Metadata</div>
            <h4 className="text-xl font-bold text-white mb-2">{activeProject.title}</h4>
            <p className="text-xs text-white/60 leading-relaxed mb-4">
              {activeProject.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {activeProject.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[8px] font-mono text-white/40 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 left-6 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md w-fit">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[10px] font-mono text-white/60 tracking-wider font-bold">GRID_STATUS: OPTIMAL</span>
        </div>
      </div>
      
      <div className="absolute top-6 right-6 pointer-events-none">
        <div className="text-right">
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest leading-none">System Time</div>
          <div className="text-xl font-mono text-white/40 leading-none mt-1">
            {new Date().toLocaleTimeString([], { hour12: false })}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 pointer-events-none text-right">
        <div className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-1 font-bold italic">Neural Grid Visualization</div>
        <div className="text-white/20 text-[8px] font-mono">ENCRYPTED TELEMETRY STREAM // NODE_COUNT: {PROJECTS.length + 1}</div>
      </div>
    </div>
  );
}
