import { motion } from 'motion/react';

export default function Search() {
  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Search Lakeshore Village Homes</h1>
          <p className="text-xl text-graphite/70">Browse the latest listings in Lodi's premier waterfront community.</p>
        </motion.div>

        <div className="card overflow-hidden p-0 shadow-2xl border border-silver/20">
          <iframe 
            src="https://www.thehalsteadteam.com/search#?q_limit=200&mlsId=88&multi_search=Lodi,%20CA&multi_cat=CityState&status=1%7C3&q_sort=featured&q_offset=0" 
            width="100%" 
            height="800px" 
            style={{ border: 'none' }}
            title="IDX Search"
          />
        </div>
      </div>
    </div>
  );
}
