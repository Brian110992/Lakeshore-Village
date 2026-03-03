import { motion } from 'motion/react';

export default function OnSiteAmenities() {
  const amenities = [
    {
      title: "Private Clubhouse",
      description: "A central hub for community gatherings, private events, and neighborhood meetings.",
      image: "https://lh3.googleusercontent.com/d/1PagunYNmy_0R-2CR9buPNa2UctmZ4fAu"
    },
    {
      title: "Community Pool",
      description: "A sparkling, well-maintained pool area exclusive to Lakeshore Village residents.",
      image: "https://lh3.googleusercontent.com/d/1yC6Vi7K-QFRBUNilkPUvPcnSlgkx3KZD"
    },
    {
      title: "Mallard Lake Access",
      description: "There is no public access to Mallard Lake, only residents can use the lake for boating, paddle boarding, kayaking, and catch-and-release fishing.",
      image: "https://lh3.googleusercontent.com/d/1rB1Oi6I0DN0FF6yyj5bmrpqtZtv56Tpe"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">On-Site Amenities</h1>
          <p className="text-xl text-graphite/70">Exclusive facilities for the residents of Lakeshore Village.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group overflow-hidden"
            >
              <div className="aspect-video overflow-hidden -mx-6 -mt-6 mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-graphite/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
