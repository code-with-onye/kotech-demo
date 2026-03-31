"use client";

const articles = [
  {
    date: 'Oct 20, 2025',
    title: 'Top 5 benefits of hiring cleaning service for your home',
    image: 'https://images.unsplash.com/photo-1584820927498-cafe4c11949c?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: 'Sep 18, 2025',
    title: 'How regular cleaning improves indoor air quality cleaning',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800'
  },
  {
    date: 'Jan 15, 2025',
    title: 'The ultimate guide to cleaning your proper sanitation house',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Articles() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">Browse our latest articles</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Stay informed and inspired with our latest articles! From expert cleaning tips to the benefits of professional services, we've.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="group rounded-4xl overflow-hidden shadow-lg relative h-80 cursor-pointer">
            <img 
              src={article.image} 
              alt={article.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white w-full">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                {article.date}
              </span>
              <h3 className="text-xl font-bold leading-snug">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
