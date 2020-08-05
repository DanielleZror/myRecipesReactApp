import React from 'react';
import './Loading.css'
import { motion } from 'framer-motion'
import { FaPizzaSlice, FaHamburger, FaBirthdayCake, FaCarrot, FaIceCream } from "react-icons/fa"

const loadingContainer = {
    start: {
        transition: {
            staggerChildren: 0.1
        }
    },
    end: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const loadingSpan = {
    start: {
        y: '0%'
    },
    end: {
        y: '100%'
    }
}

const loadingTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeInOut'
}

const Loading = () => {

    return (
        <motion.div className="loading-div"
            variants={loadingContainer} initial="start" animate="end">
            <motion.span className="loading-span" variants={loadingSpan} transition={loadingTransition}> <FaPizzaSlice className="loading-icon" /></motion.span>
            <motion.span className="loading-span" variants={loadingSpan} transition={loadingTransition}> <FaBirthdayCake className="loading-icon" /></motion.span>
            <motion.span className="loading-span" variants={loadingSpan} transition={loadingTransition}> <FaCarrot className="loading-icon" /></motion.span>
            <motion.span className="loading-span" variants={loadingSpan} transition={loadingTransition}> <FaHamburger className="loading-icon" /></motion.span>
            <motion.span className="loading-span" variants={loadingSpan} transition={loadingTransition}> <FaIceCream className="loading-icon" /></motion.span>
        </motion.div>
    )
}

export default Loading

