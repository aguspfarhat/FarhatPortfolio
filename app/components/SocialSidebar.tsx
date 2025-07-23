// 'use client'

// import { Instagram, Linkedin, Github } from 'lucide-react'
// import Link from 'next/link'

// const SocialSidebar = () => {
//     return (
//         <>
//             {/* Sidebar vertical para desktop */}
//             <div className="fixed top-1/3 left-0 z-50 hidden md:flex flex-col space-y-3">
//                 {[
//                     {
//                         href: 'https://www.linkedin.com/in/agustin-perez-farhat-913069238/',
//                         label: 'LinkedIn',
//                         icon: <Linkedin className="w-5 h-5" />,
//                     },
//                     {
//                         href: 'https://github.com/aguspfarhat?tab=repositories',
//                         label: 'GitHub',
//                         icon: <Github className="w-5 h-5" />,
//                     },
//                     {
//                         href: 'https://www.instagram.com/agustinpfarhat/',
//                         label: 'Instagram',
//                         icon: <Instagram className="w-5 h-5" />,
//                     },
//                 ].map((item, index) => (
//                     <Link
//                         key={index}
//                         href={item.href}
//                         target="_blank"
//                         className="group flex items-center w-[48px] hover:w-[160px] overflow-hidden transition-all duration-300 text-[#adadad] rounded-r-full pr-4 py-2 pl-3 backdrop-blur-md bg-white/5 hover:bg-gradient-to-r hover:from-[#ff2200] hover:to-[#e41414]"
//                     >
//                         <div className="transition-transform group-hover:scale-110">
//                             {item.icon}
//                         </div>
//                         <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
//                             {item.label}
//                         </span>
//                     </Link>
//                 ))}
//             </div>

//             {/* Barra horizontal para móvil abajo */}
//             <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center space-x-6 bg-white/10 backdrop-blur-md py-2 md:hidden">
//                 {[
//                     {
//                         href: 'https://www.linkedin.com/in/agustin-perez-farhat-913069238/',
//                         label: 'LinkedIn',
//                         icon: <Linkedin className="w-6 h-6 text-[#adadad]" />,
//                     },
//                     {
//                         href: 'https://github.com/aguspfarhat?tab=repositories',
//                         label: 'GitHub',
//                         icon: <Github className="w-6 h-6 text-[#adadad]" />,
//                     },
//                     {
//                         href: 'https://www.instagram.com/agustinpfarhat/',
//                         label: 'Instagram',
//                         icon: <Instagram className="w-6 h-6 text-[#adadad]" />,
//                     },
//                 ].map((item, index) => (
//                     <Link
//                         key={index}
//                         href={item.href}
//                         target="_blank"
//                         aria-label={item.label}
//                         className="p-2 rounded-full hover:text-[#ff6d4d] transition-colors duration-300"
//                     >
//                         {item.icon}
//                     </Link>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default SocialSidebar


'use client'

import { Instagram, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

const SocialSidebar = () => {
    return (
        <>
            {/* Sidebar vertical para desktop */}
            <div className="fixed top-1/3 left-0 z-50 hidden md:flex flex-col space-y-3">
                {[
                    {
                        href: 'https://www.linkedin.com/in/agustin-perez-farhat-913069238/',
                        label: 'LinkedIn',
                        icon: <Linkedin className="w-5 h-5" />,
                    },
                    {
                        href: 'https://github.com/aguspfarhat?tab=repositories',
                        label: 'GitHub',
                        icon: <Github className="w-5 h-5" />,
                    },
                    {
                        href: 'https://www.instagram.com/agustinpfarhat/',
                        label: 'Instagram',
                        icon: <Instagram className="w-5 h-5" />,
                    },
                ].map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        target="_blank"
                        className="group flex items-center w-[48px] hover:w-[160px] overflow-hidden transition-all duration-300 text-[#adadad] rounded-r-full pr-4 py-2 pl-3 backdrop-blur-md bg-white/5 hover:bg-gradient-to-r hover:from-[#ff2200] hover:to-[#e41414]"
                    >
                        <div className="transition-transform group-hover:scale-110">
                            {item.icon}
                        </div>
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Barra horizontal para móvil abajo */}
            <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center space-x-6 bg-white/10 backdrop-blur-md py-2 md:hidden">
                {[
                    {
                        href: 'https://www.linkedin.com/in/agustin-perez-farhat-913069238/',
                        label: 'LinkedIn',
                        icon: <Linkedin className="w-6 h-6 text-[#adadad]" />,
                    },
                    {
                        href: 'https://github.com/aguspfarhat?tab=repositories',
                        label: 'GitHub',
                        icon: <Github className="w-6 h-6 text-[#adadad]" />,
                    },
                    {
                        href: 'https://www.instagram.com/agustinpfarhat/',
                        label: 'Instagram',
                        icon: <Instagram className="w-6 h-6 text-[#adadad]" />,
                    },
                ].map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        target="_blank"
                        aria-label={item.label}
                        className="p-2 rounded-full transition-transform active:scale-110"
                    >
                        <div className="transition-transform">{item.icon}</div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default SocialSidebar
