'use client'
import { motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface ImageRevealProps {
    leftImage: string;
    middleImage: string;
    rightImage: string;
}

export default function ImageReveal({ leftImage, middleImage, rightImage }: ImageRevealProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Desktop variants
    const containerVariants: Variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.2 } }
    };

    const leftImageVariants: Variants = isMobile
        ? { initial: {}, animate: {} }
        : {
            initial: { rotate: 0, x: 0, y: 0 },
            animate: { rotate: -8, x: -150, y: 10, transition: { type: "spring", stiffness: 120, damping: 12 } },
            hover: { rotate: 1, x: -160, y: 0, transition: { type: "spring", stiffness: 200, damping: 15 } }
        };

    const middleImageVariants: Variants = isMobile
        ? { initial: {}, animate: {} }
        : {
            initial: { rotate: 0, x: 0, y: 0 },
            animate: { rotate: 6, x: 0, y: 0, transition: { type: "spring", stiffness: 120, damping: 12 } },
            hover: { rotate: 0, x: 0, y: -10, transition: { type: "spring", stiffness: 200, damping: 15 } }
        };

    const rightImageVariants: Variants = isMobile
        ? { initial: {}, animate: {} }
        : {
            initial: { rotate: 0, x: 0, y: 0 },
            animate: { rotate: -6, x: 200, y: 20, transition: { type: "spring", stiffness: 120, damping: 12 } },
            hover: { rotate: 3, x: 200, y: 10, transition: { type: "spring", stiffness: 200, damping: 15 } }
        };

    return (
        <motion.div
            className={`relative flex ${isMobile ? 'flex-col gap-6' : 'flex-row'} items-center justify-center w-full max-w-full mx-auto h-auto md:h-[400px] my-12`}
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            {/* Left Image */}
            <motion.div
                className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden rounded-xl shadow-lg bg-white"
                variants={leftImageVariants}
                whileHover={isMobile ? undefined : 'hover'}
                animate="animate"
                style={{ zIndex: isMobile ? undefined : 30 }}
            >
                <img src={leftImage} alt="Left" className="object-cover p-2 rounded-xl w-full h-full" />
            </motion.div>

            {/* Middle Image */}
            <motion.div
                className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden rounded-xl shadow-lg bg-white"
                variants={middleImageVariants}
                whileHover={isMobile ? undefined : 'hover'}
                animate="animate"
                style={{ zIndex: isMobile ? undefined : 20 }}
            >
                <img src={middleImage} alt="Middle" className="object-cover p-2 rounded-2xl w-full h-full" />
            </motion.div>

            {/* Right Image */}
            <motion.div
                className="w-40 sm:w-48 md:w-60 h-40 sm:h-48 md:h-60 overflow-hidden rounded-xl shadow-lg bg-white"
                variants={rightImageVariants}
                whileHover={isMobile ? undefined : 'hover'}
                animate="animate"
                style={{ zIndex: isMobile ? undefined : 10 }}
            >
                <img src={rightImage} alt="Right" className="object-cover p-2 rounded-2xl w-full h-full" />
            </motion.div>
        </motion.div>
    );
}
