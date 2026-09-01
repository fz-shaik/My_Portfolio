import { motion } from "framer-motion";
import { ArrowLeft, Download, Dumbbell, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function About() {
  const navigate = useNavigate();
  const text = "About Myself";

  const [displayedText, setDisplayedText] = useState("");
  const [countdown, setCountdown] = useState<number | null>(null);
  const [downloading, setDownloading] = useState(false);

  // TYPING EFFECT
  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;

    const startTyping = () => {
      setDisplayedText("");
      interval = setInterval(() => {
        index++;
        setDisplayedText(text.slice(0, index));

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 5000);
        }
      }, 120);
    };

    startTyping();
    return () => clearInterval(interval);
  }, []);

  // DOWNLOAD FUNCTION - FIXED
  const handleDownload = () => {
    if (downloading) return;

    setDownloading(true);
    setCountdown(3);

    let time = 3;

    const timer = setInterval(() => {
      time--;
      setCountdown(time);

      if (time <= 0) {
        clearInterval(timer);

        // Create printable HTML document matching exact resume details
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

        const printWindow = window.open("", "_blank");
        if (printWindow) {
          printWindow.document.write(resumeHTML);
          printWindow.document.close();
        }

        setDownloading(false);
        setCountdown(null);
      }
    }, 1000);
  };


  return (
    <div className="relative min-h-screen bg-black overflow-hidden text-white px-4 sm:px-6 py-10">
      {/* ANIMATED BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />
      </div>

      {/* BACK BUTTON */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => navigate(-1)}
        className="
          fixed
          top-5
          left-5
          z-50
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-white/15
          bg-white/8
          backdrop-blur-xl
          hover:bg-white/15
          hover:border-white/30
          transition-all
          duration-300
          shadow-lg
        "
      >
        <ArrowLeft size={18} />
        <span className="hidden sm:inline">Back</span>
      </motion.button>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8 pt-16">

        {/* GLASS BOX CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-4xl
            h-[500px]
            sm:h-[550px]
            md:h-[600px]
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-3xl
            overflow-hidden
            shadow-[0_20px_70px_rgba(0,0,0,0.5)]
            group
          "
        >
          {/* GLASS LIGHT EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* HEADER SECTION */}
          <div
            className="
              relative
              z-20
              flex
              items-center
              justify-center
              px-6
              py-6
              sm:py-8
              border-b
              border-white/10
              bg-black/30
              backdrop-blur-2xl
            "
          >
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-extrabold
                tracking-tight
              "
            >
              {displayedText}
              <span className="animate-pulse ml-2">|</span>
            </h1>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div
            className="
              relative
              z-10
              h-[calc(100%-80px)]
              overflow-y-auto
              px-6
              sm:px-10
              md:px-12
              py-8
              scrollbar-thin
              scrollbar-track-transparent
              scrollbar-thumb-white/10
              hover:scrollbar-thumb-white/20
            "
          >
            <div
              className="
                text-white/80
                text-sm
                sm:text-base
                leading-relaxed
                tracking-wide
                space-y-6
              "
            >
              <p>
                I'm currently a Final Year student pursuing a Computer Science Engineering qualification. Over time, my passion has grown deeply into software development, core computer science concepts, and modern web technologies.
              </p>

              <p>
                Driven Computer Science Engineering student with strong proficiency in Data Structures & Algorithms and Object-Oriented Programming. Skilled in Java, Spring Boot, React.js, MySQL, and REST APIs, with hands-on experience in full-stack development. Ready to solve real-world problems, and contribute to innovative solutions.
              </p>

              <p>
                Coding is something I genuinely enjoy every day. I love learning new programming languages, building scalable web & mobile applications, and understanding how complex software systems function behind the scenes.
              </p>

              <p>
                Beyond fullstack development, software architecture, system security, and artificial intelligence interest me the most. I find it exciting to explore system performance, code optimization, and efficient developer workflows.
              </p>

              <p>
                At the same time, I actively leverage AI tools and modern tech stacks to make development smarter, faster, and more effective.
              </p>

              <p>
                My goal is to build a high-impact career as a Software Engineer, continually learning and mastering new technologies step by step. For me, technology is not just a career path — it is something I truly connect with and am passionate about.
              </p>

              <div className="space-y-1">
                <p>
                  <strong>Personal Details :-</strong>
                </p>
                <p className="leading-snug">
                  Full Name: Shaik Mohammed Fayaz
                  <br />
                  Date of Birth: 25 July 2005
                  <br />
                  Nationality: Indian
                  <br />
                  Location: Narasaraopet, Andhra Pradesh
                  <br />
                  Languages: Telugu, English, Hindi
                </p>
              </div>

              <div className="space-y-2">
                <p>
                  <strong>Hobbies :-</strong>
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <span className="inline-flex items-center gap-2">
                    <Dumbbell size={18} />
                    Fitness workout
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Camera size={18} />
                    Photography
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DOWNLOAD BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          onClick={handleDownload}
          disabled={downloading}
          className="
            group
            relative
            overflow-hidden
            flex
            items-center
            justify-center
            gap-3
            px-8
            sm:px-10
            py-3
            sm:py-4
            rounded-2xl
            border
            border-white/15
            bg-white/8
            backdrop-blur-xl
            hover:bg-white/15
            hover:border-white/30
            disabled:opacity-50
            disabled:cursor-not-allowed
            transition-all
            duration-300
            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
            hover:shadow-[0_15px_50px_rgba(255,255,255,0.08)]
          "
        >
          {/* BUTTON GLOW EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-500" />

          {/* BUTTON CONTENT */}
          <div className="relative z-10 flex items-center gap-3">
            <Download
              size={20}
              className="
                group-hover:scale-110
                group-hover:-translate-y-1
                transition-all
                duration-300
              "
            />
            <span className="font-semibold tracking-wide">
              {downloading ? `Downloading in ${countdown}s` : "Download Resume"}
            </span>
          </div>
        </motion.button>
      </div>
    </div>
  );
}