const team = [
  {
    name: "Kishor Kumar",
    role: "Head of Sales & Marketing",
    bio: "22+ years in MedTech with deep expertise in clinical selling, hospital strategy, and product launches.",
    initials: "KK",
  },
  {
    name: "Pratyusha Lagishetty",
    role: "Director",
    bio: "Former banker and corporate strategist bringing financial discipline and governance to MedTech.",
    initials: "PL",
  },
  {
    name: "Manjula Lingam",
    role: "Director",
    bio: "Experienced academic and implant innovator improving access to cost-effective medical devices.",
    initials: "ML",
  },
  {
    name: "Bheema Venkataramana",
    role: "Investor & Working Partner",
    bio: "Seasoned sales leader with 18+ years in equity and wealth management driving business growth.",
    initials: "BV",
  },
];

const Leadership = () => {
  return (
    <section className="bg-white py-20" id="leadership">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Leadership Team
        </h2>
        <p className="text-gray-500 mb-12">
          Visionaries driving innovation, efficiency, and patient-first impact
          in healthcare.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-slate-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white text-2xl flex items-center justify-center font-semibold mb-4">
                {member.initials}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium text-sm">{member.role}</p>
              <p className="text-sm text-gray-600 mt-3">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
