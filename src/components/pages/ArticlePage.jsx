import React from 'react';
import { DATA } from '../../data/portfolioData';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Utility function to convert title to URL slug (same as used in Blog.jsx)
const toSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

const ArticlePage = () => {
    const { titleSlug } = useParams();
    
    // Find the corresponding article
    const article = DATA.blogs.find(
        (blog) => toSlug(blog.title) === titleSlug
    );

    if (!article) {
        return (
            <section className="py-20 px-6 min-h-screen bg-[#0c0c0c] text-white flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-red-500 mb-4">404 - Article Not Found</h1>
                    <p className="text-gray-400 mb-8">The content you are looking for does not exist or the link is broken.</p>
                    <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Blog List</Link>
                </div>
            </section>
        );
    }
    
    // Process the full content string into JSX elements
    const renderContent = (content) => {
        // Split content by line breaks
        const lines = content.trim().split('\n').filter(line => line.trim() !== '');

        return lines.map((line, index) => {
            const trimmedLine = line.trim();

            if (trimmedLine.startsWith('Introduction') || 
                trimmedLine.includes('Evolution:') ||
                trimmedLine.includes('Server-First') || 
                trimmedLine.includes('Performance') ||
                trimmedLine.includes('AI-Assisted') || 
                trimmedLine.includes('Career Growth') ||
                trimmedLine.includes('Conclusion') ||
                trimmedLine.includes('Utility-First') ||
                trimmedLine.includes('Why Tailwind Is So Popular') ||
                trimmedLine.includes('Tailwind in Large Projects') ||
                trimmedLine.includes('How Tailwind Improved') ||
                trimmedLine.includes('Early Learning Phase') ||
                trimmedLine.includes('Challenges and Growth') ||
                trimmedLine.includes('Learning Beyond the Classroom') ||
                trimmedLine.includes('How CS Changed My Mindset') ||
                trimmedLine.includes('Why React Continues to Lead')) {
                
                // Treat major sections as h2
                return <h2 key={index} className="text-3xl font-bold text-cyan-400 mt-10 mb-4">{trimmedLine}</h2>;
            } 
            
            if (trimmedLine.startsWith('By Barani Tharan')) {
                // Treat author line as h3 (or custom style)
                return <h3 key={index} className="text-xl font-medium text-gray-300 italic mb-8">{trimmedLine}</h3>;
            }

            if (trimmedLine.startsWith('-') || trimmedLine.startsWith('•')) {
                // Treat list items
                return <li key={index} className="text-lg text-gray-400 ml-6 mb-1 list-disc">{trimmedLine.substring(1).trim()}</li>;
            }

            // Treat everything else as a paragraph
            return <p key={index} className="text-lg text-gray-300 mb-4">{trimmedLine}</p>;
        });
    };

    return (
        <section className="py-20 px-6 min-h-screen bg-[#0c0c0c] text-white">
            <div className="max-w-4xl mx-auto pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block transition-colors">
                        ← Back to Blog List
                    </Link>

                    <p className="text-gray-500 text-sm mb-2">{article.date}</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                        {article.title}
                    </h1>

                    {/* Author Card */}
                    <div className="flex items-center gap-4 border-y border-gray-700 py-4 mb-10">
                        {/* Placeholder for Author Image/Initial if you decide to add one */}
                        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold">BT</div>
                        <div>
                            <p className="text-lg font-bold text-white">Barani Tharan</p>
                            <p className="text-sm text-gray-400">Computer Science & Engineering Student | Frontend Developer</p>
                        </div>
                    </div>
                    
                    {/* Rendered Article Content */}
                    <div className="article-content space-y-4">
                        {renderContent(article.fullContent)}
                    </div>

                    {/* Footer / Call to Action */}
                    <div className="mt-20 pt-8 border-t border-gray-700 text-center">
                        <Link to="/contact" className="px-8 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-500/30">
                            Connect with Barani
                        </Link>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default ArticlePage;