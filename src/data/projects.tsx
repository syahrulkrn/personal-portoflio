import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export interface TOCItem {
  id: string;
  label: string;
}

export interface Project {
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
  videoUrl?: string;
  shortDescription?: string;
  // New fields for design matching
  toc: TOCItem[];
  likes?: number;
  views?: string;
  teamSize?: number;
  repoUrl?: string;
  demoUrl?: string; // If different from link, or specific video link
}

export const projects: Record<string, Project> = {
  "asna-academy": {
    title: "Asna Academy",
    company: "Asna Academy",
    year: "2026",
    role: "Full Stack Engineer",
    duration: "2026",
    tools: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    stats: [
      "Comprehensive management for sports academies.",
      "Role-based access for admins, coaches, and students.",
      "Integrated e-commerce and finance modules.",
    ],
    shortDescription:
      "A comprehensive platform for managing sports academies, including registration, attendance, finance, and e-commerce.",
    videoUrl: "https://www.youtube.com/watch?v=YH1sRSWjE4Y",
    heroImage: "/projects/asna-academy/asna-academy.png",
    likes: 420,
    views: "3,210",
    teamSize: 3,
    link: "https://asnaacademy.com/",
    toc: [
      { id: "overview", label: "Short Explanation" },
      { id: "tech-stack", label: "Tech Stack Used" },
      { id: "features", label: "Key Features" },
      { id: "demo", label: "Demo Video" },
    ],
    overview: (
      <>
        <h2
          id="overview"
          className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative"
        >
          Short Explanation
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Asna Academy is a comprehensive sports academy management platform
          designed to streamline operations, from student registration and class
          management to attendance, financial reporting, and e-commerce. Built
          with modern web technologies, it ensures high performance,
          scalability, and a responsive user experience.
        </p>
      </>
    ),

    content: (
      <div className="space-y-16">
        <div id="tech-stack" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            Tech Stack Used
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Next.js (App Router) for full-stack application",
              "TypeScript for type safety and maintainability",
              "Tailwind CSS & Shadcn UI for styling",
              "Supabase for backend, auth, and database",
              "Zustand for state management",
              "React Hook Form & Zod for form validation",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="features" className="space-y-8 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            Key Features
          </h2>

          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">Responsive UI</h3>

              <p className="text-gray-400">
                Designed and implemented a fully responsive user interface that
                delivers a seamless experience across desktop and mobile
                devices.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Role-Based Access Control
              </h3>

              <p className="text-gray-400">
                Supports Superadmin, Admin, Coach, and Student roles, each with
                a tailored dashboard and permissions.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Comprehensive Dashboard
              </h3>
              <Image
                src="/projects/asna-academy/asnaacademy-1.jpg"
                alt="Role-Based Access Control"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg border border-white/10"
              />
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  Visual statistics for attendance, revenue, and activities.
                </li>
                <li>
                  Management of branches, classes, programs, and facilities.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Academic & Operational
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Enrollment and attendance tracking.</li>
                <li>Internal social feed for community interaction.</li>
                <li>System logs for audit trails.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Finance & E-Commerce
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Transaction management with PDF invoice generation.</li>
                <li>
                  Online shop for sports equipment with inventory management.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="demo" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            Demo Video
          </h2>
          <div className="relative aspect-video overflow-hidden border border-white/10 bg-white/5 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/YH1sRSWjE4Y"
              title="Project Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    ),
  },
  omahsabin: {
    title: "Omah Sabin",
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
    shortDescription:
      "Redesigned the Omahsabin Luxury Villas website with Next.js, Sanity CMS, and third-party booking integration.",
    heroImage: "/projects/omah-sabin/omah-sabin-2.png",
    likes: 522,
    views: "4,622",
    teamSize: 4,
    link: "https://omahsabin.com/",
    videoUrl: "https://www.youtube.com/watch?v=rlepa0fdd8o",
    toc: [
      { id: "overview", label: "Short Explanation" },
      { id: "role", label: "My Role" },
      { id: "built", label: "What I Built" },
      { id: "tech-stack", label: "Tech Stack Used" },
      { id: "demo", label: "Demo Video" },
    ],
    overview: (
      <>
        <h2
          id="overview"
          className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative"
        >
          Short Explanation
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Omahsabin is a luxury villa experience surrounded by rice fields in
          Bali. The goal of this project was to redesign the marketing and
          booking website to better reflect the brand, improve performance, and
          make it easier for guests to explore the villas and book their stay
          online.
        </p>
      </>
    ),
    content: (
      <div className="space-y-16">
        <div id="role" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            My Role
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Frontend Engineer (Next.js)</li>
            <li>Integration with headless CMS (Sanity)</li>
            <li>Third-party booking system integration</li>
          </ul>
        </div>

        <div id="built" className="space-y-8 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            What I Built
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                Website redesign with Next.js
              </h3>
              <p className="text-gray-400">
                Led a full website rebuild using Next.js, focusing on
                performance, scalability, and SEO best practices. Improved page
                load times, optimized rendering, and enhanced overall developer
                experience for easier long-term maintenance.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">Responsive UI</h3>
              <Image
                src="/projects/omah-sabin/omahsabinui.jpg"
                width={400}
                height={400}
                alt="Responsive UI"
                className="w-full h-auto rounded-lg border border-white/10"
              />
              <p className="text-gray-400">
                Designed and implemented a fully responsive user interface that
                delivers a seamless experience across desktop and mobile
                devices. Emphasized visual storytelling and high-quality imagery
                to showcase each villa, creating an immersive and engaging
                browsing experience for users.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                Booking integration
              </h3>
              <Image
                src="/projects/omah-sabin/bookapp.png"
                width={400}
                height={400}
                alt="Booking integration"
                className="w-full h-auto rounded-lg border border-white/10"
              />
              <p className="text-gray-400">
                Integrated a third-party booking system to simplify the
                reservation process while maintaining visual and interaction
                consistency with the website’s design. Ensured smooth user flow
                from discovery to booking without disrupting the brand
                experience.
              </p>
            </div>
          </div>
        </div>

        <div id="tech-stack" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            Tech Stack Used
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Next.js for the frontend framework",
              "React for UI components",
              "Third-party booking platform for reservations",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="demo" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            Demo Video
          </h2>
          <div className="relative aspect-video overflow-hidden border border-white/10 bg-white/5 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/rlepa0fdd8o"
              title="Project Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    ),
  },
  posind: {
    title: "POS GLID",
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
    shortDescription:
      "Development of core modules, Master Data, Transactions, IAM, and real-time Live Chat for POS GLID.",
    heroImage: "/projects/pos-indonesia/posind.png",
    likes: 350,
    views: "2,800",
    teamSize: 5,
    link: "https://pos-oms-web.nutech-integrasi.com/",
    toc: [
      { id: "overview", label: "Short Explanation" },
      { id: "role", label: "My Role" },
      { id: "modules", label: "Modules I Worked On" },
      { id: "tech-highlights", label: "Tech Highlights" },
    ],
    overview: (
      <>
        <h2
          id="overview"
          className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative"
        >
          Short Explanation
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          POS GLID is a web application built for POS Indonesia to manage
          operational workflows, from master data to transactions and internal
          communication. I worked on several core modules that support daily
          operations and ensure the platform is reliable, secure, and easy to
          use.
        </p>
      </>
    ),
    content: (
      <div className="space-y-16">
        <div id="role" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            My Role
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Frontend Engineer focused on business-critical modules</li>
            <li>
              Collaboration with backend team for API design and integration
            </li>
          </ul>
        </div>

        <div id="modules" className="space-y-8 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            Modules I Worked On
          </h2>

          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Master Data Module
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  Developed the Master Data module, including table views for
                  large datasets.
                </li>
                <li>Built dynamic forms to create and update records.</li>
                <li>
                  Integrated CRUD operations with backend APIs to keep data
                  consistent and reliable.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                Transaction Module
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  Built the Transaction module with multi-step forms to guide
                  users through complex flows.
                </li>
                <li>
                  Used React Query for data fetching, caching, and
                  synchronization with the backend.
                </li>
                <li>
                  Ensured proper error handling and loading states for a smooth
                  user experience.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">
                IAM (Identity and Access Management) Module
              </h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Implemented features for user creation and management.</li>
                <li>
                  Configured user roles and menu access to control what each
                  user can see and do.
                </li>
                <li>Added password update flows to keep accounts secure.</li>
                <li>
                  Worked with access token and refresh token mechanisms backed
                  by Redis to manage authentication sessions securely and
                  efficiently.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Live Chat Module</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>
                  Built the Live Chat UI, including layout and components for
                  messages and conversations.
                </li>
                <li>
                  Implemented real-time communication using Socket.io with
                  handshake for secure connections.
                </li>
                <li>
                  Enabled instant messaging so internal teams can coordinate
                  directly inside the platform.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="tech-highlights" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            Tech Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "React for building modular and maintainable UI.",
              "React Query for handling server state and API calls.",
              "Redis for secure token storage in authentication flows.",
              "Socket.io for real-time, bidirectional communication.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
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
    shortDescription:
      "Built a multilingual marketing website using Next.js and Sanity (Headless CMS).",
    heroImage: "/projects/relocation-moving/relocation-moving.png",
    likes: 180,
    views: "1,200",
    teamSize: 2,
    link: "https://www.relocationmoving.ca/en",
    toc: [
      { id: "overview", label: "Short Explanation" },
      { id: "role", label: "My Role" },
      { id: "built", label: "What I Built" },
      { id: "seo", label: "SEO & Performance" },
      { id: "tech-stack", label: "Tech Stack" },
    ],
    overview: (
      <>
        <h2
          id="overview"
          className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative"
        >
          Short Explanation
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Relocation Moving is a professional moving company serving clients in
          multiple regions and languages. The goal of this project was to build
          a multilingual marketing website that clearly communicates their
          services, builds trust, and performs well in search engines.
        </p>
      </>
    ),
    content: (
      <div className="space-y-16">
        <div id="role" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            My Role
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Frontend Engineer (Next.js)</li>
            <li>CMS architecture and content modeling with Sanity</li>
            <li>SEO and performance optimization</li>
          </ul>
        </div>

        <div id="built" className="space-y-8 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            What I Built
          </h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                Multilingual Next.js website
              </h3>
              <Image
                src="/projects/relocation-moving/reloc.gif"
                width={600}
                height={400}
                alt="Multilingual Next.js website"
                className="w-full h-auto rounded-lg border border-white/10"
              />
              <p className="text-gray-400">
                Implemented a multilingual site structure so visitors can browse
                content in different languages while keeping URLs and routes
                SEO-friendly.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                Sanity as Headless CMS
              </h3>
              <p className="text-gray-400">
                Modeled content in Sanity so the Relocation Moving team can
                manage pages, sections, and copy without touching code.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                Reusable components
              </h3>
              <p className="text-gray-400">
                Built reusable sections for hero, services, testimonials, and
                CTAs to keep the design consistent and easy to extend.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                Clean information architecture
              </h3>
              <p className="text-gray-400">
                Structured navigation and page hierarchy so visitors can quickly
                understand services and request quotes.
              </p>
            </div>
          </div>
        </div>

        <div id="seo" className="space-y-8 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            SEO & Performance
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
              Configured meta tags, open graph data, and structured content for
              better search visibility.
            </li>
            <li>
              Optimized images and layout for fast loading times on both desktop
              and mobile.
            </li>
            <li>
              Leveraged Next.js features like static generation and caching to
              deliver a snappy experience.
            </li>
          </ul>
        </div>

        <div id="tech-stack" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            Tech Stack
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Next.js for the frontend framework",
              "React for UI components",
              "Sanity as the headless CMS",
              "Deployed on a modern hosting platform",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-gray-400">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

                <div id="demo" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            Demo Video
          </h2>
          <div className="relative aspect-video overflow-hidden border border-white/10 bg-white/5 rounded-lg">
            <iframe
              src="https://www.youtube.com/embed/8cqyAuXpYvw"
              title="Project Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    ),
  },
  "vivus-pets": {
    title: "Vivus Pets",
    company: "Vivus Pets",
    year: "2024",
    role: "Shopify Developer",
    duration: "2024",
    tools: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    link: "https://www.vivuspets.com/",
    shortDescription:
      "Redesigned and enhanced the Shopify e-commerce experience with custom Liquid development.",
    stats: [
      "Cleaner and more modern UI.",
      "Improved usability and mobile experience.",
      "Faster page load performance.",
      "More stable and user-friendly shopping flow.",
      "Increased potential for higher conversion rates.",
    ],
    heroImage: "/vivuspets.png",
    likes: 150,
    views: "980",
    teamSize: 1,
    toc: [
      { id: "overview", label: "Short Explanation" },
      { id: "did", label: "What I Did" },
    ],
    overview: (
      <>
        <h2
          id="overview"
          className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative"
        >
          Short Explanation
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Developed and enhanced the Vivus Pets Shopify website by focusing on
          UI redesign, feature improvements, bug fixing, and user experience
          optimization to create a faster, more intuitive, and
          conversion-focused e-commerce experience.
        </p>
      </>
    ),
    content: (
      <div className="space-y-16">
        <div id="did" className="space-y-6 scroll-mt-32">
          <h2 className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative">
            What I Did
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>
              Customized and extended a Shopify theme using Liquid, HTML, CSS,
              and JavaScript
            </li>
            <li>
              Redesigned key pages including Homepage, Collection Pages, and
              Product Detail Pages
            </li>
            <li>Improved responsive design for mobile and tablet devices</li>
            <li>
              Added and enhanced e-commerce features such as product variants,
              cart behavior, and product recommendations
            </li>
            <li>Fixed UI, functional, and performance-related bugs</li>
          </ul>
        </div>
      </div>
    ),
  },
  ceisa: {
    title: "CEISA",
    company: "CEISA",
    year: "2023",
    role: "Frontend Developer",
    duration: "2023",
    tools: ["React", "Ant Design", "Axios", "Java Spring Boot"],
    stats: [
      "Improved system stability.",
      "Enhanced data accuracy.",
      "Streamlined user workflows.",
    ],
    heroImage: "/projects/ceisa/ceisa.png",
    shortDescription:
      "Developed complex interactive forms and handled API integrations for the Trade module to improve system stability and data accuracy.",
    toc: [],
    overview: (
      <>
        <h2
          id="overview"
          className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative"
        >
          Short Explanation
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Developed complex interactive forms and handled API integrations for
          the Trade module to improve system stability and data accuracy.
        </p>
      </>
    ),
    content: <></>,
  },
  pma: {
    title: "Project Management",
    company: "PMA",
    year: "2024",
    role: "Software Engineer",
    duration: "2024",
    tools: ["Next.js", "TypeScript", "Antd", "Axios", "SQL"],
    stats: [
      "Efficient project tracking.",
      "Data-driven dashboards.",
      "Optimized database queries.",
    ],
    heroImage: "/projects/PMA/PMA.png",
    shortDescription:
      "Developed core project modules, multi-step forms, data-driven dashboards, and CRUD APIs using pure SQL for project planning and tracking.",
    toc: [],
    overview: (
      <>
        <h2
          id="overview"
          className="text-xl font-bold text-white mb-4 pl-4 border-l-4 border-primary relative"
        >
          Short Explanation
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Developed core project modules, multi-step forms, data-driven
          dashboards, and CRUD APIs using pure SQL for project planning and
          tracking.
        </p>
      </>
    ),
    content: <></>,
  },
};
