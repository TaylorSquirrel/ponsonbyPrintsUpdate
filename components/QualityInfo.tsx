
import React from 'react';

const QualityInfo: React.FC = () => {
    const images = [
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562280946-97e3053443a8?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <div className="mt-12 bg-gray-800/50 p-6 sm:p-8 rounded-xl ring-1 ring-white/10">
            <h2 className="text-2xl font-bold text-white text-center">Unmatched Quality & Precision</h2>
            <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
                At Ponsonby Prints, we are dedicated to delivering exceptional quality. Using state-of-the-art printers and premium, sustainably sourced paper, we ensure every print is a masterpiece of clarity, color, and longevity.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
                        <img 
                            src={src} 
                            alt={`High quality print example ${index + 1}`} 
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out" 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QualityInfo;
