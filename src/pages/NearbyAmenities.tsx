import { motion } from 'motion/react';
import React, { useRef } from 'react';
import { ChevronRight, Utensils, GlassWater, Beer, Globe, MapPin, Phone } from 'lucide-react';

export default function NearbyAmenities() {
  const diningRef = useRef<HTMLDivElement>(null);
  const venuesRef = useRef<HTMLDivElement>(null);
  const wineryRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const nearby = [
    {
      title: "Local Dining",
      description: "West Lodi offers a variety of exceptional restaurants and cafes just minutes away.",
      image: "https://lh3.googleusercontent.com/d/1LpQZmaWMoJb_Mde6pbe5fxboE5282ggY",
      ref: diningRef,
      icon: <Utensils className="w-6 h-6" />
    },
    {
      title: "Event Venues",
      description: "Proximity to Lodi's famous wineries and elegant event spaces for any occasion.",
      image: "https://lh3.googleusercontent.com/d/14OeglRRLLdN7psNiVYiFM4OR6Y-gQ58B",
      ref: venuesRef,
      icon: <GlassWater className="w-6 h-6" />
    },
    {
      title: "Wineries and Breweries",
      description: "Experience the heart of Lodi Wine Country with world-class tasting rooms and local craft breweries.",
      image: "https://picsum.photos/seed/winery/800/600",
      ref: wineryRef,
      icon: <Beer className="w-6 h-6" />
    }
  ];

  const diningItems = [
    { 
      name: "Pietro's Trattoria", 
      type: "Italian", 
      distance: "5 mins", 
      description: "A Lodi staple known for authentic Italian cuisine and a beautiful garden patio.",
      website: "https://www.pietroslodi.com/",
      address: "282 Rocky Ln, Lodi, CA 95240",
      phone: "209-368-0613"
    },
    { 
      name: "Appellation Lodi - Wine & Roses", 
      type: "Fine Dining", 
      distance: "8 mins", 
      description: "Award-winning dining experience set within a luxury resort and spa.",
      website: "https://www.appellationhotels.com/hotels/california-lodi/",
      address: "2505 W Turner Rd, Lodi, CA 95242",
      phone: "209-334-6988"
    },
    { 
      name: "Lodi Beer Co.", 
      type: "Brewpub", 
      distance: "10 mins", 
      description: "Great for casual dining and locally crafted beers in a historic downtown setting.",
      website: "https://www.lodibeercompany.com/",
      address: "105 S School St, Lodi, CA 95240",
      phone: "209-368-9931"
    },
    { 
      name: "Dancing Fox", 
      type: "Bakery & Bistro", 
      distance: "10 mins", 
      description: "Charming spot for wood-fired pizzas, fresh bread, and local wines.",
      website: "https://www.thedancingfox.com/",
      address: "203 S School St, Lodi, CA 95240",
      phone: "209-366-2634"
    },
    { 
      name: "Papapavlo's Bistro & Bar", 
      type: "Mediterranean", 
      distance: "10 mins", 
      description: "A popular bistro offering a blend of Mediterranean and Italian flavors in a sophisticated yet comfortable setting.",
      website: "https://papapavlos.com/",
      address: "217 N School St, Lodi, CA 95240",
      phone: "209-625-8611"
    },
    { 
      name: "Market Tavern", 
      type: "American / Tavern", 
      distance: "10 mins", 
      description: "A place where great food, good company, and local spirit come together. Celebrating the best of the Central Valley with seasonal menus, wood-fired pizzas, hand-cut steaks, and locally sourced ingredients.",
      website: "https://markettavernlodi.com/",
      address: "28 S. School St, Lodi, CA 95240",
      phone: "209-310-2485"
    },
    { 
      name: "Golden Ox Diner", 
      type: "Diner / American", 
      distance: "5 mins", 
      description: "A classic local diner serving hearty breakfast and lunch favorites in a friendly atmosphere.",
      website: "https://goldenoxlodi.com/",
      address: "410 W Kettleman Ln, Lodi, CA 95240",
      phone: "209-333-0146"
    },
    { 
      name: "El Pazcifico Mexican Grill & Cantina", 
      type: "Mexican", 
      distance: "10 mins", 
      description: "Authentic Mexican flavors and a vibrant cantina atmosphere in the heart of downtown Lodi.",
      website: "https://elpazcifico.com/",
      address: "114 W Pine St, Lodi, CA 95240",
      phone: "209-224-8126"
    },
    { 
      name: "Black Bear Diner Lodi", 
      type: "Diner / American", 
      distance: "5 mins", 
      description: "Known for its bear-themed decor and large portions of home-style comfort food.",
      website: "http://blackbeardiner.com/",
      address: "2347 W Kettleman Ln, Lodi, CA 95242",
      phone: "209-333-2200"
    },
    { 
      name: "Hollywood Family Café & Catering", 
      type: "Cafe / American", 
      distance: "10 mins", 
      description: "A local favorite for breakfast and lunch, offering a wide variety of classic American dishes.",
      website: "http://hollywoodcafecatering.com/",
      address: "315 S Cherokee Ln, Lodi, CA 95240",
      phone: "209-369-4065"
    },
    { 
      name: "Richmaid Restaurant", 
      type: "American / Diner", 
      distance: "10 mins", 
      description: "A historic Lodi landmark serving traditional American fare and famous for its old-school charm.",
      website: "http://www.richmaidrestaurant.com/",
      address: "100 S Cherokee Ln, Lodi, CA 95240",
      phone: "209-368-4279"
    }
  ];

  const venueItems = [
    { 
      name: "Elite Events Lodi", 
      type: "Event Venue", 
      distance: "5 mins",
      description: "A premier local event venue service specializing in providing a space for creating memorable experiences for all occasions.",
      website: "https://eelodi.com/",
      address: "1420 W Kettleman Ln, Suite C, Lodi, CA 95242",
      phone: "209-227-0406"
    },
    { 
      name: "Oak Farm Vineyards", 
      type: "Winery", 
      distance: "5 mins",
      description: "Stunning estate with historic oaks and elegant tasting rooms, perfect for weddings and events.",
      website: "https://www.oakfarmvineyards.com/",
      address: "23627 Devries Rd, Lodi, CA 95242",
      phone: "209-365-6565"
    },
    { 
      name: "Hutchins Street Square", 
      type: "Community Center", 
      distance: "10 mins",
      description: "A multi-use facility hosting concerts, theater productions, and community gatherings.",
      website: "https://www.hutchinsstreetsquare.com/",
      address: "125 S Hutchins St, Lodi, CA 95240",
      phone: "209-333-6782"
    },
    { 
      name: "Wine & Roses Event Center", 
      type: "Luxury Venue", 
      distance: "8 mins",
      description: "Sophisticated spaces for large-scale events and intimate celebrations alike.",
      website: "https://www.appellationhotels.com/hotels/california-lodi/weddings-events/",
      address: "2505 W Turner Rd, Lodi, CA 95242",
      phone: "209-334-6988"
    },
    { 
      name: "Lodi Grape Festival Grounds", 
      type: "Fairgrounds", 
      distance: "10 mins",
      description: "Host to the annual Grape Festival and various large community events throughout the year.",
      website: "https://www.grapefestival.com/",
      address: "413 E Lockeford St, Lodi, CA 95240",
      phone: "209-369-2771"
    },
    { 
      name: "Jessie's Grove Winery", 
      type: "Winery / Venue", 
      distance: "12 mins",
      description: "One of Lodi's oldest estate wineries, featuring historic vines and a beautiful ranch setting, perfect for outdoor events.",
      website: "http://www.jessiesgrovewinery.com/",
      address: "1973 W Turner Rd, Lodi, CA 95242",
      phone: "209-368-0880"
    }
  ];

  const wineryItems = [
    { 
      name: "Oak Farm Vineyards", 
      type: "Winery", 
      distance: "5 mins",
      description: "A family-owned estate with a rich history, offering elegant wines in a stunning tasting room.",
      website: "https://www.oakfarmvineyards.com/",
      address: "23627 Devries Rd, Lodi, CA 95242",
      phone: "209-365-6565"
    },
    { 
      name: "Lodi Beer Co.", 
      type: "Brewery", 
      distance: "10 mins",
      description: "A staple of downtown Lodi, serving award-winning craft beers and hearty pub fare.",
      website: "https://www.lodibeercompany.com/",
      address: "105 S School St, Lodi, CA 95240",
      phone: "209-368-9931"
    },
    { 
      name: "Michael David Winery", 
      type: "Winery", 
      distance: "12 mins",
      description: "Famous for their bold reds and vibrant atmosphere, including a cafe and bakery.",
      website: "https://www.michaeldavidwinery.com/",
      address: "4580 CA-12, Lodi, CA 95242",
      phone: "209-368-7384"
    },
    { 
      name: "Five Window Beer Co.", 
      type: "Brewery", 
      distance: "10 mins",
      description: "A modern craft brewery in downtown Lodi known for its rotating selection and great outdoor space.",
      website: "https://www.fivewindow.com/",
      address: "9 W Locust St, Lodi, CA 95240",
      phone: "209-224-8036"
    },
    { 
      name: "IDOL Beer Works", 
      type: "Brewery", 
      distance: "10 mins",
      description: "A unique craft brewery in downtown Lodi offering a diverse range of beers in a creative and welcoming environment.",
      website: "https://www.idolbeerworks.com/",
      address: "100 S Sacramento St, Lodi, CA 95240"
    },
    { 
      name: "Jessie's Grove Winery", 
      type: "Winery", 
      distance: "12 mins",
      description: "One of Lodi's oldest estate wineries, featuring historic vines and a beautiful ranch setting.",
      website: "http://www.jessiesgrovewinery.com/",
      address: "1973 W Turner Rd, Lodi, CA 95242",
      phone: "209-368-0880"
    }
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-cloud">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nearby Amenities</h1>
          <p className="text-xl text-graphite/70">Everything Lodi has to offer, right on your doorstep.</p>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {nearby.map((item, index) => (
            <motion.button
              key={item.title}
              onClick={() => scrollToSection(item.ref)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card group overflow-hidden text-left hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gold/30"
            >
              <div className="aspect-video overflow-hidden -mx-6 -mt-6 mb-6 relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-gold shadow-md">
                  {item.icon}
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <ChevronRight className="text-gold group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-graphite/70 leading-relaxed">{item.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-32">
          {/* Local Dining Section */}
          <section ref={diningRef} className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-gold p-3 rounded-xl text-graphite">
                <Utensils size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Local Dining</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {diningItems.map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card border-l-4 border-gold"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{item.name}</h4>
                    <span className="text-xs font-bold uppercase tracking-widest bg-silver/30 px-2 py-1 rounded text-graphite/60">{item.type}</span>
                  </div>
                  <p className="text-graphite/70 mb-4">{item.description}</p>
                  
                  {item.address && (
                    <div className="mb-4 space-y-2 text-sm border-t border-silver/30 pt-4">
                      <div className="flex items-center gap-2 text-graphite/80">
                        <MapPin size={14} className="text-gold" />
                        <span>{item.address}</span>
                      </div>
                      {item.phone && (
                        <div className="flex items-center gap-2 text-graphite/80">
                          <Phone size={14} className="text-gold" />
                          <a href={`tel:${item.phone.replace(/-/g, '')}`} className="hover:text-gold transition-colors">{item.phone}</a>
                        </div>
                      )}
                      {item.website && (
                        <div className="flex items-center gap-2 text-graphite/80">
                          <Globe size={14} className="text-gold" />
                          <a href={item.website} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                            {item.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '').split('/')[0]}
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  <p className="text-sm font-semibold text-gold">Approx. {item.distance} from Lakeshore Village</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Event Venues Section */}
          <section ref={venuesRef} className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-gold p-3 rounded-xl text-graphite">
                <GlassWater size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Event Venues</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {venueItems.map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card border-l-4 border-gold"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{item.name}</h4>
                    <span className="text-xs font-bold uppercase tracking-widest bg-silver/30 px-2 py-1 rounded text-graphite/60">{item.type}</span>
                  </div>
                  <p className="text-graphite/70 mb-4">{item.description}</p>
                  
                  {item.address && (
                    <div className="mb-4 space-y-2 text-sm border-t border-silver/30 pt-4">
                      <div className="flex items-center gap-2 text-graphite/80">
                        <MapPin size={14} className="text-gold" />
                        <span>{item.address}</span>
                      </div>
                      {item.phone && (
                        <div className="flex items-center gap-2 text-graphite/80">
                          <Phone size={14} className="text-gold" />
                          <a href={`tel:${item.phone.replace(/-/g, '')}`} className="hover:text-gold transition-colors">{item.phone}</a>
                        </div>
                      )}
                      {item.website && (
                        <div className="flex items-center gap-2 text-graphite/80">
                          <Globe size={14} className="text-gold" />
                          <a href={item.website} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                            {item.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '').split('/')[0]}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                  <p className="text-sm font-semibold text-gold">Approx. {item.distance} from Lakeshore Village</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Wineries and Breweries Section */}
          <section ref={wineryRef} className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="bg-gold p-3 rounded-xl text-graphite">
                <Beer size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Wineries and Breweries</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {wineryItems.map((item, idx) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="card border-l-4 border-gold"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold">{item.name}</h4>
                    <span className="text-xs font-bold uppercase tracking-widest bg-silver/30 px-2 py-1 rounded text-graphite/60">{item.type}</span>
                  </div>
                  <p className="text-graphite/70 mb-4">{item.description}</p>
                  
                  {item.address && (
                    <div className="mb-4 space-y-2 text-sm border-t border-silver/30 pt-4">
                      <div className="flex items-center gap-2 text-graphite/80">
                        <MapPin size={14} className="text-gold" />
                        <span>{item.address}</span>
                      </div>
                      {item.phone && (
                        <div className="flex items-center gap-2 text-graphite/80">
                          <Phone size={14} className="text-gold" />
                          <a href={`tel:${item.phone.replace(/-/g, '')}`} className="hover:text-gold transition-colors">{item.phone}</a>
                        </div>
                      )}
                      {item.website && (
                        <div className="flex items-center gap-2 text-graphite/80">
                          <Globe size={14} className="text-gold" />
                          <a href={item.website} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                            {item.website.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '').split('/')[0]}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                  <p className="text-sm font-semibold text-gold">Approx. {item.distance} from Lakeshore Village</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
