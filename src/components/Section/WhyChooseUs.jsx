import {
  ShieldCheck,
  Stethoscope,
  Hospital,
  Landmark,
  BadgeDollarSign,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: "22+ Years in Healthcare",
    desc: "Proven leadership across MedTech, biopharma, and clinical sales domains.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: "Access to 200+ Specialists",
    desc: "Strong relationships with neurologists, cardiologists, and pain specialists.",
  },
  {
    icon: <Hospital className="w-8 h-8 text-blue-600" />,
    title: "Trusted by Hospitals",
    desc: "Partnered with Apollo, Yashoda, AIG, Care, KIMS, and others.",
  },
  {
    icon: <Landmark className="w-8 h-8 text-blue-600" />,
    title: "Public Sector Reach",
    desc: "Presence in AIIMS, NIMS, ESI, Armed Forces & Railways.",
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8 text-blue-600" />,
    title: "Value-Based Pricing",
    desc: "Ethical pricing and concept-driven clinical selling strategy.",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Skilled Clinical Team",
    desc: "Biomedical engineers and clinical sales reps deliver reliable, on-ground support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-slate-50 py-20" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
        <p className="text-gray-500 mb-12 max-w-3xl mx-auto">
          We combine decades of healthcare experience with deep clinical
          expertise and an unmatched hospital network to bring advanced,
          affordable care solutions to South India.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
