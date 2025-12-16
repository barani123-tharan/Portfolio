import React from 'react';
import { motion } from 'framer-motion';
import { DATA } from '../../data/portfolioData';

// Component for an individual skill bar OR a soft skill tag
const SkillDisplay = ({ name, level, color, index, isSoft }) => {
    // Render soft skill as a tag
    if (isSoft) {
        return (
            <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                // UPDATED COLOR: Using cyan for soft skills tags
                className="px-4 py-1.5 bg-cyan-500/10 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors cursor-default"
            >
                {name}
            </motion.span>
        );
    }
    
    // Render technical skill with progress bar
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-4"
        >
            <div className="flex justify-between items-center mb-1">
                <p className="text-gray-200 font-medium">{name}</p>
                {/* The individual skill color (e.g., text-green-500, text-yellow-400) remains */}
                <span className={`text-sm font-bold ${color}`}>{level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                    // The progress bar color uses the skill's specific color
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${color.replace('text-', 'bg-')}`}
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const categories = Object.keys(DATA.skills);

    return (
        <section id="skills" className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#111] p-8 md:p-12 rounded-3xl border border-gray-800"
                >
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
                        {/* UPDATED COLOR: Using cyan for the separator */}
                        <span className="w-12 h-1 bg-cyan-500 rounded-full"></span>
                        Technical & Professional Skills
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {categories.map((category, catIndex) => (
                            <div key={category}>
                                {/* UPDATED COLOR: Using cyan for category headings */}
                                <h3 className="text-xl font-extrabold text-cyan-400 mb-6 border-b border-gray-700 pb-2">
                                    {category}
                                </h3>
                                
                                {/* If Soft Skills, use flex-wrap for tags, otherwise use space-y for bars */}
                                <div className={category === 'Soft Skills' ? 'flex flex-wrap gap-2' : 'space-y-4'}>
                                    {DATA.skills[category].map((skill, skillIndex) => (
                                        <SkillDisplay 
                                            key={skill.name} 
                                            name={skill.name} 
                                            level={skill.level} 
                                            color={skill.color} 
                                            index={skillIndex}
                                            isSoft={skill.isSoft}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;