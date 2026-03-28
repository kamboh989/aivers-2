"use client"; // Required for interactivity (open/close)

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Icons ke liye

// Aapki software company 'aiverse.pk' se related real questions aur answers
const faqData = [
  {
    question: "What engagement models does aiverse.pk offer for software projects?",
    answer: "We provide flexible models including Fixed Price for clear scopes, Time & Material for evolving projects, and Dedicated Team models for long-term collaboration. This allows aiverse.pk to tailor the partnership to your budget and project needs."
  },
  {
    question: "How does aiverse.pk handle AI integration into existing business applications?",
    answer: "Our experts conduct a feasibility study to understand your current systems. We then develop customized AI APIs or microservices (like custom LLMs, computer vision, or predictive models) and integrate them seamlessly into your existing software without disrupting workflows."
  },
  {
    question: "How soon can engineers be assigned to our software project?",
    answer: "aiverse.pk maintains a bench of skilled software engineers and AI developers. Typically, for standard tech stacks, we can ramp up and assign a core team within 1-2 weeks. For highly specialized skills, it might take 3-4 weeks."
  },
  {
    question: "What is aiverse.pk's policy on intellectual property (IP) rights and source code?",
    answer: "Complete transparency. Upon project completion and payment settlement, full ownership of the IP, source code, and design assets are transferred to the client. This is explicitly stated in our master service agreement."
  },
  {
    question: "What security measures does aiverse.pk take to protect sensitive data?",
    answer: "Data security is paramount. We adhere to industry standards including GDPR compliance where needed, strict NDA enforcement, encrypted data transmission, regular vulnerability assessments, and secure coding practices (OWASP) throughout the development lifecycle."
  },
  {
    question: "Can aiverse.pk assist with architecting and designing legacy software modernization?",
    answer: "Yes, we specialize in evaluating aged systems and creating a roadmap for modernization—whether it's migrating to a microservices architecture, cloud migration (AWS/Azure), or full-stack re-platforming using modern tech stacks."
  },
  {
    question: "How does aiverse.pk tackle challenging projects with aggressive timelines?",
    answer: "We employ Agile methodologies, use continuous integration/deployment (CI/CD) pipelines, and increase resource allocation through our internal talent pool. Our project managers ensure rigorous scope control and rapid feedback loops to meet deadlines without compromising quality."
  },
  {
    question: "How crucial is communication during the software development lifecycle?",
    answer: "It is critical. We ensure daily/weekly stand-ups via Slack/Teams, regular sprint demos, and provide full access to project management tools like Jira or ClickUp, keeping you updated at every stage of development at aiverse.pk."
  },
  {
    question: "What occurs if we need to modify the scope of work mid-project?",
    answer: "We follow a structured Change Request (CR) process. Modifications are evaluated for their impact on budget and timeline. If approved, the agreement is updated, and the development sprints are adjusted accordingly to accommodate the new requirements."
  },
  {
    question: "What post-launch support and maintenance plans does aiverse.pk provide?",
    answer: "aiverse.pk offers comprehensive support plans including bug fixes, security patches, performance monitoring, server maintenance, and proactive scaling support for defined periods post-deployment to ensure software longevity."
  }
];

export default function FAQSection() {
  // State to track which question is currently open
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id); // Close if open, open if closed
  };

  return (
    <section className=" py-20 px-6 md:px-12 lg:px-24 w-full font-sans">
      <div className="max-w-6xl mx-auto">
        {/* White Container with Rounded Corners & Shadow */}
        <div className="bg-white rounded-3xl p-10 md:p-12 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
          
          {/* Badge & Heading */}
          <div className="text-center mb-16">
             <span className="bg-[#f3f4f6] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest text-gray-500 border border-gray-200">
                FAQ
              </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] mt-6 tracking-tighter leading-tight max-w-4xl mx-auto">
              Find answers to the most frequently asked questions.
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-200 last:border-none pb-1">
                <button 
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between text-left py-6 group gap-4"
                  aria-expanded={openId === index}
                >
                  <h3 className="text-lg md:text-xl font-bold text-[#111827] transition-colors group-hover:text-blue-700 leading-snug">
                    {item.question}
                  </h3>
                  
                  {/* Icon that switches and rotates */}
                  <div className={`shrink-0 text-xl font-light text-black transition-transform duration-300 ${openId === index ? 'rotate-180 text-blue-700' : ''}`}>
                    {openId === index ? <ChevronUp strokeWidth={1}/> : <ChevronDown strokeWidth={1} />}
                  </div>
                </button>

                {/* Animated Answer Panel */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openId === index ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl pr-10 font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}