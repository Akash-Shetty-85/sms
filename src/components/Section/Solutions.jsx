const Solutions = () => {
  const specialties = [
    {
      title: "Neurology & Neurosurgery",
      subtitle: "DBS, IONM",
      icon: "🧠",
    },
    {
      title: "Cardiology & Critical Care",
      subtitle: "Cardiac balloons",
      icon: "❤️",
    },
    {
      title: "Orthopedic & Spine",
      subtitle: "Spinal Implants, Cranial Robotics",
      icon: "🦴",
    },
    {
      title: "Laparoscopy & Urology",
      subtitle: "Energy Devices, Endoscopic Tools",
      icon: "🔬",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 text-center" id="solutions">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 mt-2">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
