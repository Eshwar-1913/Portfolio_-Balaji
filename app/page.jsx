// Entire file updated to apply uniform attractive background styling across all sections
'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

import emailjs from '@emailjs/browser' // ✅ EmailJS import

export default function Home() {
  const [open, setOpen] = useState(false)
  const form = useRef()

  // ✅ Optional: Remove if you no longer want Light/Dark Mode
  useEffect(() => {
    document.documentElement.classList.toggle('dark', false) // Force dark mode
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_o0yeisg',        // ✅ Your service ID
      'template_7176ud4',       // ✅ Your template ID
      form.current,
      '_WBtcVjstR31CuRih'       // ✅ Your public key
    )
    .then(() => {
      alert('✅ Message sent successfully!')
      form.current.reset()
    })
    .catch((error) => {
      console.error('EmailJS error:', error)
      alert('❌ Failed to send message. Please try again.')
    })
  }

  return (
    <main className="font-[--font-inter] scroll-smooth min-h-screen bg-gradient-to-br from-black via-[#0f172a] to-[#1e293b] text-white">
      {/* Navbar */}
      <motion.nav
        className="bg-black backdrop-blur-md sticky top-0 z-50 shadow"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400 animate-pulse">Eshwar Sai Balaji Penumudi</h1>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8 font-semibold text-lg text-gray-200">
              {['Home', 'About','Education', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="relative hover:text-blue-400 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
          </div>
        </div>
        {open && (
          <div className="md:hidden px-4 pb-4 text-center bg-black space-y-2">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white text-lg hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </motion.nav>

      {/* Hero */}
      <section id="home" className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-black text-white relative overflow-hidden">
  <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-blue-900 to-black animate-pulse blur-3xl"></div>

  <motion.div
    className="w-full md:w-1/2 max-w-xl z-10"
    initial={{ x: -50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <p className="text-sm text-gray-400">ECE | VLSI | Web Developer</p>
    <h1 className="text-5xl font-bold mt-2 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text animate-fade-in">
      Hi, I'm <span className="text-blue-400">Sai Balaji Penumudi</span>
    </h1>
    <h2 className="text-2xl font-semibold text-white mt-2">From Hyderabad, India</h2>

    <div className="mt-4">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      >
        <TypeAnimation
          sequence={[
            'Problem Solver', 3000,
            'VLSI Designer', 3000,
            'Web Developer', 3000,
            'ML Enthusiast', 3000,
            'AI Explorer', 3000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
          className="text-xl font-semibold text-blue-300"
        />
      </motion.div>
    </div>

   <div className="mt-6 space-x-4">
  <a
    href="#contact"
    className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
  >
    Connect
  </a>
 <a
  href="Sai Balaji_RESUME.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-200 transition"
>
  📄 Resume
</a>
</div>

  </motion.div>

 <motion.div
    className="w-full md:w-1/2 flex justify-center z-10"
    initial={{ x: 50, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.img
      src="Penumudi.jpeg" // <-- Make sure this matches the actual file name
      alt="Sai Balaji"
      className="w-[320px] md:w-[380px] lg:w-[420px] rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-700"
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2 }}
    />
  </motion.div>
</section>

      {/* About Section */}
     <section id="about" className="py-24 px-6 text-center relative z-10">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-6xl mx-auto"
  >
    <h3 className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text animate-fade-in">
      About Me
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Large Left Box */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="md:col-span-2 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-blue-600 rounded-xl p-10 text-left shadow-xl"
      >
        <h4 className="text-3xl font-semibold text-blue-300 mb-4 tracking-wide flex items-center gap-3">
          <span className="inline-block w-6 h-6 bg-blue-500 rounded-full animate-pulse"></span> Personal Overview
        </h4>
        <p className="text-white leading-relaxed text-lg">
          I’m a forward-thinking individual passionate about blending creativity with technology. I thrive in fast-paced, collaborative environments and enjoy building intuitive systems and meaningful user experiences. My approach to work is centered on empathy, clarity, and impact — creating solutions that not only work but also resonate.
        </p>
        <p className="text-white leading-relaxed text-lg mt-4">
          My interests extend beyond the screen — I enjoy decoding interfaces, exploring design aesthetics, learning about futuristic innovations, and participating in ideathons. With a commitment to lifelong learning and positive contribution, I’m always seeking new ways to grow both personally and professionally.
        </p>
      </motion.div>

      {/* Right Mini Cards */}
      <div className="flex flex-col gap-6">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0f172a] border border-blue-600 rounded-lg p-4 shadow-md">
          <h5 className="text-lg font-semibold text-cyan-300 mb-1 flex items-center gap-2">
            <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></span> Quick Thinker
          </h5>
          <p className="text-sm text-white">Capable of assessing and solving problems on the fly with logic and creativity.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0f172a] border border-blue-600 rounded-lg p-4 shadow-md">
          <h5 className="text-lg font-semibold text-cyan-300 mb-1 flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></span> Detail-Oriented
          </h5>
          <p className="text-sm text-white">Focuses on precision, clarity, and seamless execution in every task.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0f172a] border border-blue-600 rounded-lg p-4 shadow-md">
          <h5 className="text-lg font-semibold text-cyan-300 mb-1 flex items-center gap-2">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></span> Versatile Learner
          </h5>
          <p className="text-sm text-white">Explores new domains across hardware and software with agility.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0f172a] border border-blue-600 rounded-lg p-4 shadow-md">
          <h5 className="text-lg font-semibold text-cyan-300 mb-1 flex items-center gap-2">
            <span className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></span> Collaborative Spirit
          </h5>
          <p className="text-sm text-white">Believes in building with empathy, teamwork, and mutual respect.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-[#0f172a] border border-blue-600 rounded-lg p-4 shadow-md">
          <h5 className="text-lg font-semibold text-cyan-300 mb-1 flex items-center gap-2">
            <span className="w-3 h-3 bg-rose-400 rounded-full animate-bounce"></span> Innovation-Driven
          </h5>
          <p className="text-sm text-white">Always exploring better and smarter ways to build and optimize systems.</p>
        </motion.div>
      </div>

    </div>
  </motion.div>
</section>
         {/* Education */}
<section id="education" className="py-24 px-6 text-center relative z-10">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-4xl mx-auto"
  >
    <motion.h3
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl font-extrabold mb-14 text-center flex justify-center items-center gap-4 text-blue-400 drop-shadow-lg animate-fade-in"
    >
      <motion.span
        className="text-4xl"
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        🎓
      </motion.span>
      
      Education
    </motion.h3>

    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-blue-500 rounded-xl shadow-xl p-10 text-left">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-col sm:flex-row items-start gap-6"
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center text-black font-bold text-xl animate-bounce">
            🎓
          </div>
        </div>

        <div>
          <h4 className="text-xl sm:text-2xl font-bold text-green-300 mb-2">
            Bachelor of Technology in Electronics and Communication Engineering (ECE)
          </h4>

          <div>
            <p className="text-white text-lg font-bold">
              Gokaraju Rangaraju Institute of Engineering and Technology, Hyderabad
            </p>
          </div>

          <p className="text-white text-sm italic mb-4">2021 – 2025</p>

          <p className="text-white text-base leading-relaxed">
            My academic journey at GRIET has built a strong foundation in electronics, programming, and digital systems. Through engaging coursework and practical labs, I’ve developed analytical and technical skills essential to engineering problem-solving.
          </p>

          <p className="text-white text-base leading-relaxed mt-4">
            I explored interdisciplinary interests in areas such as VLSI design, AI/ML, and Programming. These experiences have shaped my ability to adapt quickly, collaborate effectively, and lead projects with creativity and structure.
          </p>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>

      <div>
        {/* Skills */}
        <section id="skills" className="py-24 px-6 text-center relative z-10 bg-black text-white">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-6xl mx-auto"
  >
    <div className="flex justify-center items-center gap-3 mb-4">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-400">
        <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
      </svg>
      <h3 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-transparent bg-clip-text animate-fade-in">
        Technical Skills
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* Languages */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-[#0f172a] border border-cyan-400 rounded-xl p-6 text-left shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-300"
      >
        <div className="flex items-center mb-4 gap-3">
          
          <h4 className="text-xl font-semibold text-cyan-300">Languages</h4>
        </div>
        <p className="text-white text-sm">Java and C (With DSA), HTML, CSS, JavaScript</p>
      </motion.div>

      {/* Databases & Tools */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-[#0f172a] border border-yellow-500 rounded-xl p-6 text-left shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300"
      >
        <div className="flex items-center mb-4 gap-3">
          
          <h4 className="text-xl font-semibold text-yellow-400">Databases & Tools</h4>
        </div>
        <p className="text-white text-sm">SQL, Google Colab, VS Code</p>
      </motion.div>

      {/* Hardware & Design */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-[#0f172a] border border-pink-500 rounded-xl p-6 text-left shadow-lg hover:shadow-pink-400/30 transition-shadow duration-300"
      >
        <div className="flex items-center mb-4 gap-3">
          
          <h4 className="text-xl font-semibold text-pink-400">Hardware & Design</h4>
        </div>
        <p className="text-white text-sm">Verilog, VHDL (Basics), Xilinx, FPGA(Quartus)</p>
      </motion.div>

      {/* ML & DSA */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-[#0f172a] border border-green-500 rounded-xl p-6 text-left shadow-lg hover:shadow-green-400/30 transition-shadow duration-300"
      >
        <div className="flex items-center mb-4 gap-3">
          
          <h4 className="text-xl font-semibold text-green-400">ML</h4>
        </div>
        <p className="text-white text-sm">Machine Learning & DeepLearning(Basics)</p>
      </motion.div>
    </div>
  </motion.div>
</section>

        {/* Projects */}
        <section id="projects" className="py-24 px-6 text-center bg-black text-white relative z-10">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-6xl mx-auto"
  >
    <h3 className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-500 text-transparent bg-clip-text animate-fade-in">
      Projects
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* Project 1 */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: -1 }}
        transition={{ duration: 0.4 }}
        className="bg-[#0f172a] border border-cyan-500 rounded-2xl shadow-xl overflow-hidden text-left hover:shadow-cyan-500/30 transition-shadow duration-300"
      >
        <img src="vlsi.jpg" alt="VLSI Project" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h4 className="text-2xl font-semibold text-cyan-300 mb-2">64-bit Multiplier using VLSI</h4>
          <div className="flex gap-2 flex-wrap mb-3">
            <span className="bg-cyan-700 text-white text-xs px-2 py-1 rounded-full">VLSI</span>
            <span className="bg-cyan-700 text-white text-xs px-2 py-1 rounded-full">FPGA</span>
            <span className="bg-cyan-700 text-white text-xs px-2 py-1 rounded-full">Xilinx</span>
          </div>
          <p className="text-white text-sm">Designed a high-performance multiplier using FPGA & Xilinx, improving computational efficiency.</p>
        </div>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-[#0f172a] border border-green-500 rounded-2xl shadow-xl overflow-hidden text-left hover:shadow-green-400/40 transition-shadow duration-300"
      >
        <img src="DR.jpg" alt="Diabetic Retinopathy" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h4 className="text-2xl font-semibold text-green-400 mb-2">Diabetic Retinopathy Detection Model</h4>
          <div className="flex gap-2 flex-wrap mb-3">
            <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-full">CNN</span>
            <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-full">TensorFlow</span>
            <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-full">Colab</span>
          </div>
          <p className="text-white text-sm">Built a CNN-based with VIT  system with a web interface to detect and classify DR stages with 93% accuracy.</p>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>

        {/* Certificates */}
       <section id="certificates" className="py-24 px-6 bg-[#0f172a] text-white relative z-10">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-5xl mx-auto"
  >
    <h3 className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-transparent bg-clip-text text-center">
      Certifications
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Smart Interviews",
          subtitle: "Data Structures & Algorithms", 
        },
        {
          title: "AWS Internship",
          subtitle: "AICTE EduSkills",
        },
        {
          title: "Cyber Security",
          subtitle: "PaloAlto Virtual Internship",
        },
        {
          title: "NPTEL Certification",
          subtitle: "Joy of Computing Using Python",
        },
        {
          title: "NPTEL Certification",
          subtitle: "Internet of Things",
        },
      ].map((cert, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02 }}
          className="bg-[#1e293b] border-l-4 border-yellow-400 rounded-lg p-5 shadow-md hover:shadow-yellow-300/40 transition-shadow duration-300"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="text-2xl">{cert.icon}</div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-300">
                {cert.title}
              </h4>
              <p className="text-sm text-gray-300">{cert.subtitle}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 text-white relative z-10 bg-gradient-to-br from-[#0f172a] via-[#1e233b] to-[#0f172a]">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <h3 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
      Let’s Collaborate & Build Together
    </h3>
    <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
      Whether you're looking to team up on exciting projects, brainstorm innovative ideas, or simply connect — I'm always open to new opportunities and meaningful conversations!
    </p>

    {/* Contact Boxes */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
      
      {/* Left Info Box */}
      <div className="bg-[#1e293b] border border-purple-600 rounded-xl p-8 shadow-md">
        <h4 className="text-2xl font-bold mb-4 text-white">Let's Connect</h4>
        <p className="text-gray-300 mb-4">
          I'm always open to discussing new projects, tech ideas, or career opportunities. Let’s innovate and make something impactful!
        </p>
        <div className="mb-4 text-purple-400 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 4.5A3 3 0 0 1 4.5 1.5h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-15Zm3 0v.379l7.5 5.063 7.5-5.063V4.5l-7.5 5.063L4.5 4.5Z"/></svg>
          saidattupenumudi@gmail.com
        </div>
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/your-username" target="_blank" rel="noopener noreferrer"
  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition">
  GitHub
</a>
          <a
            href="https://linkedin.com/in/penumudi-eshwar-sai-balaji-795407233" target="_blank"
            className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Contact Form */}
      {/* Contact Form */}
<form
  ref={form}
  onSubmit={sendEmail}
  className="bg-[#1e293b] border border-purple-600 rounded-xl p-8 shadow-md space-y-6"
>
  <div>
    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1">
      Name
    </label>
    <input
      type="text"
      name="user_name"
      required
      placeholder="Enter your name"
      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">
      Email
    </label>
    <input
      type="email"
      name="user_email"
      required
      placeholder="example@gmail.com"
      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-1">
      Message
    </label>
    <textarea
      name="message"
      rows="4"
      required
      placeholder="Write your message here..."
      className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-6 py-2 rounded-md shadow-md transition"
  >
    Send Message ✉️
  </button>
</form>
    </div>
  </div>
</section>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 text-center py-4">
          <p>&copy; 2025 Sai Balaji. All rights reserved.</p>
        </footer>

      </div>
    </main>
  )
}
