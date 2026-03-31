const team = [
  {
    name: 'Jackson Reed',
    role: 'Senior Cleaning Specialist',
    image: 'https://images.unsplash.com/photo-1584820927498-cafe4c11949c?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Sophia Jane',
    role: 'Senior Cleaning Specialist',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Emma Grace',
    role: 'Senior Cleaning Specialist',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Team() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet our cleaning experts</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Our team of cleaning experts is passionate about delivering top-notch results you can see and feel. With years of experience, specialized training.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="group rounded-3xl overflow-hidden shadow-lg bg-gray-50">
            <div className="h-80 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-primary text-white text-center">
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-white/80 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
