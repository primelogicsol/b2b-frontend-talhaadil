"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign,
  Globe,
  Users,
  TrendingUp,
  Award,
  Target,
  Heart,
  Clock,
  Zap,
  Star
} from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  position: 'left' | 'right';
  index: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, position, index }) => (
  <motion.div
    className={`flex items-center gap-4 ${position === 'right' ? 'flex-row-reverse text-right' : ''}`}
    initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
  >
    <motion.div
      className="flex-shrink-0 w-12 h-12 bg-[var(--primary-color)]/20 rounded-full flex items-center justify-center cursor-pointer"
      whileHover={{
        backgroundColor: 'rgba(249, 115, 22, 0.3)',
        rotate: 360,
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="text-[var(--primary-color)]"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
    </motion.div>
    <motion.div
      whileHover={{ x: position === 'left' ? 5 : -5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.h3
        className="text-white font-semibold text-lg"
        whileHover={{ color: '#fb923c' }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-300 text-sm"
        whileHover={{ color: '#ffffff' }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.p>
    </motion.div>
  </motion.div>
);

const ProfitBox: React.FC = () => {
  const products = [
    'Pashmina',
    'Kani',
    'Cashmere',
    'Silk',
    'Bags & Purses',
    'Jackets',
    'Kaftans',
    'Kurtas',
    'Pherans',
    'Jewelry'
  ];

  const leftMetrics = [
    {
      icon: <DollarSign size={20} />,
      title: 'Annual Revenue',
      value: '$160M+'
    },
    {
      icon: <Globe size={20} />,
      title: 'Global Export',
      value: '78%'
    },
    {
      icon: <Users size={20} />,
      title: 'Artisans',
      value: '88000+'
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Market Growth',
      value: '17% YoY'
    },
    {
      icon: <Award size={20} />,
      title: 'Quality Rating',
      value: '4.8/5'
    },
    {
      icon: <Target size={20} />,
      title: 'Sustainability',
      value: '96%'
    }
  ];

  const rightMetrics = [
    {
      icon: <Target size={20} />,
      title: 'Market Share',
      value: '30%'
    },
    {
      icon: <Award size={20} />,
      title: 'Product Range',
      value: '80+'
    },
    {
      icon: <Heart size={20} />,
      title: 'Customer Satisfaction',
      value: '97%'
    },
    {
      icon: <Clock size={20} />,
      title: 'Avg Production Time',
      value: '60 Days'
    },
    {
      icon: <Zap size={20} />,
      title: 'Energy Efficiency',
      value: '93%'
    },
    {
      icon: <Star size={20} />,
      title: 'Innovation Index',
      value: '4.6/5'
    }
  ];

  // Create dotted earth pattern
  const createDottedEarth = () => {
    const dots = [];
    const radius = 300;
    const centerX = 400;
    const centerY = 400;
   
    // Create multiple concentric circles of dots
    for (let ring = 0; ring < 4; ring++) {
      const currentRadius = radius - (ring * 60);
      const dotsInRing = Math.max(24 - (ring * 4), 8);
     
      for (let i = 0; i < dotsInRing; i++) {
        const angle = (i / dotsInRing) * 2 * Math.PI;
        const x = centerX + Math.cos(angle) * currentRadius;
        const y = centerY + Math.sin(angle) * currentRadius;
       
        dots.push(
          <motion.circle
            key={`${ring}-${i}`}
            cx={x}
            cy={y}
            r={2 + ring * 0.5}
            fill="rgba(59, 130, 246, 0.3)"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              delay: (ring * 0.2) + (i * 0.1),
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        );
      }
    }
   
    // Add continental outlines with dots
    const continentPaths = [
      // Simplified continent shapes with dots
      { x: 350, y: 320, size: 3 }, // North America
      { x: 420, y: 350, size: 2.5 }, // Europe
      { x: 480, y: 380, size: 4 }, // Asia
      { x: 380, y: 450, size: 3.5 }, // Africa
      { x: 320, y: 480, size: 2 }, // South America
      { x: 520, y: 480, size: 2.5 }, // Australia
    ];
   
    continentPaths.forEach((continent, index) => {
      dots.push(
        <motion.circle
          key={`continent-${index}`}
          cx={continent.x}
          cy={continent.y}
          r={continent.size}
          fill="rgba(34, 197, 94, 1)"
          initial={{ opacity: 0.7 }}
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 4,
            delay: index * 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      );
    });
   
    return dots;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Dotted Earth Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-80"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg width="800" height="800" viewBox="0 0 800 800">
          {createDottedEarth()}
         
          {/* Orbital rings */}
          <motion.circle
            cx="400"
            cy="400"
            r="350"
            fill="none"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.circle
            cx="400"
            cy="400"
            r="280"
            fill="none"
            stroke="rgba(34, 197, 94, 0.2)"
            strokeWidth="1"
            strokeDasharray="3,3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 1, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* Header */}
      <motion.div
        className="relative z-10 text-center py-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-gray-400 text-sm mb-2"
          whileHover={{ scale: 1.05, color: '#fb923c' }}
          transition={{ duration: 0.2 }}
        >
          Hand ♡ Made
        </motion.div>
        <motion.div
          className="text-white text-lg font-light"
          whileHover={{ scale: 1.05, color: '#fb923c' }}
          transition={{ duration: 0.2 }}
        >
          Kashmir India Sourced
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Metrics */}
          <div className="space-y-8">
            {leftMetrics.map((metric, index) => (
              <MetricCard
                key={index}
                icon={metric.icon}
                title={metric.title}
                value={metric.value}
                position="left"
                index={index}
              />
            ))}
          </div>

          {/* Center - Compact Horizontal Product Range */}
          <motion.div
            className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-4 border border-slate-700/50 lg:mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{
              backgroundColor: 'rgba(30, 41, 59, 0.6)',
              borderColor: 'rgba(71, 85, 105, 0.7)',
              transition: { duration: 0.3 }
            }}
          >
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.h2
                className="text-3xl font-bold text-white mb-2"
                whileHover={{ scale: 1.05, color: '#fb923c' }}
                transition={{ duration: 0.2 }}
              >
                Boutique
              </motion.h2>
              <motion.h3
                className="text-xl text-gray-300 font-medium"
                whileHover={{ color: '#ffffff' }}
                transition={{ duration: 0.2 }}
              >
                Product Range
              </motion.h3>
            </motion.div>
           
            <div className="grid grid-cols-2 gap-3">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-700/50 hover:bg-slate-600/50 transition-all ease-in-out duration-300 rounded-lg px-2 py-3 text-center text-white font-medium cursor-pointer border border-slate-600/30 hover:border-slate-500/50 text-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3}}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(249, 115, 22, 0.2)',
                    borderColor: 'rgba(249, 115, 22, 0.5)',
                    color: '#fb923c',
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    whileHover={{ fontWeight: 600 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Metrics */}
          <div className="space-y-8">
            {rightMetrics.map((metric, index) => (
              <MetricCard
                key={index}
                icon={metric.icon}
                title={metric.title}
                value={metric.value}
                position="right"
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitBox;


