// "use client";

// import { useEffect, useState } from "react";

// type Section = {
//   label: string;
//   id: string;
// };

// const sections: Section[] = [
//   { label: "Home", id: "" },
//   { label: "About me", id: "about" },
//   { label: "Projects", id: "projects" },
//   { label: "Capacities", id: "capacities" },
//   { label: "Contact me", id: "contact" },
// ];

// export default function Navbar() {
//   const [activeSection, setActiveSection] = useState("Home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 100;
//       let currentSection = "Home";

//       for (const section of sections) {
//         const el = section.id ? document.getElementById(section.id) : document.body;
//         if (el && el.offsetTop <= scrollPosition) {
//           currentSection = section.label;
//         }
//       }

//       setActiveSection(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = id ? document.getElementById(id) : document.body;
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 60,
//         behavior: "smooth",
//       });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="w-full h-16 sticky top-0 backdrop-blur z-50 flex items-center px-6 bg-transparent">
//       {/* Menú horizontal solo en md+ */}
//       <div className="flex justify-center flex-1">
//         <ul className="hidden md:flex space-x-8">
//           {sections.map(({ label, id }) => (
//             <li
//               key={label}
//               onClick={() => scrollToSection(id)}
//               className={`relative text-[#adadad] hover:text-[#ff6d4d] transition-colors duration-200 cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ff6d4d] after:transition-all after:duration-300 after:rounded-full
//                 ${activeSection === label
//                   ? "after:w-full"
//                   : "after:w-0 hover:after:w-full"
//                 } pb-1`}
//             >
//               {label}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Botón hamburguesa solo en móvil */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
//         aria-label="Toggle menu"
//       >
//         <span
//           className={`block h-0.5 w-full bg-[#adadad] rounded transition duration-300 ease-in-out
//           ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
//         />
//         <span
//           className={`block h-0.5 w-full bg-[#adadad] rounded transition duration-300 ease-in-out
//           ${menuOpen ? "opacity-0" : ""}`}
//         />
//         <span
//           className={`block h-0.5 w-full bg-[#adadad] rounded transition duration-300 ease-in-out
//           ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
//         />
//       </button>

//       {/* Menú desplegable móvil */}
//       <div
//         className={`fixed top-16 right-0 bg-[#171810] backdrop-blur-md w-48 py-4 flex flex-col space-y-4 px-6 transition-transform duration-300 ease-in-out md:hidden
//           ${menuOpen ? "translate-x-0" : "translate-x-full"}
//            bg-[#171810] backdrop-blur-md
//           `}
//       >
//         {sections.map(({ label, id }) => (
//           <button
//             key={label}
//             onClick={() => scrollToSection(id)}
//             className={`text-left text-[#adadad] hover:text-[#ff6d4d] transition-colors duration-200`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>
//     </nav>


//   );
// }

"use client";

import { useEffect, useState } from "react";

type Section = {
  label: string;
  id: string;
};

const sections: Section[] = [
  { label: "Home", id: "" },
  { label: "About me", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Capacities", id: "capacities" },
  { label: "Contact me", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = "Home";

      for (const section of sections) {
        const el = section.id ? document.getElementById(section.id) : document.body;
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = section.label;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = id ? document.getElementById(id) : document.body;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Cierra menú al elegir
  };

  return (
    <>
      <nav className="w-full h-16 sticky top-0 backdrop-blur z-50 flex items-center px-6 bg-transparent">
        {/* Botón hamburguesa solo en móvil, a la izquierda */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 mr-4"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full bg-[#adadad] rounded transition duration-300 ease-in-out
            ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-full bg-[#adadad] rounded transition duration-300 ease-in-out
            ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-full bg-[#adadad] rounded transition duration-300 ease-in-out
            ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>

        {/* Menú horizontal solo en md+ */}
        <div className="flex justify-center flex-1">
          <ul className="hidden md:flex space-x-8">
            {sections.map(({ label, id }) => (
              <li
                key={label}
                onClick={() => scrollToSection(id)}
                className={`relative text-[#adadad] hover:text-[#ff6d4d] transition-colors duration-200 cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ff6d4d] after:transition-all after:duration-300 after:rounded-full
                  ${activeSection === label
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                  } pb-1`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay sin blur, solo semitransparente */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}

      {/* Menú desplegable móvil a la izquierda con fondo borroso */}
      <div
        className={`fixed top-16 left-0 h-screen w-48 py-4 flex flex-col space-y-4 px-6 transition-transform duration-300 ease-in-out md:hidden z-50
          bg-[#171810]/70 backdrop-blur-md
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {sections.map(({ label, id }) => (
          <button
            key={label}
            onClick={() => scrollToSection(id)}
            className="text-left text-[#adadad] hover:text-[#ff6d4d] transition-colors duration-200"
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}




