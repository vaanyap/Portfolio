import { motion } from "framer-motion";
import { Link } from "react-scroll"; // Import the Link component from react-scroll

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
        <Link to="archive" smooth={true} duration={500} offset={-80}>
          <NavLink text="Archive" delay={0.6} />
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
        <p className="text-gray-700">Hey there, I'm Vaanya Puri — your go to tech enthusiast who believes technology 
          is the most beautiful thing that came from mankind.</p>
          <p className="text-gray-700">By day, I am definitely going to my classes, 
          working part time job as a barista for fun, debating if today is the day I 
          finally go play badminton, volunteering as a soph, helping first-years 
          navigate their way through the chaos of university life, or plotting how to 
          make the world a better place one hackathon at a time.</p>
          <p className="text-gray-700"> By night, I am either learning new languages (working on this website), 
          trying to start a new TV Show, finishing up on some club work or just catching up on emails.</p>
        </div>
      </Section>

      {/* Work Experience Section */}
      <Section id="work-experience" title="Work Experience">
        <div className="space-y-6">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              SweGreen
            </h3>
            <p className="text-purple-700 font-medium">Data Software Automation Engineer</p>
            <p className="text-gray-700 mt-2">[Job description]</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Company Name
            </h3>
            <p className="text-purple-700 font-medium">Position • Duration</p>
            <p className="text-gray-700 mt-2">[Job description]</p>
          </div>
        </div>
      </Section>

    {/* Current Initiatives Section */}
      <Section id="current-initiatives" title="Current Initiatives">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Initiative 1
            </h3>
            <p className="text-gray-700">[Initiative description]</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Initiative 2
            </h3>
            <p className="text-gray-700">[Initiative description]</p>
          </div>
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
    </div>
  );
}

export default Home;
