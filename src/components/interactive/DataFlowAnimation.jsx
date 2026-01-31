import React from 'react';
import { motion } from 'framer-motion';

const DataFlowAnimation = () => {
  const nodes = [
    { 
      id: 'raw', 
      label: 'بيانات خام', 
      icon: '📊',
      color: 'bg-gray-400',
      delay: 0 
    },
    { 
      id: 'analysis', 
      label: 'تحليل', 
      icon: '🧠',
      color: 'bg-blue-500',
      delay: 0.8 
    },
    { 
      id: 'decision', 
      label: 'قرار', 
      icon: '✅',
      color: 'bg-green-500',
      delay: 1.6 
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full max-w-3xl mx-auto py-12"
    >
      {/* Nodes Container */}
      <div className="flex justify-between items-center relative" dir="rtl">
        {nodes.map((node, index) => (
          <React.Fragment key={node.id}>
            {/* Node */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: node.delay, duration: 0.5 }
                }
              }}
              className="relative z-10"
            >
              <motion.div
                className={`${node.color} w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg`}
                whileInView={{
                  boxShadow: [
                    "0 10px 30px rgba(0,0,0,0.1)",
                    "0 10px 40px rgba(59, 130, 246, 0.4)",
                    "0 10px 30px rgba(0,0,0,0.1)"
                  ]
                }}
                transition={{
                  delay: node.delay + 0.5,
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                {node.icon}
              </motion.div>
              <p className="text-center mt-3 font-bold text-gray-700 text-sm">
                {node.label}
              </p>
            </motion.div>

            {/* Flow Particles between nodes */}
            {index < nodes.length - 1 && (
              <div className="flex-1 relative h-1 mx-4">
                {/* Base Line */}
                <div className="absolute inset-0 bg-gray-200 rounded-full" />
                
                {/* Animated Particles */}
                {[0, 1, 2].map((particleIndex) => (
                  <motion.div
                    key={particleIndex}
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                    style={{
                      background: index === 0 
                        ? 'rgb(156, 163, 175)' 
                        : index === 1 
                        ? 'rgb(59, 130, 246)' 
                        : 'rgb(34, 197, 94)',
                      right: '100%'
                    }}
                    animate={{
                      right: ['100%', '-12px'],
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5]
                    }}
                    transition={{
                      duration: index === 0 ? 1.5 : index === 1 ? 1.2 : 0.8,
                      delay: nodes[index].delay + 0.5 + (particleIndex * 0.3),
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Insight Label */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="text-center mt-8 text-blue-600 font-bold text-lg italic"
      >
        "النظام لا يخزن البيانات، بل يُسرّعها نحو الفعل"
      </motion.p>
    </motion.div>
  );
};

export default DataFlowAnimation;
