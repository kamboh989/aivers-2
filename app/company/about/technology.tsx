import { 
  FaNodeJs, FaReact, FaAngular, FaPython, FaPhp, FaJava, 
   FaWordpress, FaShopify, FaGithub, FaAws 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiFlutter, SiSwift, SiKotlin, 
  SiJavascript, SiNestjs, SiPostgresql, SiMongodb, SiKubernetes, 
  SiDocker, SiTerraform, SiMysql, SiVuedotjs, SiRuby, 
  SiVercel,  SiGo // Golang icon from Si
} from 'react-icons/si';
import { IoDiamondOutline } from 'react-icons/io5'; // For custom/Blender proxy
import { TbAutomation } from 'react-icons/tb'; // Generic automation icon
import { MdOutlineArchitecture } from 'react-icons/md'; // Generic architecture proxy

export default function TechnologiesSection() {
  const techs = [
    { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    { name: "Angular", icon: <FaAngular className="text-[#DD0031]" /> },
    { name: "Swift", icon: <SiSwift className="text-[#F05138]" /> },
    { name: "Type Script", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
    { name: ".NET", icon: <MdOutlineArchitecture className="text-[#512BD4]" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
    { name: "Nest.js", icon: <SiNestjs className="text-[#E0234E]" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
    { name: "Mongo DB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
    { name: "Kotlin", icon: <SiKotlin className="text-[#7F52FF]" /> },
    { name: "My SQL", icon: <SiMysql className="text-[#4479A1]" /> },
    { name: "Terraform", icon: <SiTerraform className="text-[#7B42BC]" /> },
    { name: "Go Lang", icon: <SiGo className="text-[#00ADD8]" /> }, // Updated to SiGo
    { name: "Vue.js", icon: <SiVuedotjs className="text-[#4FC08D]" /> },
    { name: "Java", icon: <FaJava className="text-[#007396]" /> },
    { name: "Ruby", icon: <SiRuby className="text-[#CC342D]" /> },
    { name: "PERN Stack", icon: <SiPostgresql className="text-gray-800" /> },
    { name: "WordPress", icon: <FaWordpress className="text-[#21759B]" /> },
    { name: "Shopify", icon: <FaShopify className="text-[#96BF48]" /> },
    { name: "Web Dev", icon: <IoDiamondOutline className="text-blue-500" /> },
    { name: "Mobile App", icon: <SiSwift className="text-gray-800" /> },
    { name: "Automation", icon: <TbAutomation className="text-purple-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-black" /> },
    { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },

  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 mb-4 tracking-tighter">
          Our Technologies and Platforms
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-16 max-w-4xl mx-auto font-light">
          We provide mobile and web application solutions the way you want them by using the latest technologies and platforms.
        </p>

        {/* Icons Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-12 items-center justify-items-center mb-16">
          {techs.map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-3 group w-full text-center">
              {/* Icon Container with hover effect */}
              <div className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                {tech.icon}
              </div>
              
              {/* Tech Name */}
              <span className="text-sm md:text-base font-medium text-gray-800 leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Contact Button */}
       <a href="/contact" className="inline-block">
  <button className="bg-[#0022FF] hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded flex items-center gap-2 transition-colors duration-300 mx-auto">
    <span className="text-xl">🗪</span> {/* Using a Unicode character for contact chat icon */}
    Contact for Custom Offer
  </button>
</a>
      </div>
    </section>
  );
}