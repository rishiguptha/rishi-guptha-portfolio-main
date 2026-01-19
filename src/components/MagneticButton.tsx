import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
    as?: 'button' | 'a' | 'div';
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
    download?: boolean;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = '',
    strength = 0.3,
    as = 'button',
    onClick,
    href,
    target,
    rel,
    download
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const x = (clientX - (left + width / 2)) * strength;
        const y = (clientY - (top + height / 2)) * strength;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const MotionComponent = motion.div;

    const content = (
        <MotionComponent
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="inline-block"
        >
            {as === 'a' ? (
                <a
                    href={href}
                    target={target}
                    rel={rel}
                    download={download}
                    className={className}
                    onClick={onClick}
                >
                    {children}
                </a>
            ) : as === 'button' ? (
                <button onClick={onClick} className={className}>
                    {children}
                </button>
            ) : (
                <div onClick={onClick} className={className}>
                    {children}
                </div>
            )}
        </MotionComponent>
    );

    return content;
};

export default MagneticButton;
