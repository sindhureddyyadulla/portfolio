import React, { useState } from "react";
import { FaSun, FaMoon, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiC, SiPython, SiJavascript, SiTypescript, SiMysql, SiPostgresql, SiHtml5, SiCss3,
  SiAmazon,
  SiReact, SiDjango, SiSpringboot, SiPytorch, SiTensorflow, SiScikitlearn, SiElastic,
  SiDocker, SiKubernetes, SiGit, SiPostman, SiTableau, SiJira

} from "react-icons/si";
import { FaJava , FaMicrosoft} from 'react-icons/fa'; 
import { BiBarChartSquare} from 'react-icons/bi'; 
import girlcoding from './girlcoding.png'; 


const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const projects = [
    {
      title: "Deep Learning Model for Soybean Yield Prediction",
      image: "/projects/soybean.jpg",
      link: "https://github.com/sindhureddyyadulla/Deep-Learning-Model-for-soybean-yield-prediction"
    },
    {
      title: "Library Management System",
      image: "/projects/books.jpg",
      link: "https://github.com/sindhureddyyadulla/Library-Management"
    },
    {
      title: "Email for Visually Impaired",
      image: "/projects/voice email.jpg",
      link: "https://github.com/sindhureddyyadulla/voice-based-email"
    },
  
    {
      title: "Restaurant Management System",
      image: "/projects/hotel.jpg",
      link: "https://github.com/sindhureddyyadulla/Restaurant_Management"
    },
    {
      title: "Plant-Leaf-disease-detection-Using-Seeed-XIAO-ESP32S3",
      image: "/projects/plant disease.jpg",
      link: "https://github.com/sindhureddyyadulla/Plant-Leaf-disease-detection-Using-Seeed-XIAO-ESP32S3"
    }



    

  ];

  const certificates = [
    { title: "AWS Certified cloud practitioner", image: "/certs/AWS.png" },
    { title: "Gen AI certified Cognizant", image: "/certs/Gen AI.jpeg" }
  ];

  return (
    <div className={`transition-all duration-700 min-h-screen font-sans ${darkMode ? "bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white" : "bg-gradient-to-br from-pink-100 via-blue-100 to-white text-gray-900"}`}>
     <header className="flex justify-between items-center px-8 py-6 shadow-lg bg-opacity-70 backdrop-blur-md">
  <div className="flex items-center space-x-4">
    <div className="bg-gradient-to-tr from-pink-500 via-fuchsia-600 to-purple-500 text-white font-bold text-2xl rounded-full w-12 h-12 flex items-center justify-center shadow-md animate-pulse tracking-wide">
      SY
    </div>
    <h1 className="text-4xl font-extrabold tracking-tight italic">Sindhu Yadulla</h1>
  </div>
  <button onClick={toggleDarkMode} className="text-2xl transition-transform hover:scale-125">
    {darkMode ? <FaSun /> : <FaMoon />}
  </button>
</header>



      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-10 gap-8">
  {/* Summary Text */}
  <div className="md:w-3/4 text-left space-y-4">
    <h2 className="text-4xl font-bold text-pink-600">Hello, I'm Sindhu 👋</h2>
    <p className="text-lg leading-relaxed">
      A passionate Software Developer with expertise in Full-Stack Development,Cloud Platforms, and AI solutions. I love turning complex problems into
      elegant, scalable, and impactful digital experiences.
    </p>
    <p className="text-lg leading-relaxed">
    With an insatiable curiosity driven by curiosity and a growth mindset, I constantly evolve by exploring emerging technologies and crafting 
      impactful, real-world solutions that make a difference.
    </p>
  </div>

  {/* Image on Right */}
  <div className="md:w-1/4 flex justify-center">
    <img
      src={girlcoding}
      alt="Girl coding"
      className="w-[300px] h-[300px] object-cover rounded-3xl shadow-2xl"
    />
  </div>
</section>


      <main className="px-8 space-y-16">
        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold border-l-8 border-pink-500 pl-4 mb-6">🎓 Education</h2>
          <div className="space-y-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-3xl shadow-xl backdrop-blur-lg">
              <p className="text-xl font-semibold">University of North Texas  (August 2024 - May 2026)</p>
              <p className="italic">Master of Science in Computer Science, GPA: 4.0/4.0</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-3xl shadow-xl backdrop-blur-lg">
              <p className="text-xl font-semibold">Vignana Bharathi Institute of Technology      (August 2019 - August 2023)</p>
              <p className="italic">B.Tech in Computer Science and Engineering, GPA: 8.67/10</p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-bold border-l-8 border-purple-500 pl-4 mb-6">💼 Experience</h2>
          {[
            {
              title: "Teaching Assistant – UNT",
              date: "Jan 2025 – Present",
              bullets: [
                "Conducting lecturers on Foundations of Data Structures and Algorithms.Providing one-to-one assistance to students, and addressing their questions.",
                "Assisting students in utilizing resources for coding, debugging, Creating and presenting interactive lectures and practical lab activities on subject activities and coding techniques."
              ]
            },
            {
              title: "Research Assistant – Lawful Computing Lab",
              date: "August 2024 – Dec 2024",
              bullets: [
                "Evaluated ElasticSearch performance across 30 million records based on latency and throughput to optimize indexing strategies; improved query response times by 40% while ensuring zero data loss.",
               "Implemented advanced ElasticSearch features like aggregations, filters, and multi-index querying to support complex analytical use cases. Tuned ElasticSearch cluster settings, such as heap size, caching, and replication factors, to achieve high availability and improved response times.",
              "Researched GDPR and emerging regulations to develop compliance-driven computing solutions, integrating database systems, cloud computing, security, and technology law."
              ]
            },
            {
              title: "Program Analyst – Cognizant",
              date: "Dec 2023 – August 2024",
              bullets: [
               " Managed and developed a desktop application, leading the full-cycle process from design to deployment using Java and Java Swing. Achieved a 30% reduction in bugs and significantly enhanced the application’s usability.",
               " Developed and executed a robust debugging and deployment strategy for each application release, streamlining the release cycle by 30%.",
               "Designed and optimized complex SQL queries to improve the application’s data retrieval processes, increasing data access speed by 25% and ensuring accurate. ","Produced custom reports by performing SQL queries and delivered data-driven insights to clients based on their specific requirements."
              ]
            },
            {
              title: "Java Intern – Cognizant",
              date: "Oct 2023 – Dec 2023",
              bullets: [
               " Developed and architected a scalable application using Spring Boot and JPA, creating modular components that facilitated efficient data handling, enhanced user interactions, and ensured robust system performance.Designed responsive UIs with JSP, leading to an intuitive user experience and seamless functionality across various operations.",
                " Optimized application performance and data management by leveraging Hibernate ORM and JPA within the Spring Boot framework, achieving high reliability and efficiency. Secured user and admin data with advanced authentication and role-based access control, enhancing security and protecting sensitive information.",
                "Achieved a 99% error tolerance rate in integrating external APIs for tracking and refining integration logic and leveraging asynchronous communication.Reduced system errors by 30% by optimizing SQL queries and conducting rigorous testing with JUnit, Mockito ensuring high-quality, dependable application performance and smooth operation."
              ]
            },
            {
              title: "AWS Cloud Intern – AICTE",
              date: "Oct 2021 – Dec 2021",
              bullets: [
                "Developed and launched a website using AWS, enhancing online engagement and increasing user interactions.Developed and deployed a scalable website on AWS, leveraging EC2, S3, RDS, and Lambda to enhance performance, achieving a 30% improvement in reliability.",
                "Leveraged AWS services including EC2 for compute resources, S3 for data storage, RDS for database management, and Lambda for executing serverless functions.Automated deployment and scaling using AWS CodePipeline and AWS CodeDeploy, reducing deployment time by 50%.",
                "Implemented AWS CloudFront for content delivery and AWS Route 53 for DNS management, reducing website load times by 40% by Load balancer.Configured AWS Lambda to manage backend tasks and API requests,integrating with other AWS services to streamline operations."
              ]
            }
          ].map((exp, i) => (
            <div key={i} className="bg-white bg-opacity-10 p-6 rounded-2xl shadow-lg backdrop-blur-md mb-6">
              <h3 className="text-xl font-semibold">{exp.title} ({exp.date})</h3>
              <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
                {exp.bullets.map((point, j) => <li key={j}>{point}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section>
  <h2 className="text-3xl font-bold border-l-8 border-green-500 pl-4 mb-6">🛠️ Skills</h2>
  <div className="space-y-10">

    {/* Languages */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Languages</h3>
      <div className="flex flex-wrap gap-6 text-4xl">
        <a href="https://www.w3schools.com/c/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiC /></a>
        <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><FaJava/></a>
        <a href="https://www.python.org/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiPython /></a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiJavascript /></a>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiTypescript /></a>
        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiMysql /></a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiPostgresql /></a>
        <a href="https://www.w3schools.com/html/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiHtml5 /></a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiCss3 /></a>
      </div>
    </div>

    {/* Cloud Services */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Cloud Services</h3>
      <div className="flex flex-wrap gap-6 text-4xl">
        <a href="https://aws.amazon.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiAmazon /></a>
        <a href="https://azure.microsoft.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><FaMicrosoft /></a>
      </div>
    </div>

    {/* Frameworks */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Frameworks</h3>
      <div className="flex flex-wrap gap-6 text-4xl">
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiReact /></a>
        <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiDjango /></a>
        <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiSpringboot /></a>
        <a href="https://pytorch.org/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiPytorch /></a>
        <a href="https://www.tensorflow.org/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiTensorflow /></a>
        <a href="https://scikit-learn.org/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiScikitlearn /></a>
        <a href="https://www.elastic.co/elasticsearch/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiElastic /></a>
      </div>
    </div>

    {/* Tools */}
    <div>
      <h3 className="text-xl font-semibold mb-3">Tools</h3>
      <div className="flex flex-wrap gap-6 text-4xl">
        <a href="https://www.docker.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiDocker /></a>
        <a href="https://kubernetes.io/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiKubernetes /></a>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiGit /></a>
        <a href="https://www.postman.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiPostman /></a>
        <a href="https://powerbi.microsoft.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><BiBarChartSquare /></a>
        <a href="https://www.tableau.com/" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiTableau /></a>
        <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noreferrer" className="hover:scale-110 transition"><SiJira /></a>
      </div>
    </div>
  </div>
</section>


            {/* Certificates */}
            <section>
              <h2 className="text-3xl font-bold border-l-8 border-yellow-500 pl-4 mb-6">📜 Certificates</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {certificates.map(cert => (
                  <div key={cert.title} className="rounded-2xl bg-white bg-opacity-20 p-4 shadow-xl backdrop-blur-xl">
                    <img src={cert.image} alt={cert.title} className="w-full h-28 object-contain rounded-xl" />
                    <p className="text-center mt-3 font-semibold">{cert.title}</p>
                  </div>
                ))}
              </div>
            </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold border-l-8 border-red-500 pl-4 mb-6">🚀 Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <a key={project.title} href={project.link} target="_blank" rel="noreferrer"
                className="rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.03] transition-transform duration-300">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4 bg-white bg-opacity-80 text-center text-lg font-semibold text-black dark:text-gray-800">
                  {project.title}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-bold border-l-8 border-cyan-500 pl-4 mb-6 inline-block">📬 Contact</h2>
          <div className="flex justify-center gap-10 text-4xl mt-4">
            <a href="mailto:sreddyy21@gmail.com" className="hover:scale-125 transition text-rose-600"><FaEnvelope /></a>
            <a href="https://github.com/sindhureddyyadulla" target="_blank" rel="noreferrer" className="hover:scale-125 transition text-black"><FaGithub /></a>
            <a href="https://linkedin.com/in/sindhu-yadulla-42071a212" target="_blank" rel="noreferrer" className="hover:scale-125 transition text-blue-700"><FaLinkedin /></a>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm py-6 opacity-70">
        © {new Date().getFullYear()} Sindhu Yadulla • 
      </footer>
    </div>
  );
};

export default App;
