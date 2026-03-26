import { Users, Target, Zap } from 'lucide-react'; // Icons ke liye lucide-react best hai

export default function ValuesSection() {
  const values = [
    {
      title: "People",
      icon: <Users size={40} strokeWidth={1.5} />,
      description: "At aiverse.pk, our people are our greatest asset. We foster a culture of collaboration, continuous learning, and mutual respect, enabling every team member to unleash their full potential and deliver exceptional results for our clients."
    },
    {
      title: "Purpose",
      icon: <Target size={40} strokeWidth={1.5} />,
      description: "We exist to revolutionize the digital realm, championing simplicity, security, and innovation. Our mission is to craft tailored solutions that empower businesses to thrive in the fast-paced world of technology."
    },
    {
      title: "Process",
      icon: <Zap size={40} strokeWidth={1.5} />,
      description: "Our streamlined processes drive efficiency and excellence. Through rigorous planning, agile methodologies, and continuous refinement, we ensure the seamless delivery of high-quality software solutions that exceed client expectations."
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((item, index) => (
          <div key={index} className="flex flex-col space-y-4">
            {/* Icon - Blue Theme */}
            <div className="text-blue-600 mb-2">
              {item.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900">
              {item.title}
            </h3>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}