"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  Link as LinkIcon, 
  CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ReactNode } from "react";

interface Project {
  title: string;
  company: string;
  year: string;
  role: string;
  duration: string;
  tools: string[];
  stats: string[];
  heroImage: string;
  overview: ReactNode;
  content: ReactNode;
  link?: string;
}

const projects: Record<string, Project> = {
  "asna-academy": {
    title: "Asna Academy - Sports Academy Management Platform",
    company: "Asna Academy",
    year: "2026",
    role: "Full Stack Developer",
    duration: "2026",
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    stats: [
      "Comprehensive management for sports academies.",
      "Role-based access for admins, coaches, and students.",
      "Integrated e-commerce and finance modules.",
    ],
    heroImage: "/asna-academy.png",
    overview: (
        <>
            <h2 className="text-3xl font-serif">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
                Asna Academy is a comprehensive sports academy management platform designed to streamline operations, from student registration and class management to attendance, financial reporting, and e-commerce. Built with modern web technologies, it ensures high performance, scalability, and a responsive user experience.
            </p>
        </>
    ),
    link: "https://asna-academy-pink.vercel.app/",
    content: (
        <div className="space-y-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Tech Stack</h2>
                 <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Next.js (App Router) for full-stack application",
                        "TypeScript for type safety and maintainability",
                        "Tailwind CSS & Shadcn UI for styling",
                        "Supabase for backend, auth, and database",
                        "Zustand for state management",
                        "React Hook Form & Zod for form validation"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-400">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                             <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl font-serif">Key Features</h2>
                
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white">Role-Based Access Control</h3>
                        <p className="text-gray-400">Supports Superadmin, Admin, Coach, and Student roles, each with a tailored dashboard and permissions.</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white">Comprehensive Dashboard</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Visual statistics for attendance, revenue, and activities.</li>
                            <li>Management of branches, classes, programs, and facilities.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white">Academic & Operational</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Enrollment and attendance tracking.</li>
                            <li>Internal social feed for community interaction.</li>
                            <li>System logs for audit trails.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white">Finance & E-Commerce</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Transaction management with PDF invoice generation.</li>
                            <li>Online shop for sports equipment with inventory management.</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
  },
  "omahsabin": {
    title: "Omahsabin Luxury Villas – Website Redesign",
    company: "Omahsabin",
    year: "2024",
    role: "Frontend Engineer",
    duration: "2024",
    tools: ["Next.js", "React", "Sanity CMS", "Third-party Booking"],
    stats: [
      "Faster page loads and improved SEO.",
      "Smoother booking flow for guests.",
      "Easier content management via Sanity CMS.",
    ],
    heroImage: "/omah-sabin-2.png",
    link: "https://omahsabin.com/",
    overview: (
        <>
            <h2 className="text-3xl font-serif">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
                Omahsabin is a luxury villa experience surrounded by rice fields in Bali. The goal of this project was to redesign the marketing and booking website to better reflect the brand, improve performance, and make it easier for guests to explore the villas and book their stay online.
            </p>
        </>
    ),
    content: (
        <div className="space-y-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-serif">My Role</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Frontend Engineer (Next.js)</li>
                    <li>Integration with headless CMS (Sanity)</li>
                    <li>Third-party booking system integration</li>
                </ul>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl font-serif">What I Built</h2>
                
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Website redesign with Next.js</h3>
                        <p className="text-gray-400">Rebuilt the site using Next.js to improve loading speed, SEO, and developer experience.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Responsive UI</h3>
                        <p className="text-gray-400">Designed and implemented layouts that work seamlessly across desktop and mobile devices, with a focus on imagery and storytelling for the villas.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Multilanguage support</h3>
                        <p className="text-gray-400">Implemented multilingual content so the website can serve different audiences more effectively.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Headless CMS with Sanity</h3>
                        <p className="text-gray-400">Connected the frontend to Sanity as a headless CMS, allowing content editors to manage villa descriptions, images, and blog posts without touching code.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Booking integration</h3>
                        <p className="text-gray-400">Integrated a third-party booking system to streamline reservations while keeping the experience consistent with the site’s design.</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Tech Stack</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Next.js for the frontend framework",
                        "React for UI components",
                        "Sanity as headless CMS",
                        "Third-party booking platform for reservations"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-400">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                             <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  },
  "posind": {
    title: "POS GLID Web App",
    company: "Pos Indonesia",
    year: "2025",
    role: "Frontend Engineer",
    duration: "2025",
    tools: ["React", "React Query", "Redis", "Socket.io"],
    stats: [
      "Revenue increased by 45%.",
      "User retention up by 15%.",
      "Churn rate reduced by 8%.",
    ],
    heroImage: "/posind.png",
    link : "https://pos-oms-web.nutech-integrasi.com/",
    overview: (
        <>
            <h2 className="text-3xl font-serif">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
                POS GLID is a web application built for POS Indonesia to manage operational workflows, from master data to transactions and internal communication. I worked on several core modules that support daily operations and ensure the platform is reliable, secure, and easy to use.
            </p>
        </>
    ),
    content: (
        <div className="space-y-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-serif">My Role</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Frontend Engineer focused on business-critical modules</li>
                    <li>Collaboration with backend team for API design and integration</li>
                </ul>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl font-serif">Modules I Worked On</h2>
                
                <div className="space-y-8">
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white">Master Data Module</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Developed the Master Data module, including table views for large datasets.</li>
                            <li>Built dynamic forms to create and update records.</li>
                            <li>Integrated CRUD operations with backend APIs to keep data consistent and reliable.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white">Transaction Module</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Built the Transaction module with multi-step forms to guide users through complex flows.</li>
                            <li>Used React Query for data fetching, caching, and synchronization with the backend.</li>
                            <li>Ensured proper error handling and loading states for a smooth user experience.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white">IAM (Identity and Access Management) Module</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Implemented features for user creation and management.</li>
                            <li>Configured user roles and menu access to control what each user can see and do.</li>
                            <li>Added password update flows to keep accounts secure.</li>
                            <li>Worked with access token and refresh token mechanisms backed by Redis to manage authentication sessions securely and efficiently.</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white">Live Chat Module</h3>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Built the Live Chat UI, including layout and components for messages and conversations.</li>
                            <li>Implemented real-time communication using Socket.io with handshake for secure connections.</li>
                            <li>Enabled instant messaging so internal teams can coordinate directly inside the platform.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Tech Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "React for building modular and maintainable UI.",
                        "React Query for handling server state and API calls.",
                        "Redis for secure token storage in authentication flows.",
                        "Socket.io for real-time, bidirectional communication."
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-400">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                             <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  },
  "relocation-moving": {
    title: "Relocation Moving",
    company: "Relocation Moving",
    year: "2024",
    role: "Frontend Engineer",
    duration: "2024",
    tools: ["Next.js", "React", "Sanity CMS", "SEO"],
    stats: [
        "Multilingual support for broader reach.",
        "Improved SEO and search visibility.",
        "Easy content management via Sanity CMS.",
    ],
    heroImage: "/relocation-moving.png",
    link: "https://www.relocationmoving.ca/en",
    overview: (
        <>
            <h2 className="text-3xl font-serif">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
                Relocation Moving is a professional moving company serving clients in multiple regions and languages. The goal of this project was to build a multilingual marketing website that clearly communicates their services, builds trust, and performs well in search engines.
            </p>
        </>
    ),
    content: (
        <div className="space-y-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-serif">My Role</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Frontend Engineer (Next.js)</li>
                    <li>CMS architecture and content modeling with Sanity</li>
                    <li>SEO and performance optimization</li>
                </ul>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl font-serif">What I Built</h2>
                
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Multilingual Next.js website</h3>
                        <p className="text-gray-400">Implemented a multilingual site structure so visitors can browse content in different languages while keeping URLs and routes SEO-friendly.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Sanity as Headless CMS</h3>
                        <p className="text-gray-400">Modeled content in Sanity so the Relocation Moving team can manage pages, sections, and copy without touching code.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Reusable components</h3>
                        <p className="text-gray-400">Built reusable sections for hero, services, testimonials, and CTAs to keep the design consistent and easy to extend.</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">Clean information architecture</h3>
                        <p className="text-gray-400">Structured navigation and page hierarchy so visitors can quickly understand services and request quotes.</p>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <h2 className="text-3xl font-serif">SEO & Performance</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Configured meta tags, open graph data, and structured content for better search visibility.</li>
                    <li>Optimized images and layout for fast loading times on both desktop and mobile.</li>
                    <li>Leveraged Next.js features like static generation and caching to deliver a snappy experience.</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Tech Stack</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Next.js for the frontend framework",
                        "React for UI components",
                        "Sanity as the headless CMS",
                        "Deployed on a modern hosting platform"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-400">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                             <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  },
  "vivus-pets": {
    title: "Vivus Pets – Shopify E-commerce Website",
    company: "Vivus Pets",
    year: "2024",
    role: "Shopify Developer",
    duration: "2024",
    tools: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    link: "https://www.vivuspets.com/",
    stats: [
      "Cleaner and more modern UI.",
      "Improved usability and mobile experience.",
      "Faster page load performance.",
      "More stable and user-friendly shopping flow.",
      "Increased potential for higher conversion rates."
    ],
    heroImage: "/vivuspets.png",
    overview: (
        <>
            <h2 className="text-3xl font-serif">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
                Developed and enhanced the Vivus Pets Shopify website by focusing on UI redesign, feature improvements, bug fixing, and user experience optimization to create a faster, more intuitive, and conversion-focused e-commerce experience.
            </p>
        </>
    ),
    content: (
        <div className="space-y-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-serif">What I Did</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Customized and extended a Shopify theme using Liquid, HTML, CSS, and JavaScript</li>
                    <li>Redesigned key pages including Homepage, Collection Pages, and Product Detail Pages</li>
                    <li>Improved responsive design for mobile and tablet devices</li>
                    <li>Added and enhanced e-commerce features such as product variants, cart behavior, and product recommendations</li>
                    <li>Fixed UI, functional, and performance-related bugs</li>
                    <li>Optimized site performance through image optimization and code cleanup</li>
                    <li>Improved navigation, product information clarity, and checkout flow</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Result</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Cleaner and more modern UI</li>
                    <li>Improved usability and mobile experience</li>
                    <li>Faster page load performance</li>
                    <li>More stable and user-friendly shopping flow</li>
                    <li>Increased potential for higher conversion rates</li>
                </ul>
            </div>
             
            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Tech Stack</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Shopify Platform",
                        "Liquid Templating Language",
                        "HTML5 & CSS3",
                        "JavaScript (ES6+)"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-400">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                             <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  },
  "ceisa": {
    title: "CEISA – Trade Module Development",
    company: "CEISA",
    
    year: "2023",
    role: "Frontend Developer",
    duration: "2023",
    tools: ["React", "Tailwind CSS", "Antd", "Axios"],
    stats: [
      "Improved efficiency and reliability of Trade workflows.",
      "Reduced form errors and failed submissions.",
      "Enhanced stability across interconnected modules.",
      "Delivered a smoother and more intuitive user experience."
    ],
    heroImage: "/ceisa.png",
    overview: (
        <>
            <h2 className="text-3xl font-serif">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
                Contributed to the CEISA project by developing complex interactive forms within the Trade module, handling API integrations across multiple modules, and performing bug fixing to improve system stability, data accuracy, and overall user experience.
            </p>
        </>
    ),
    content: (
        <div className="space-y-12">
            <div className="space-y-6">
                <h2 className="text-3xl font-serif">What I Did</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Built complex, dynamic, and validated interactive forms for the Trade module</li>
                    <li>Implemented conditional logic, real-time validation, and robust error handling</li>
                    <li>Integrated multiple APIs to support seamless data flow between modules</li>
                    <li>Fixed bugs related to form submission, API response handling, and state management</li>
                    <li>Improved data consistency and reduced user input errors</li>
                    <li>Collaborated with backend teams to ensure reliable API communication</li>
                </ul>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Result</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Improved efficiency and reliability of Trade workflows</li>
                    <li>Reduced form errors and failed submissions</li>
                    <li>Enhanced stability across interconnected modules</li>
                    <li>Delivered a smoother and more intuitive user experience</li>
                </ul>
            </div>
             
            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Tech Stack</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "React & Tailwind CSS",
                        "Ant Design (UI Library)",
                        "Axios (API Integration)",
                        "Complex Form Handling"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-400">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                             <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  },
  "pma": {
    title: "Project Management Web App (PMA)",
    company: "PMA",
    year: "2024",
    role: "Fullstack Developer",
    duration: "2024",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Antd", "Axios", "SQL"],
    stats: [
      "Enabled structured and efficient project planning workflows",
      "Improved visibility into project progress and performance",
      "Delivered reliable and scalable APIs supporting multiple modules",
      "Provided a clear and user-friendly interface for project stakeholders"
    ],
    heroImage: "/PMA.png",
    overview: (
        <>
            <h2 className="text-3xl font-serif">Overview</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
                Worked on the Project Management Web App (PMA) by developing core project modules, building multi-step forms, designing data-driven dashboards, and implementing CRUD APIs using pure SQL to support project planning, tracking, and execution.
            </p>
        </>
    ),
    content: (
        <div className="space-y-12">
            <div className="space-y-8">
                <h2 className="text-3xl font-serif">What I Did</h2>
                
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Projects Module</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li>Built multi-step and validated forms for project creation and updates</li>
                        <li>Developed data tables with sorting, filtering, and pagination</li>
                        <li>Implemented full CRUD APIs using pure SQL for project data management</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Timeline Module</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li>Developed UI slicing and layouts for Gantt Chart, S-Curve, Timeline Plan, Realization Tracking, Issues Management, and People Assignment</li>
                        <li>Ensured accurate data mapping between timeline views and backend APIs</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">API Development</h3>
                    <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li>Built and maintained CRUD APIs for all related modules</li>
                        <li>Ensured data consistency, validation, and error handling across the system</li>
                        <li>Optimized API performance for large project datasets</li>
                    </ul>
                </div>
            </div>

            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Result</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Enabled structured and efficient project planning workflows</li>
                    <li>Improved visibility into project progress and performance</li>
                    <li>Delivered reliable and scalable APIs supporting multiple modules</li>
                    <li>Provided a clear and user-friendly interface for project stakeholders</li>
                </ul>
            </div>
             
            <div className="space-y-6">
                <h2 className="text-3xl font-serif">Tech Stack</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        "Next.js & TypeScript",
                        "Tailwind CSS & Ant Design",
                        "Axios (API Integration)",
                        "Pure SQL (Backend)"
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-gray-400">
                             <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                             <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
  }
};

export default function WorkDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug];

  if (!project) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-green-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
            <Link href="/works" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Works
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
                <div className="space-y-6">
                    <span className="text-primary font-bold tracking-widest uppercase border border-primary/20 px-3 py-1 rounded-full text-xs">
                        {project.company} • {project.year}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                        {project.title}
                    </h1>
                </div>
                <div className="lg:pl-12">
                   {project.overview}
                </div>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-8 mb-16">
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Role</h3>
                    <p className="text-lg">{project.role}</p>
                </div>
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Duration</h3>
                    <p className="text-lg">{project.duration}</p>
                </div>
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Tools</h3>
                    <p className="text-lg">{project.tools.join(", ")}</p>
                </div>
                <div>
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Live Link</h3>
                    {project.link ? (
                        <Link href={project.link} target="_blank" className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer">
                            Visit Site <LinkIcon className="w-3 h-3" />
                        </Link>
                    ) : (
                        <span className="text-gray-500">Not Available</span>
                    )}
                </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-video overflow-hidden border border-white/10 bg-white/5 mb-24">
                <Image 
                    src={project.heroImage} 
                    alt="Project Hero" 
                    fill 
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto space-y-24">
                
                {/* Key Stats */}
                <div className="bg-[#111] rounded-3xl p-8 md:p-12 border border-white/5">
                    <h3 className="text-xl font-serif mb-8">Impact & Results</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {project.stats.map((stat, i) => (
                            <div key={i} className="space-y-3">
                                <CheckCircle2 className="w-8 h-8 text-primary" />
                                <p className="text-lg font-medium leading-snug">{stat}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                {project.content}

            </div>
        </div>
      </section>

      <Footer showPhysics={false} />
    </main>
  );
}
