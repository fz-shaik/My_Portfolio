import { motion } from "framer-motion";
import { X, Download, FileText, ExternalLink, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SHAIK MOHAMMED FAYAZ - Resume</title>
    <style>
        @page {
            size: A4;
            margin: 12mm 15mm;
        }
        body {
            font-family: 'Times New Roman', Times, serif;
            color: #111;
            line-height: 1.45;
            margin: 0;
            padding: 20px;
            background: #fff;
        }
        .header {
            text-align: center;
            margin-bottom: 14px;
            border-bottom: 2px solid #111;
            padding-bottom: 10px;
        }
        .name {
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 2px;
        }
        .subtitle {
            font-size: 15px;
            font-weight: 600;
            margin-bottom: 6px;
            color: #222;
            font-family: Arial, Helvetica, sans-serif;
        }
        .contact {
            font-size: 11px;
            font-family: Arial, Helvetica, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            color: #333;
        }
        .contact a {
            color: #0b57d0;
            text-decoration: none;
            font-weight: 500;
        }
        .section-title {
            font-size: 13px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            border-bottom: 1.5px solid #222;
            margin-top: 14px;
            margin-bottom: 8px;
            padding-bottom: 3px;
            font-family: Arial, Helvetica, sans-serif;
            color: #000;
        }
        p {
            margin: 4px 0;
            font-size: 12px;
        }
        ul {
            margin: 4px 0 8px 0;
            padding-left: 20px;
            font-size: 12px;
        }
        li {
            margin-bottom: 4px;
        }
        .bold {
            font-weight: bold;
        }
        .flex-between {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            font-size: 12px;
            margin-bottom: 4px;
        }
        .tech-used {
            font-size: 11px;
            font-style: italic;
            color: #444;
        }
        @media print {
            body { padding: 0; }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="name">SHAIK MOHAMMED FAYAZ</div>
        <div class="subtitle">Full Stack Developer</div>
        <div class="contact">
            <span>+91 9182622928</span> • 
            <a href="mailto:mfshaik03@gmail.com">mfshaik03@gmail.com</a> • 
            <a href="https://www.linkedin.com/in/shaik-mohammed-fayaz-4448672b3/" target="_blank">linkedin.com</a> • 
            <a href="https://github.com/fayaz777-fz" target="_blank">github.com</a>
        </div>
    </div>

    <div class="section-title">Summary</div>
    <p>Driven Computer Science Engineering student with strong proficiency in Data Structures & Algorithms and Object-Oriented Programming. Skilled in Java, Spring Boot, React.js, MySQL, and REST APIs, with hands-on experience in full-stack development.Ready to solve real-world problems, and contribute to innovative solutions.</p>

    <div class="section-title">Education</div>
    <div class="flex-between">
        <span><span class="bold">B.Tech. Computer Science Engineering</span><br><i>Narasaraopeta Engineering College, Narasaraopeta</i></span>
        <span style="text-align: right;"><span class="bold">Graduate: 2027</span><br>CGPA: 8.2 / 10</span>
    </div>

    <div class="section-title">Technical Skills</div>
    <ul>
        <li><span class="bold">Programming :</span> Java, C</li>
        <li><span class="bold">Frontend & Backend :</span> React.js, HTML, CSS, Spring, Spring Boot, Node.js</li>
        <li><span class="bold">Database Querying :</span> MySQL, MongoDB</li>
        <li><span class="bold">Concepts :</span> Data Structures & Algorithms, OOP, REST APIs, JPA</li>
        <li><span class="bold">Tools :</span> Git, VS Code, Eclipse IDE, IntelliJ IDEA, Google Antigravity</li>
    </ul>

    <div class="section-title">Experience</div>
    <div class="flex-between">
        <span><span class="bold">Java Full Stack Development Intern</span><br>Datavalley India Pvt. Ltd (Remote)</span>
        <span style="text-align: right;"><span class="bold">May 2026 – July 2026</span><br><span class="tech-used">Technologies Used: Spring,Spring Boot, IntelliJ IDEA</span></span>
    </div>
    <ul>
        <li>Completed an Online S-T Internship in Full Stack Development with Java, gaining hands-on experience in Core Java, JDBC, Servlets, JSP, Spring Boot, HTML, CSS and SQL.</li>
        <li>Developed backend applications using Java and Spring Boot, following MVC architecture and building RESTful APIs.</li>
        <li>Worked with MySQL for database operations, including CRUD functionality, database connectivity, and data management.</li>
    </ul>

    <div class="section-title">Projects</div>
    <div class="flex-between">
        <span><span class="bold">Vahaan Bazaar</span> | <i>Website</i></span>
        <span class="bold">November 2025 -December 2025</span>
    </div>
    <ul>
        <li>Developed a full-stack online vehicle marketplace that enables users to buy and sell vehicles through a centralized digital platform.</li>
        <li>Built features for vehicle listing, browsing, and management, providing a convenient alternative to traditional showroom-based vehicle transactions.</li>
        <li>Implemented RESTful APIs and database operations to manage application data and core functionality.</li>
        <li>Deployed the application on Vercel for accessible and reliable web hosting.</li>
    </ul>

    <div class="flex-between" style="margin-top: 8px;">
        <span><span class="bold">My Personal Portfolio</span> | <i>Frontend</i></span>
        <span class="bold">June 2025 – July 2025</span>
    </div>
    <ul>
        <li>Designed a responsive personal portfolio website to showcase technical skills, projects, education, certifications, and professional experience, featuring direct links to GitHub repositories and live project demos</li>
        <li>Built interactive UI components with modern design, smooth animations, and responsive layouts for an engaging user experience.</li>
        <li>Integrated structured sections for projects, skills, experience, and certifications to present professional information effectively.</li>
        <li>Gained hands-on experience with React.js, TypeScript, Tailwind CSS, HTML, and CSS while developing and deploying a responsive personal portfolio website.</li>
    </ul>

    <div class="section-title">Awards & Certifications</div>
    <ul>
        <li><span class="bold">Web Development – Simplilearn :</span> Completed foundational training in web development, gaining knowledge of web technologies and responsive web application development.</li>
        <li><span class="bold">Generative AI by Google Cloud :</span> Earned 22 Skill Badges across Beginner, Advanced, and GAIL pathways, gaining knowledge of Generative AI and prompt engineering techniques.</li>
        <li><span class="bold">Appreciation Certificate – College :</span> Recognized by the college for designing a tourism application (using AI Tools) to promote Kondaveedu, representing the college and showcasing the project to the Palnadu District Collector.</li>
    </ul>

    <script>
        window.onload = function() {
            window.print();
        };
    </script>
</body>
</html>
    `;

    const printWin = window.open("", "_blank");
    if (printWin) {
      printWin.document.write(resumeHTML);
      printWin.document.close();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-4xl h-[92vh] max-h-[900px] bg-zinc-900 border border-white/15 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-black/60 backdrop-blur-xl shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Resume Preview
              </h2>
              <p className="text-[10px] text-white/50 hidden sm:block">
                SHAIK MOHAMMED FAYAZ — Full Stack Developer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white text-black font-bold text-[11px] sm:text-xs tracking-wider uppercase hover:bg-zinc-200 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 md:p-8 bg-zinc-950 flex justify-center items-start scrollbar-thin scrollbar-thumb-white/20">
          <div className="w-full max-w-[760px] bg-white text-zinc-900 p-5 sm:p-8 md:p-11 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-md sm:rounded-lg font-serif leading-relaxed text-xs sm:text-sm my-auto">
            {/* Resume Header */}
            <div className="text-center border-b-2 border-zinc-900 pb-3 mb-5">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-widest text-zinc-900 uppercase mb-1 font-sans">
                SHAIK MOHAMMED FAYAZ
              </h1>
              <h2 className="text-sm sm:text-base font-semibold text-zinc-700 font-sans mb-3">
                Full Stack Developer
              </h2>
              
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs font-sans text-zinc-700">
                <span className="flex items-center gap-1 font-mono font-medium text-zinc-800">
                  <Phone className="w-3 h-3 text-zinc-500" />
                  <span>+91 9182622928</span>
                </span>

                <span className="text-zinc-300 hidden sm:inline">•</span>

                <a
                  href="mailto:mfshaik03@gmail.com"
                  className="flex items-center gap-1 hover:text-blue-600 font-medium transition-colors"
                >
                  <Mail className="w-3 h-3 text-zinc-500" />
                  <span>mfshaik03@gmail.com</span>
                </a>

                <span className="text-zinc-300 hidden sm:inline">•</span>

                <a
                  href="https://www.linkedin.com/in/shaik-mohammed-fayaz-4448672b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 font-medium transition-colors"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>linkedin.com</span>
                </a>

                <span className="text-zinc-300 hidden sm:inline">•</span>

                <a
                  href="https://github.com/fayaz777-fz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-600 font-medium transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span>github.com</span>
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Summary
              </h2>
              <p className="text-zinc-800 text-xs sm:text-[13px] leading-relaxed">
                Driven Computer Science Engineering student with strong proficiency in Data Structures & Algorithms and
                Object-Oriented Programming. Skilled in Java, Spring Boot, React.js, MySQL, and REST APIs, with hands-on
                experience in full-stack development.Ready to solve real-world problems, and contribute to innovative solutions.
              </p>
            </div>

            {/* Education */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Education
              </h2>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-xs sm:text-[13px] text-zinc-800">
                <div>
                  <h3 className="font-bold text-zinc-900">B.Tech. Computer Science Engineering</h3>
                  <p className="italic text-zinc-700">Narasaraopeta Engineering College, Narasaraopeta</p>
                </div>
                <div className="sm:text-right shrink-0 font-sans">
                  <span className="font-bold text-zinc-900 block sm:inline">Graduate: 2027</span>
                  <span className="text-zinc-700 block sm:inline sm:ml-2">CGPA: 8.2 / 10</span>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Technical Skills
              </h2>
              <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 space-y-1">
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Programming :</span> Java, C
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Frontend & Backend :</span> React.js, HTML, CSS, Spring, Spring Boot, Node.js
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Database Querying :</span> MySQL, MongoDB
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Concepts :</span> Data Structures & Algorithms, OOP, REST APIs, JPA
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Tools :</span> Git, VS Code, Eclipse IDE, IntelliJ IDEA, Google Antigravity
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Experience
              </h2>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-xs sm:text-[13px] text-zinc-900">
                      Java Full Stack Development Intern
                    </h3>
                    <p className="text-xs text-zinc-700 font-sans">
                      Datavalley India Pvt. Ltd (Remote)
                    </p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="font-bold text-xs text-zinc-900 font-sans block sm:inline">
                      May 2026 – July 2026
                    </span>
                    <p className="text-[11px] italic text-zinc-600 font-sans">
                      Technologies Used: Spring,Spring Boot, IntelliJ IDEA
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 space-y-1 mt-1.5">
                  <li>Completed an Online S-T Internship in Full Stack Development with Java, gaining hands-on experience in Core Java, JDBC, Servlets, JSP, Spring Boot, HTML, CSS and SQL.</li>
                  <li>Developed backend applications using Java and Spring Boot, following MVC architecture and building RESTful APIs.</li>
                  <li>Worked with MySQL for database operations, including CRUD functionality, database connectivity, and data management.</li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-5">
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2.5">
                Projects
              </h2>

              <div className="space-y-3.5">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h3 className="font-bold text-xs sm:text-[13px] text-zinc-900">
                      Vahaan Bazaar <span className="font-normal italic">| Website</span>
                    </h3>
                    <span className="font-bold text-xs text-zinc-900 font-sans shrink-0">
                      November 2025 -December 2025
                    </span>
                  </div>
                  <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 space-y-1 mt-1">
                    <li>Developed a full-stack online vehicle marketplace that enables users to buy and sell vehicles through a centralized digital platform.</li>
                    <li>Built features for vehicle listing, browsing, and management, providing a convenient alternative to traditional showroom-based vehicle transactions.</li>
                    <li>Implemented RESTful APIs and database operations to manage application data and core functionality.</li>
                    <li>Deployed the application on Vercel for accessible and reliable web hosting.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h3 className="font-bold text-xs sm:text-[13px] text-zinc-900">
                      My Personal Portfolio <span className="font-normal italic">| Frontend</span>
                    </h3>
                    <span className="font-bold text-xs text-zinc-900 font-sans shrink-0">
                      June 2025 – July 2025
                    </span>
                  </div>
                  <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 space-y-1 mt-1">
                    <li>Designed a responsive personal portfolio website to showcase technical skills, projects, education, certifications, and professional experience, featuring direct links to GitHub repositories and live project demos</li>
                    <li>Built interactive UI components with modern design, smooth animations, and responsive layouts for an engaging user experience.</li>
                    <li>Integrated structured sections for projects, skills, experience, and certifications to present professional information effectively.</li>
                    <li>Gained hands-on experience with React.js, TypeScript, Tailwind CSS, HTML, and CSS while developing and deploying a responsive personal portfolio website.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Awards & Certifications */}
            <div>
              <h2 className="text-xs sm:text-sm font-sans font-bold uppercase tracking-widest text-zinc-900 border-b-1.5 border-zinc-800 pb-1 mb-2">
                Awards & Certifications
              </h2>
              <ul className="list-disc pl-4 text-xs sm:text-[13px] text-zinc-800 space-y-2">
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Web Development – Simplilearn :</span> Completed foundational training in web development, gaining knowledge of web technologies and responsive web application development.
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Generative AI by Google Cloud :</span> Earned 22 Skill Badges across Beginner, Advanced, and GAIL pathways, gaining knowledge of Generative AI and prompt engineering techniques.
                </li>
                <li>
                  <span className="font-bold text-zinc-900 font-sans">Appreciation Certificate – College :</span> Recognized by the college for designing a tourism application (using AI Tools) to promote Kondaveedu, representing the college and showcasing the project to the Palnadu District Collector.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
