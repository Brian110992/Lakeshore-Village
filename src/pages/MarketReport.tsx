import { motion } from 'motion/react';

export default function MarketReport() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lakeshore Village Market Report</h1>
          <p className="text-xl text-graphite/70">Get a real-time valuation of your Lakeshore Village home.</p>
        </motion.div>

        <div className="card overflow-hidden p-0 shadow-2xl border border-silver/20">
          <iframe 
            src="https://www.thehalsteadteam.com/homevalue" 
            width="100%" 
            height="900px" 
            style={{ border: 'none' }}
            title="Home Valuation Tool"
          />
        </div>
      </div>
    </div>
  );
}
