'use client';
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const [hovered, setHovered] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent succesfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.message || 'Error sending the message');
      }
    } catch (error) {
      setStatus('Server error by sending the message');
    }
  };

  return (
    <main className="min-h-screen bg-[#171810]">

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >

        {/* Home */}
        <div className="text-center px-4 sm:px-6 md:px-8 lg:px-0">
          <h1 className="text-xl sm:text-2xl text-[#adadad]">Hi, I'm</h1>

          <h1 className="text-4xl sm:text-6xl font-black mt-6 sm:mt-8 bg-gradient-to-r from-[#ff6a00] via-[#ff2200] to-[#800000] bg-clip-text text-transparent drop-shadow-lg">
            Agustin Perez Farhat
          </h1>

          <h1 className="text-lg sm:text-2xl text-[#adadad] mt-6 sm:mt-8">
            Freelance web developer
          </h1>
          <motion.div
            className="justify-center flex flex-wrap gap-6 sm:gap-10 items-center mt-10 sm:mt-14"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <Image src="/nextjsLogo.png" alt="NextJS Logo" width={180} height={200} className="w-32 sm:w-[270px]" />
            <Image src="/typescriptLogo.png" alt="Typescript Logo" width={100} height={100} className="w-24 sm:w-[150px]" />
          </motion.div>

          <motion.div
            className="justify-center flex items-center mt-10 sm:mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <Image src="/githubLogo.png" alt="Github Logo" width={100} height={100} className="w-20 sm:w-[150px]" />
          </motion.div>

          <motion.h1
            className="mt-10 sm:mt-20 text-sm sm:text-base text-[#adadad]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: false }}
          >
            "First solve the problem, then write the code"
          </motion.h1>
        </div>





        <div className="h-30 bg-gradient-to-b from-[#171810] to-[#1f211a]" />




        {/*About me */}
        <div id="about" className="bg-[#1f211a] px-4">

          <div className="flex justify-center">
            <motion.div
              className="justify-center flex items-center mt-14"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <h1 className="bg-gradient-to-r from-[#ff2200] to-[#e41414] bg-clip-text text-transparent drop-shadow-lg text-3xl sm:text-4xl font-bold mt-12 text-center">
                About me
              </h1>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-12 lg:gap-x-36">

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="cursor-default max-w-[300px]"
              >
                <div className="flex justify-center mt-5">
                  <Image src="/bandera.png" alt="Bandera Argentina" width={200} height={300} />
                </div>
                <h1 className="text-xl font-bold mt-8 text-center">Nacionality</h1>
                <div className="mt-6 text-center text-sm">
                  <p>I'm a web developer from Tucumán, Argentina.</p>
                  <p>And since I was a child, five years old exactly,</p>
                  <p>I've studied English as a second language</p>
                  <p>until today.</p>
                  <p>As my hometown is quite big,</p>
                  <p>I've earned many social skills</p>
                  <p>that I truly believe will help me</p>
                  <p>in my working life.</p>
                </div>
              </motion.div>


              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="cursor-default max-w-[300px]"
              >
                <div className="flex justify-center">
                  <Image src="/unstaLogo.png" alt="Logo Unsta" width={150} height={300} />
                </div>
                <h1 className="text-xl font-bold mt-6 text-center">Universidad de Santo Tomás</h1>
                <h1 className="text-xl font-bold text-center">de Aquino</h1>
                <div className="text-center mt-4 text-sm">
                  <p>I did my studies in "Universidad de</p>
                  <p>Santo Tomás de Aquino",</p>
                  <p>considered one of the best Universities</p>
                  <p>in my province and got a degree in</p>
                  <p>software development and quality,</p>
                  <p>studying for three years and a half.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="cursor-default max-w-[300px]"
              >
                <div className="flex justify-center">
                  <Image src="/coder.png" alt="coder" width={194} height={300} />
                </div>
                <h1 className="text-xl font-bold mt-4 text-center">Front-End and Back-End</h1>
                <h1 className="text-xl font-bold text-center">development</h1>
                <div className="text-center mt-4 text-sm">
                  <p>In my three years and a half of studies,</p>
                  <p>I've learned all the aptitudes required</p>
                  <p>for front-end and back-end development.</p>
                  <p>For front-end I've learned HTML, CSS and Tailwind CSS,</p>
                  <p>and for back-end I've learned by myself</p>
                  <p>how to use Next.js,</p>
                  <p>a React framework that I'm currently</p>
                  <p>most familiar with.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-10">
            <a
              href="/CV-AgustinPerez.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="flex items-center gap-2 px-5 py-3 bg-[#1f211a] text-[#adadad] rounded-full border border-[#adadad] hover:border-red-500 transition duration-300"
              >
                {hovered ? (
                  <Eye className="w-5 h-5 animate-fade-in" />
                ) : (
                  <EyeOff className="w-5 h-5 animate-fade-in" />
                )}
                <span className="transition duration-300">Visit CV</span>
              </button>
            </a>
          </div>

          {/* Frase final */}
          <div className="flex justify-center">
            <motion.h1
              className="mt-16 text-center px-4 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: false }}
            >
              "Software is a great combination between artistry and engineering"
            </motion.h1>
          </div>

        </div>




        <div className="h-48 bg-gradient-to-b from-[#1f211a] to-[#171810]" />




        {/*Projects */}
        <div id="projects" className="flex justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            className="justify-center flex items-center mt-14"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <h1 className="bg-gradient-to-r from-[#ff2200] to-[#e41414] bg-clip-text text-transparent drop-shadow-lg font-bold text-3xl sm:text-4xl text-center">
              My projects
            </h1>
          </motion.div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mt-16">
            <motion.div
              className="justify-center flex items-center mt-14"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <Image
                src="/cuidarLogo.png"
                alt="Cuidar Logo"
                width={100}
                height={300}
                className="h-auto w-[80px] sm:w-[100px]"
              />
            </motion.div>
          </div>

          <div className="flex justify-center mt-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="cursor-default w-full max-w-xl"
            >
              <div>
                <motion.div
                  className="justify-center flex items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <h1 className="text-xl sm:text-2xl font-bold text-center">Cuidar</h1>
                </motion.div>
                <div className="mt-8 text-center text-sm sm:text-base">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: false }}
                  >
                    <p>This is my only project at the moment. Using NextJs,</p>
                    <p>I did a web app that consist in orthopedic products rentals.</p>
                    <p>A web app created in base of many social and enconomical</p>
                    <p>issues that I've usually seen in my social sorroundings.</p>
                    <p>And those problems were the lack of affordable orthopedic products</p>
                    <p>for those who need them. So with this platform</p>
                    <p>people can easily get the medical equipment they need, while others who</p>
                    <p>no longer use such products can put them to good use by making them available to others.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://proyecto-final-farhat-hab165dz9-agustin-s-projects-5c4110ac.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="flex items-center gap-2 px-5 py-3 bg-[#1f211a] text-[#adadad] rounded-full border border-[#adadad] hover:border-red-500 transition duration-300 text-sm sm:text-base"
            >
              {hovered ? (
                <Eye className="w-5 h-5 animate-fade-in" />
              ) : (
                <EyeOff className="w-5 h-5 animate-fade-in" />
              )}
              <span className="transition duration-300">Visit web</span>
            </button>
          </a>
        </div>

        <div className="flex justify-center px-4 mt-20">
          <motion.h1
            className="text-center text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: false }}
          >
            "Never stop learning. In technology, standing still is like moving backwards"
          </motion.h1>
        </div>




        <div className="h-48 bg-gradient-to-b from-[#171810] to-[#1f211a]" />




        {/*Capacities*/}
        <div id="capacities" className="bg-[#1f211a] px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <motion.div
              className="justify-center flex items-center mt-14"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <h1 className="bg-gradient-to-r from-[#ff2200] to-[#e41414] bg-clip-text text-transparent drop-shadow-lg text-3xl sm:text-4xl font-bold text-center">
                My capacities
              </h1>
            </motion.div>
          </div>

          {/* Grupo 1 */}
          <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-row sm:justify-center sm:space-x-20 gap-y-10">
            {[
              { src: "/nextjsLogo.png", alt: "NextJs Logo", label: "NextJS", width: 100 },
              { src: "/typescriptLogo.png", alt: "Typescript Logo", label: "Typescript", width: 50 },
              { src: "/githubLogo.png", alt: "GitHub Logo", label: "GitHub", width: 70 },
              { src: "/vercelLogo.png", alt: "Vercel Logo", label: "Vercel", width: 70 },
            ].map(({ src, alt, label, width }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="cursor-default flex flex-col items-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-[#1b1d18] flex items-center justify-center border-2 border-[#1b1d18]">
                    <Image src={src} alt={alt} width={width} height={100} />
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-center">{label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Grupo 2 */}
          <div className="mt-16 grid grid-cols-2 sm:flex sm:flex-row sm:justify-center sm:space-x-20 gap-y-10">
            {[
              { src: "/mongodbLogo.png", alt: "MongoDB Logo", label: "MongoDB", width: 65 },
              { src: "/jiraLogo.png", alt: "Jira Logo", label: "Jira Software", width: 70 },
            ].map(({ src, alt, label, width }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="cursor-default flex flex-col items-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-[#1b1d18] flex items-center justify-center border-2 border-[#1b1d18]">
                    <Image src={src} alt={alt} width={width} height={100} />
                  </div>
                  <p className="mt-4 text-sm sm:text-base text-center">{label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center bg-[#1f211a]">
        <motion.h1
          className="mt-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: false }}
        >
          "Simplicity is the soul of efficiency."
        </motion.h1>
      </div>





      <div className="h-80 bg-gradient-to-b from-[#1f211a] to-[#171810]" />




      {/*Contact me*/}
      <div id="contact" className="bg-[#171810]">
        <motion.div
          className="justify-center flex items-center mt-8 sm:mt-14"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h1 className="bg-gradient-to-r from-[#ff2200] to-[#e41414] bg-clip-text text-transparent drop-shadow-lg text-2xl sm:text-4xl font-bold text-center">
            Contact me
          </h1>
        </motion.div>

        <section className="bg-[#171810] py-10 sm:py-20 px-4">
          <div className="max-w-sm sm:max-w-xl mx-auto text-center">
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-left text-[#adadad] mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1f211a] text-[#adadad] border border-[#3a3a3a] rounded focus:outline-none focus:ring-2 focus:ring-[#ff2200]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-left text-[#adadad] mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#1f211a] text-[#adadad] border border-[#3a3a3a] rounded focus:outline-none focus:ring-2 focus:ring-[#ff2200]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-left text-[#adadad] mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-[#1f211a] text-[#adadad] border border-[#3a3a3a] rounded resize-none focus:outline-none focus:ring-2 focus:ring-[#ff2200]"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  type="submit"
                  className="flex items-center gap-2 px-5 py-3 bg-[#1f211a] text-[#adadad] rounded-full border border-[#adadad] hover:border-red-500 transition duration-300"
                >
                  <span className="transition duration-300">Send</span>
                </button>
              </div>

              <p className="text-sm mt-2">{status}</p>

              <div className="bg-[#171810] mt-10 space-y-4">
                <div className="flex justify-center">
                  <h1 className="bg-gradient-to-r from-[#ff2200] to-[#e41414] bg-clip-text text-transparent drop-shadow-lg text-2xl sm:text-4xl font-bold text-center">
                    Thanks for visiting!
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="bg-gradient-to-r from-[#ff2200] to-[#e41414] bg-clip-text text-transparent drop-shadow-lg text-2xl sm:text-4xl font-bold text-center">
                    I'll be waiting your proposal!
                  </h1>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>


    </main>
  );
}
