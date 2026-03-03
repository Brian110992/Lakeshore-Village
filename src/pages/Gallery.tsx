import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { id: 1, src: 'https://lh3.googleusercontent.com/d/1quEIGZSxoglIAOY5Yi-c8GdQud30U3t1', title: 'Mallard Lake Sunset' },
    { id: 2, src: 'https://lh3.googleusercontent.com/d/14Qr_0az7v_kGUknL44Q6NJ6Fijonmgr7', title: 'Waterfront Living' },
    { id: 3, src: 'https://lh3.googleusercontent.com/d/1lpkLkeA6WytgSwSl2919QK6hINoJW0gu', title: 'Lakeshore Village' },
    { id: 4, src: 'https://lh3.googleusercontent.com/d/1TWCIs_V3OC1MrXgZAzUfL7Lo1v9bnEDh', title: 'Lakeshore Village' },
    { id: 5, src: 'https://lh3.googleusercontent.com/d/1FS6v931zgDn0LiGLK-Zv1INuJoLko7vE', title: 'Lakeshore Village' },
    { id: 6, src: 'https://lh3.googleusercontent.com/d/1SCy54Q3tBclsCS3UoLK3NztfADUuYoJh', title: 'Lakeshore Village' },
    { id: 7, src: 'https://lh3.googleusercontent.com/d/1gMc8HiQJTkIKmIRwunMykTjxgsQfv3z4', title: 'Lakeshore Village' },
    { id: 8, src: 'https://lh3.googleusercontent.com/d/1-nn9SgaqDFh5scOYOmyKN7V5xLZlDel-', title: 'Lakeshore Village' },
    { id: 9, src: 'https://lh3.googleusercontent.com/d/1jj3mVchgnySCqCnTQb9Q9dOOPDOYplIE', title: 'Lakeshore Village' },
    { id: 10, src: 'https://lh3.googleusercontent.com/d/1c6bLbGACyxgAmw-ro3ckL8oQ0qBIuHwM', title: 'Lakeshore Village' },
    { id: 11, src: 'https://lh3.googleusercontent.com/d/1yQSP2L8HmlbfLXnBRbFDgtN8Xrtmhfvv', title: 'Lakeshore Village' },
    { id: 12, src: 'https://lh3.googleusercontent.com/d/1kP0aWvY-cDiDorWIYdRgXpck6b6vME2f', title: 'Lakeshore Village' },
    { id: 13, src: 'https://lh3.googleusercontent.com/d/1Koiu9Kn921vjB-QHQQ4Vy2vFbTDfpSVb', title: 'Lakeshore Village' },
    { id: 14, src: 'https://lh3.googleusercontent.com/d/1aWhVtlQf2xUUmzz7ZbzLYob_FsjXN7hS', title: 'Lakeshore Village' },
  ];

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % images.length);
    }
  }, [selectedIndex, images.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  }, [selectedIndex, images.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedIndex]);

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-graphite/70">A glimpse into the private waterfront lifestyle of Lakeshore Village.</p>
        </motion.div>

        {/* YouTube Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16 aspect-video bg-graphite/5 rounded-2xl border-2 border-dashed border-gold/30 flex flex-col items-center justify-center group hover:border-gold/50 transition-colors"
        >
          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Play size={40} className="text-gold fill-gold ml-1" />
          </div>
          <p className="text-graphite/60 font-bold text-lg">YouTube Video Placeholder</p>
          <p className="text-sm text-graphite/40 mt-2 italic">Coming Soon</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative rounded-2xl overflow-hidden shadow-lg aspect-square cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-bold text-xl">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={handleClose}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={handleClose}
            >
              <X size={40} />
            </button>

            <button 
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 p-2 rounded-full"
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
              <ChevronLeft size={48} />
            </button>

            <button 
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-[110] bg-white/10 p-2 rounded-full"
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedIndex].src} 
                alt={images[selectedIndex].title} 
                className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-lg"
                referrerPolicy="no-referrer"
              />
              <p className="text-white mt-6 text-xl font-medium tracking-wide">
                {images[selectedIndex].title} ({selectedIndex + 1} / {images.length})
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
