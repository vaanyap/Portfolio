import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import the Link component from react-scroll
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import image from './sources/harmonyAI.png';
import flaskImage from './sources/flask.png';
import swegreen from './sources/swegreen.png';
import cohere from './sources/cohere.png'
import wcs from './sources/wcs.png'
import wits from './sources/wits.png'

function NavLink({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.a
      href={`#${text.toLowerCase().replace(/ /g, "-")}`}
      className="text-gray-700 hover:text-purple-800 transition-colors relative group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      {text}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
    </motion.a>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="min-h-screen py-20 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-600">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-[#E6E6FA] to-[#9370DB] overflow-x-hidden">
      <motion.nav
        className="fixed top-0 left-0 right-0 p-6 flex justify-center gap-8 bg-white/10 backdrop-blur-sm z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Link to="about-me" smooth={true} duration={500} offset={-80}>
          <NavLink text="About Me" delay={0.3} />
        </Link>
        <Link to="work-experience" smooth={true} duration={500} offset={-80}>
          <NavLink text="Work Experience" delay={0.4} />
        </Link>
        <Link to="current-initiatives" smooth={true} duration={500} offset={-80}>
          <NavLink text="Current Initiatives" delay={0.5} />
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-80}>
          <NavLink text="Projects" delay={0.6} />
        </Link>
        <Link to="archive" smooth={true} duration={500} offset={-80}>
          <NavLink text="Archive" delay={0.6} />
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-80}>
          <NavLink text="Contact Me!" delay={0.6} />
        </Link>
        
      </motion.nav>

      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-gray-800 mb-2 tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-600"
              >
                Vaanya
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400"
              >
                Puri
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl text-gray-700 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Aspiring Software Engineer, currently in 3rd year Computer Science at UWO.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-purple-600 rounded-full mx-auto animate-bounce" />
          </motion.div>
        </div>
      </div>

      {/* About Me Section */}
      <Section id="about-me" title="About Me">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 space-y-4">
        <p className="text-gray-700">👋🏻Hey there, I'm Vaanya Puri, your go to tech enthusiast who believes technology 
          is the most beautiful thing that came from mankind.</p>
          <p className="text-gray-700">🏙️By day, I am definitely going to my classes, 
          working part time job as a barista for fun, debating if today is the day I 
          finally go play badminton, volunteering as a soph, helping first-years 
          navigate their way through the chaos of university life, or plotting how to 
          make the world a better place one thought at a time.💖</p>
          <p className="text-gray-700">🌃 By night, I am either learning new languages (working on this website), 
          trying to start a new TV Show, finishing up on some club work or just catching up on emails.👩🏻‍💻</p>
        </div>
      </Section>

      {/* Work Experience Section */}
      <Section id="work-experience" title="Work Experience">
        <div className="space-y-6,">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex items-center justify-between mb-4">
              {/* Left side with 80% width */}
              <div className="w-4/5">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Data Software Automation Engineer
                </h3>
                <p className="text-purple-700 font-medium">SweGreen</p>

                {/* Point 1 */}
                <p className="text-gray-700 mt-2"> • <b>Automated Data Processing System Design: </b>I spearheaded the design and implementation of an automated data 
                  processing system using R, handling over 30,000 lines of raw machine data. My work involved transforming 
                  messy, unstructured data into actionable, structured insights that paved the way for data-driven 
                  decision-making.
                </p>

                {/* Point 2 */}
                <p className="text-gray-700 mt-2"> • <b>Streamlined Data Workflows: </b>By creating efficient, maintainable functions, 
                  I was able to drastically reduce data processing time, enhancing overall productivity. 
                  This improvement allowed my team to focus more on analysis rather than time-consuming data prep work.
                </p>

                {/* Point 3 */}
                <p className="text-gray-700 mt-2"> • <b>Facilitated Data-Driven Decision-Making: </b>Through the system's optimized data flow, 
                  I enabled the production of reliable reports and insights, empowering stakeholders with data-backed recommendations for 
                  strategic decisions.
                </p>
              </div>

              {/* Right side with circular image */}
              <div className="w-1/5 flex justify-center">
                <img
                  src={swegreen} // Replace with your actual image URL
                  alt="Your Name"
                  className="w-24 h-24 rounded-full object-cover" // Circular image
                />
              </div>
          </div>

          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex items-center justify-between mb-4">
            {/* Left side with circular image */}
            <div className="w-1/5">
              <img
                src={cohere} // Replace with your actual image URL
                alt="Cohere"
                className="w-24 h-24 rounded-full object-cover" // Circular image
              />
            </div>
            
            {/* Right side with content */}
            <div className="w-4/5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Data Quality Specialist
              </h3>
              <p className="text-purple-700 font-medium">Cohere</p>
              {/* Point 1 */}
              <p className="text-gray-700 mt-2"> • <b>Enhanced Model Performance with Prompt Engineering: </b>Contributed to the optimization of 
                LLM performance by collaborating with teams on prompt engineering, resulting in improved accuracy and contextual understanding for 
                vendors like Oracle.</p>
              {/* Point 2 */}
              <p className="text-gray-700 mt-2"> • <b>Trained Models on Complex Physics Concepts:</b> Focused on training LLMs with a wide 
                range of physics concepts, ensuring models could generate accurate scientific information and respond effectively to complex 
                queries in fields like algorithms and physics.</p>
              {/* Point 3 */}
              <p className="text-gray-700 mt-2"> • <b>Refined LLM-Generated Code:</b> Refined the code output by LLMs, ensuring it 
                was optimized for real-world applications. This led to cleaner, more functional, and efficient code ready for implementation.</p>
              {/* Point 4 */}
              <p className="text-gray-700 mt-2"> • <b>Collaborated with Cross-Functional Teams:</b> Worked closely with teams of 4–20 specialists 
                in tasks such as coding language audits and task execution, optimizing workflow and contributing to the timely delivery of high-quality results.</p>
            </div>
          </div>

        </div>
      </Section>

    {/* Current Initiatives Section */}
      <Section id="current-initiatives" title="Current Initiatives">
        <div className="grid gap-6 md:grid-cols-1">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-row flex items-center justify-between">
            {/* Left side with content */}
            <div className="w-4/5">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                VP of AI
              </h3>
              <p className="text-purple-700 font-medium">Western Cyber Society</p>
              {/* Point 1 */}
              <p className="text-gray-700"> • Supported AI team project managers by providing 
              technical guidance, assisting with debugging, and advising on project strategies to 
              ensure smooth execution and timely deliverables.</p>
              {/* Point 2 */}
              <p className="text-gray-700"> • Hosted “Intro to AI” workshops, fostering learning and 
              skill development within the community, and promoting AI literacy among participants of all levels.</p>
              {/* Point 3 */}
              <p className="text-gray-700"> • Collaborated with team members to streamline workflows 
              and ensure that best practices were followed throughout the development process.</p>
            </div>
  
            {/* Right side with circular image */}
            <div className="w-1/5 flex justify-center">
              <img
                src={wcs} // Replace with your actual image URL
                alt="WCS"
                className="w-24 h-24 rounded-full object-cover" // Circular image
              />
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 flex flex-row flex items-center justify-between">
            {/* Left side with circular image */}
            <div className="w-1/5">
              <img
                src={wits} // Replace with your actual image URL
                alt="Cohere"
                className="w-24 h-24 rounded-full object-cover" // Circular image
              />
            </div>
            
            {/* Right side with content */}
            <div className="w-4/5">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Director of SheHacks+
            </h3>
            <p className="text-purple-700 font-medium">Women in Tech Society</p>
              {/* Point 1 */}
              <p className="text-gray-700"> • Assisted with the planning and execution of SheHacks, a women-focused hackathon, 
              driving the event's success and creating an inclusive space for participants to innovate and showcase their skills.</p>
              {/* Point 2 */}
              <p className="text-gray-700"> • Coordinated with sponsors, volunteers, and mentors to ensure smooth event logistics, 
              providing support and resources for participants throughout the competition.</p>
              {/* Point 3 */}
              <p className="text-gray-700"> • Mentored teams outside of my stream, offering guidance, technical support, 
              and strategic advice, helping them overcome challenges and excel in the hackathon.</p>
              {/* Point 4 */}
              <p className="text-gray-700"> • Organized the "Hacker Olympics," a fun and engaging series of mini-challenges 
              that added excitement and fostered team-building among participants.</p>
              {/* Point 5 */}
              <p className="text-gray-700"> • Assisted beginners by providing a strong foundation in HTML, CSS, JavaScript, and GitHub,
              setting them up for success and empowering them to confidently dive into more advanced topics like React and React Native.</p>
            </div>
            
          </div>
        </div>
      </Section>

      {/* Current Projects Section */}
      <Section id="projects" title="Current/Recent Projects">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 flex items-center justify-between">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
          
            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              <img 
                  src={flaskImage}
                  alt="Flask Web" 
                  style={{ width: '100%', maxWidth: '400px', height: '200px' }} 
                />
                
               Flask Web Development
            </h3>
            {/* Point 1 */}
            <p className="text-gray-700"> • Currently learning Flask by building a website for a company 
            I’m volunteering with. </p>
            {/* Point 2 */}
            {/* <p className="text-gray-700"> • Developing a database using SQL to manage client information, integrating it 
            with the Flask application to ensure efficient data storage and retrieval.</p>
            {/* Point 3 }
            <p className="text-gray-700"> • Focused on creating a dynamic website with Flask, incorporating features like 
            routing, templating, and database integration to deliver a functional and user-friendly experience.</p> */}

          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">

            <h3 className="text-xl font-semibold text-purple-700 mb-2">
              <a href="https://devpost.com/software/harmony-ai" target="_blank" rel="noopener noreferrer">
                <img 
                  src={image}
                  alt="Speech-to-Text Therapy Bot" 
                  style={{ width: '100%', maxWidth: '400px', height: '200px' }} 
                />
              </a>
                
              Harmony AI
            </h3>
            {/* Point 1 */}
            <p className="text-gray-700"> • Developed a speech-to-text therapy bot that provides real-time therapeutic responses based on user input.</p>
{/* 
            {/* Point 2 }
            <p className="text-gray-700"> • Integrated Cohere’s API to generate context-specific responses and Google’s Speech-to-Text API to convert 
            spoken language into text, ensuring accurate AI understanding and seamless real-time interaction.</p> */}
          </div>
          {/* <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Past Project 3
            </h3>
            <p className="text-gray-700">[Project description]</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Past Project 4
            </h3>
            <p className="text-gray-700">[Project description]</p>
          </div> */}
        </div>
      </Section>

      {/* Archive Section */}
      <Section id="archive" title="Archive">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Past Project
            </h3>
            <p className="text-gray-700">[Project description]</p>
          </div>
        </div>
      </Section>

      {/* Contact ME */}
      <section id="contact" className="py-14 mb-14">

        {/* </Section><section id="contact" className="py-16"> */}
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-700 mb-8">
              Contact Me
            </h2>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-purple-100 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-purple-700" />
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-purple-100 transition-colors"
              >
                <Github className="w-6 h-6 text-purple-700" />
              </a>
              <a
                href="/your-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white hover:bg-purple-100 transition-colors"
              >
                <FileText className="w-6 h-6 text-purple-700" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 rounded-full bg-white hover:bg-purple-100 transition-colors"
              >
                <Mail className="w-6 h-6 text-purple-700" />
              </a>

            </div>

          </div>
      </section>
    </div>

    
  );

  
}

export default Home;

