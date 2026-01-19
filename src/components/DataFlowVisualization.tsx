import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Animated data flow visualization representing DE/AI background
const DataFlowVisualization: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setSize = () => {
            canvas.width = canvas.offsetWidth * 2;
            canvas.height = canvas.offsetHeight * 2;
            ctx.scale(2, 2);
        };
        setSize();
        window.addEventListener('resize', setSize);

        // Node positions (representing data pipeline stages)
        const nodes = [
            { x: 80, y: 100, label: 'Source', size: 12 },
            { x: 180, y: 60, label: 'Extract', size: 10 },
            { x: 180, y: 140, label: 'Stream', size: 10 },
            { x: 280, y: 100, label: 'Transform', size: 14 },
            { x: 380, y: 60, label: 'ML', size: 10 },
            { x: 380, y: 140, label: 'Analytics', size: 10 },
            { x: 480, y: 100, label: 'Insights', size: 12 },
        ];

        // Connections between nodes
        const connections = [
            [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6]
        ];

        // Particles flowing through the pipeline
        interface Particle {
            x: number;
            y: number;
            progress: number;
            connection: number;
            speed: number;
        }

        const particles: Particle[] = [];
        const maxParticles = 15;

        // Get terracotta color from CSS variable
        const style = getComputedStyle(document.documentElement);
        const primaryColor = '#E07A5F'; // Terracotta

        let animationId: number;
        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            time += 0.01;

            // Draw connections
            connections.forEach(([from, to], idx) => {
                const fromNode = nodes[from];
                const toNode = nodes[to];

                ctx.beginPath();
                ctx.moveTo(fromNode.x, fromNode.y);

                // Curved line
                const midX = (fromNode.x + toNode.x) / 2;
                const midY = (fromNode.y + toNode.y) / 2 + Math.sin(time + idx) * 5;
                ctx.quadraticCurveTo(midX, midY, toNode.x, toNode.y);

                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            // Add new particles
            if (particles.length < maxParticles && Math.random() > 0.95) {
                const connectionIdx = Math.floor(Math.random() * connections.length);
                particles.push({
                    x: 0,
                    y: 0,
                    progress: 0,
                    connection: connectionIdx,
                    speed: 0.005 + Math.random() * 0.01
                });
            }

            // Update and draw particles
            particles.forEach((particle, i) => {
                particle.progress += particle.speed;

                if (particle.progress >= 1) {
                    particles.splice(i, 1);
                    return;
                }

                const [from, to] = connections[particle.connection];
                const fromNode = nodes[from];
                const toNode = nodes[to];

                // Calculate position along curve
                const t = particle.progress;
                const midX = (fromNode.x + toNode.x) / 2;
                const midY = (fromNode.y + toNode.y) / 2;

                particle.x = Math.pow(1 - t, 2) * fromNode.x + 2 * (1 - t) * t * midX + Math.pow(t, 2) * toNode.x;
                particle.y = Math.pow(1 - t, 2) * fromNode.y + 2 * (1 - t) * t * midY + Math.pow(t, 2) * toNode.y;

                // Draw particle with glow
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
                ctx.fillStyle = primaryColor;
                ctx.fill();

                // Glow effect
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, 6, 0, Math.PI * 2);
                ctx.fillStyle = `${primaryColor}40`;
                ctx.fill();
            });

            // Draw nodes
            nodes.forEach((node, idx) => {
                const pulse = 1 + Math.sin(time * 2 + idx) * 0.1;

                // Outer glow
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size * pulse + 4, 0, Math.PI * 2);
                ctx.fillStyle = `${primaryColor}15`;
                ctx.fill();

                // Node circle
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size * pulse, 0, Math.PI * 2);
                ctx.fillStyle = idx === 0 || idx === nodes.length - 1 ? primaryColor : 'rgba(255, 255, 255, 0.15)';
                ctx.fill();

                // Node ring
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size * pulse, 0, Math.PI * 2);
                ctx.strokeStyle = idx === 0 || idx === nodes.length - 1 ? primaryColor : 'rgba(255, 255, 255, 0.3)';
                ctx.lineWidth = 1.5;
                ctx.stroke();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setSize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <canvas
                ref={canvasRef}
                className="w-full max-w-[560px] h-[200px] opacity-80"
                style={{ filter: 'blur(0.5px)' }}
            />
            {/* Labels */}
            <div className="absolute inset-0 pointer-events-none">
                <span className="absolute text-[10px] text-muted-foreground font-mono" style={{ left: '8%', top: '35%' }}>source</span>
                <span className="absolute text-[10px] text-muted-foreground font-mono" style={{ left: '85%', top: '35%' }}>insights</span>
            </div>
        </motion.div>
    );
};

export default DataFlowVisualization;
