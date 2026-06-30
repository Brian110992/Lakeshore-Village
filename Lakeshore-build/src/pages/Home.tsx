import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/d/1KTTFfeLQele-8UUmBCPGv5Jf5zwVwWVD"
            alt="Lakeshore Village Waterfront"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-4 drop-shadow-2xl"
          >
            The Vision of Mallard Lake
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gold font-accent text-3xl md:text-4xl drop-shadow-lg"
          >
            Lakeshore Village
          </motion.p>
        </div>
      </section>

      {/* Development & Purpose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Photos */}
            <div className="flex flex-col gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl aspect-video"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1DL_enylTJHU54rw4pL3UXucA2OWRDi6H" 
                  alt="Mallard Lake View" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-2xl aspect-video"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/1lM1itey5rESrUIt6YyZqVBsbQjbe3W5p" 
                  alt="Lakeshore Village Community" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Development & Purpose (1980s)</h2>
                <p className="text-lg leading-relaxed text-graphite/80">
                  Lakeshore Village was established in the early 1980s by the Grupe Development Company. 
                  The centerpiece of the project was the creation of Mallard Lake, a private, man-made lake 
                  engineered specifically to provide a "waterfront lifestyle" in the heart of West Lodi.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gold">The "Why" Behind Mallard Lake</h3>
                
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    <span className="font-bold">Private Recreation:</span> Unlike public lakes, Mallard Lake was designed for the exclusive use of Lakeshore Village residents. It was built to offer a serene environment for electric boating, kayaking, and catch-and-release fishing right from a homeowner's backyard.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    <span className="font-bold">Master-Planned Serenity:</span> The developers wanted to create a gated-feel community (with some literal gated sections) that used water as a natural sound barrier and aesthetic centerpiece, separating the residences from the nearby commercial activity on Kettleman Lane.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/search" className="btn-primary inline-block">
                  Explore Waterfront Homes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-silver/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Expertise in Lakeshore Village</h2>
          <p className="text-xl mb-10 text-graphite/70">
            The Halstead Team is your definitive local resource for buying or selling in this unique waterfront community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/market-report" className="btn-primary">
              Get Your Home Value
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
