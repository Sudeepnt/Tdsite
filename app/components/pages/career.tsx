// "use client";

// import React from "react";
// import Image from "next/image";

// // Simple Quote Icon Component
// const QuoteIcon = () => (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 7.55228 5.01697 7V3H10.017C11.6738 3 13.017 4.34315 13.017 6V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" fill="#3035e6"/>
//   </svg>
// );

// // Social Icons Components
// const SocialIcons = () => (
//     <div className="flex gap-4 opacity-70 mt-2">
//         {/* X / Twitter */}
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
//         {/* Facebook */}
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.733.984-2.733 2.039v1.932h3.588l-.642 3.667h-2.946v7.98c-9.961 0-5.084 0-5.081 0z"/></svg>
//         {/* LinkedIn */}
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
//         {/* Instagram */}
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
//     </div>
// );

// export default function Career() {
  
//   const stats = [
//     { number: "5", label: "Years" },
//     { number: "400", label: "People" },
//     { number: "10", label: "Countries" },
//     { number: "10", label: "Studios" },
//     { number: "12", label: "Offices" },
//     { number: "20", label: "Games in the portfolio" },
//   ];

//   const infoCards = [
//     {
//       title: "Who are we?",
//       image: "/career_who.jpg", 
//       text: (
//         <>
//           <p className="mb-4">
//             At Crodal we are a collective of creatives who combine unique experiences and perspectives, with a proven track record of financing, marketing, and working alongside developers to bring great games to market.
//           </p>
//           <p>
//             We nurture a vibrant ecosystem around Crodal and beyond, offering artistic independence, excellent operational support, and cross-pollination between outstanding teams.
//           </p>
//         </>
//       )
//     },
//     {
//       title: "Where are we?",
//       image: "/career_where.jpg", 
//       text: (
//         <>
//           <p className="mb-4">
//             We are a globally distributed team, with offices in London and Singapore, and studios spread across 10 countries.
//           </p>
//           <p>
//             We remain connected through our shared vision of being a consistent space for creativity, inspiring feelings of nostalgia for what we’ve done, and anticipation for what’s coming next.
//           </p>
//         </>
//       )
//     },
//     {
//       title: "What are we here to do?",
//       image: "/career_what.jpg", 
//       text: (
//         <>
//           <p>
//             We are a global publisher focused on curating a portfolio of games that champions bold art direction and innovative game design. Crodal games look outward, drawing influence from every form of art, culture and experience.
//           </p>
//         </>
//       )
//     }
//   ];

//   return (
//     // Main Container
//     <div className="relative w-full min-h-screen bg-black font-sans selection:bg-[#3035e6] selection:text-white">
      
//       {/* --- HERO SECTION --- */}
//       <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
          
//           <div className="absolute inset-0 bg-black/40" />
//         </div>
//         <div className="relative z-10 flex flex-col items-center text-center px-6 animate-in fade-in zoom-in duration-1000">
//             <h1 className="text-4xl md:text-6xl font-light text-white mb-12 tracking-wide">
//                 Crodal Interactive
//             </h1>
//             <div className="flex flex-col md:flex-row gap-6">
//                 <button className="px-12 py-4 border border-white text-white text-sm md:text-base uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 min-w-[240px]">
//                     Connect
//                 </button>
//                 <button className="px-12 py-4 border border-white text-white text-sm md:text-base uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 min-w-[240px]">
//                     Job openings
//                 </button>
//             </div>
//         </div>
//       </div>

//       {/* --- STATS SECTION --- */}
//       <section className="w-full bg-[#E6E6E6] py-24 px-6 md:px-16 text-[#1a1a1a]">
//         <div className="max-w-6xl mx-auto flex flex-col items-center">
//             <h2 className="text-3xl md:text-4xl font-light mb-20 text-[#333]">
//                 The Crodal Group
//             </h2>
//             <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 text-center">
//                 {stats.map((stat, i) => (
//                     <div key={i} className="flex flex-col items-center gap-2">
//                         <span className="text-6xl md:text-7xl text-[#3035e6] font-medium">
//                             {stat.number}
//                         </span>
//                         <span className="text-sm md:text-base text-gray-600 font-medium tracking-wide">
//                             {stat.label}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//       </section>

//       {/* --- GET TO KNOW US --- */}
//       <section className="w-full bg-[#3035e6] text-white py-24 px-6 md:px-16">
//         <div className="max-w-7xl mx-auto flex flex-col items-center">
//             <h2 className="text-3xl md:text-5xl font-light mb-20">
//                 Get To Know Us
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full">
//                 {infoCards.map((card, i) => (
//                     <div key={i} className="flex flex-col gap-8">
//                         <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/20">
//                              <Image 
//                                src={card.image}
//                                alt={card.title}
//                                fill
//                                className="object-cover hover:scale-105 transition-transform duration-700"
//                              />
//                         </div>
//                         <div className="flex flex-col gap-4">
//                             <h3 className="text-2xl font-bold">
//                                 {card.title}
//                             </h3>
//                             <div className="text-base md:text-lg leading-relaxed opacity-90 font-light">
//                                 {card.text}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//       </section>

//       {/* --- VALUES & MISSION --- */}
//       <section className="w-full bg-[#E6E6E6] py-24 px-6 md:px-16">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="relative w-full aspect-[3/4] md:aspect-auto md:h-[600px] rounded-2xl overflow-hidden group">
//                 <Image 
//                   src="/career_vision.jpg" 
//                   alt="Vision and Mission"
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//                 <div className="absolute bottom-8 left-8 right-8">
//                     <h3 className="text-3xl md:text-4xl text-white font-medium">
//                         Our Vision, Mission and Values
//                     </h3>
//                 </div>
//             </div>
//             <div className="w-full h-auto md:h-[600px] bg-[#3035e6] rounded-2xl p-8 md:p-12 flex items-center">
//                 <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed">
//                    "...how we operate and are not forgotten about during critical moments. It's during these times when we prove who we say we are; by doing what's right for our people and partners. Here you can feel proud, not just of the work you do, but how you do it, finding a new sense of value in your work."
//                 </p>
//             </div>
//         </div>
//       </section>

//       {/* --- PHOTO COLLAGE --- */}
//       <section className="w-full bg-white">
//          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2">
//             <div className="md:col-span-4 relative h-[300px] md:h-[400px]">
//                 <Image src="/career_culture_1.jpg" alt="Culture 1" fill className="object-cover" />
//             </div>
//             <div className="md:col-span-8 relative h-[300px] md:h-[400px]">
//                 <Image src="/career_culture_2.jpg" alt="Culture 2" fill className="object-cover" />
//             </div>
//             <div className="md:col-span-8 relative h-[300px] md:h-[400px]">
//                 <Image src="/career_culture_3.jpg" alt="Culture 3" fill className="object-cover" />
//             </div>
//             <div className="md:col-span-4 relative h-[300px] md:h-[400px]">
//                 <Image src="/career_culture_4.jpg" alt="Culture 4" fill className="object-cover" />
//             </div>
//             <div className="md:col-span-6 relative h-[300px] md:h-[400px]">
//                 <Image src="/career_culture_5.jpg" alt="Culture 5" fill className="object-cover" />
//             </div>
//             <div className="md:col-span-6 relative h-[300px] md:h-[400px]">
//                 <Image src="/career_culture_6.jpg" alt="Culture 6" fill className="object-cover" />
//             </div>
//          </div>
//       </section>

//       {/* --- QUOTE 1 --- */}
//       <section className="w-full bg-[#E6E6E6] py-32 px-6 md:px-16 flex flex-col items-center text-center">
//         <div className="max-w-5xl">
//             <div className="flex justify-center mb-8">
//                <QuoteIcon />
//             </div>
//             <p className="text-2xl md:text-4xl leading-relaxed text-[#3035e6] font-normal mb-8">
//                "We provide space for people where no one is louder than anyone else. The voice of management doesn't cloud the voice of others; everyone feels they have the safety to say what they want..."
//             </p>
//             <span className="text-[#3035e6] text-sm font-bold uppercase tracking-widest">
//                Jess Pearce
//             </span>
//         </div>
//       </section>

//       {/* --- IMAGE STRIP --- */}
//       <section className="w-full grid grid-cols-2 md:grid-cols-4 h-64 md:h-80">
//           <div className="relative w-full h-full"><Image src="/career_strip_1.jpg" alt="Strip 1" fill className="object-cover" /></div>
//           <div className="relative w-full h-full"><Image src="/career_strip_2.jpg" alt="Strip 2" fill className="object-cover" /></div>
//           <div className="relative w-full h-full"><Image src="/career_strip_3.jpg" alt="Strip 3" fill className="object-cover" /></div>
//           <div className="relative w-full h-full"><Image src="/career_strip_4.jpg" alt="Strip 4" fill className="object-cover" /></div>
//       </section>

//       {/* --- QUOTE 2 --- */}
//       <section className="w-full bg-[#E6E6E6] py-32 px-6 md:px-16 flex flex-col items-center text-center">
//         <div className="max-w-5xl">
//             <div className="flex justify-center mb-8">
//                <QuoteIcon />
//             </div>
//             <p className="text-2xl md:text-4xl leading-relaxed text-[#3035e6] font-normal mb-8">
//                "We're people first, it transpires in everything we do. When we work together it is never judgmental, we always respect people's opinion. Craftmanship runs through everything we do..."
//             </p>
//             <span className="text-[#3035e6] text-sm font-bold uppercase tracking-widest">
//                Pierre Twardowski
//             </span>
//         </div>
//       </section>

//       {/* --- OUR PEOPLE AWARDS --- */}
//       <section className="w-full bg-[#E6E6E6] py-24 px-6 md:px-16 border-t border-black/5">
//         <div className="max-w-6xl mx-auto flex flex-col items-center">
//             <h2 className="text-3xl md:text-4xl font-light mb-16 text-[#333]">
//                 Our People Awards
//             </h2>
//             <div className="flex flex-wrap justify-center gap-8 md:gap-16">
//                 <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
//                     <Image src="/award_1.png" alt="Award 1" width={200} height={200} className="object-contain" />
//                 </div>
//                 <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
//                     <Image src="/award_2.png" alt="Award 2" width={200} height={200} className="object-contain" />
//                 </div>
//                 <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
//                     <Image src="/award_3.png" alt="Award 3" width={200} height={200} className="object-contain" />
//                 </div>
//                 <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-300">
//                     <Image src="/award_4.png" alt="Award 4" width={200} height={200} className="object-contain" />
//                 </div>
//             </div>
//         </div>
//       </section>

//       {/* --- MAP & CONTACT --- */}
//       <section className="w-full flex flex-col md:flex-row h-auto md:h-[600px]">
//           <div className="relative w-full md:w-1/2 h-[400px] md:h-full bg-gray-200">
//              <Image src="/career_map.jpg" alt="Office Locations Map" fill className="object-cover" />
//           </div>
//           <div className="w-full md:w-1/2 bg-[#3035e6] flex flex-col items-center justify-center p-12 text-center text-white">
//               <div className="w-64 bg-white text-[#3035e6] py-3 px-6 rounded-md font-bold text-lg mb-8 flex justify-between items-center cursor-pointer">
//                   London <span className="text-xl">⌄</span>
//               </div>
//               <address className="not-italic text-lg md:text-xl font-light space-y-2 mb-8">
//                   <p>2 Leonard Circus</p>
//                   <p>EC2A 4NA London</p>
//               </address>
//               <a href="#" className="underline text-lg hover:text-gray-200 mb-8 block">Directions</a>
//               <a href="mailto:kate.parker@crodal-interactive.com" className="underline text-lg hover:text-gray-200">kate.parker@crodal-interactive.com</a>
//           </div>
//       </section>

//       {/* --- NEW GREY FOOTER --- */}
//       <footer className="w-full bg-[#E6E6E6] text-[#4a4a4a] py-16 px-6 md:px-16 text-sm md:text-base">
        
//         {/* Top Grid: Links */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
//             {/* Column 1: Career Site */}
//             <div className="flex flex-col gap-4">
//                 <h3 className="text-xl text-black/80 mb-2">Career site</h3>
//                 <a href="#" className="hover:underline hover:text-black">Home</a>
//                 <a href="#" className="hover:underline hover:text-black">People</a>
//                 <a href="#" className="hover:underline hover:text-black">Jobs</a>
//                 <a href="#" className="hover:underline hover:text-black">Data & privacy</a>
//                 <a href="#" className="hover:underline hover:text-black">Manage cookies</a>
//             </div>

//             {/* Column 2: Crodal Interactive */}
//             <div className="flex flex-col gap-4">
//                 <h3 className="text-xl text-black/80 mb-2">Crodal Interactive</h3>
//                 <a href="#" className="hover:underline hover:text-black">Crodal Interactive</a>
//                 <a href="#" className="hover:underline hover:text-black">A44</a>
//                 <a href="#" className="hover:underline hover:text-black">Alpha Channel Inc.</a>
//                 <a href="#" className="hover:underline hover:text-black">Awaceb</a>
//                 <a href="#" className="hover:underline hover:text-black">Ebb Software</a>
//                 <a href="#" className="hover:underline hover:text-black">Shapefarm</a>
//                 <a href="#" className="hover:underline hover:text-black">Sloclap</a>
//                 <a href="#" className="hover:underline hover:text-black">Tactical Adventures</a>
//                 <a href="#" className="hover:underline hover:text-black">Timberline</a>
//             </div>

//             {/* Column 3: Right Side (Socials) */}
//             <div className="flex flex-col items-start md:items-end gap-2 md:mt-auto">
//                 <a href="https://crodal-interactive.com" className="hover:underline hover:text-black mb-2">
//                     crodal-interactive.com
//                 </a>
//                 <SocialIcons />
//             </div>
//         </div>

//         {/* Separator Line */}
//         <div className="w-full h-px bg-black/10 mb-8" />

//         {/* Bottom Bar: Logins & Branding */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-6">
            
//             <a href="#" className="hover:underline hover:text-black">Employee login</a>
            
//             {/* Center Logo Area */}
//             <div className="flex flex-col items-center gap-1">
//                 <span className="font-bold text-xl italic text-black">Crodal</span>
//                 <span>Career site by Crodal</span>
//             </div>

//             <a href="#" className="hover:underline hover:text-black">Candidate Connect login</a>
//         </div>

//       </footer>

//     </div>
//   );
// }