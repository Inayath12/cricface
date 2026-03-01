// // // // import { motion } from "framer-motion";
// // // // import { useEffect, useRef } from "react";
// // // // // import { Play } from "lucide-react";
// // // // // import { useRef } from "react";

// // // // const videos = [
// // // //   {
// // // //     id: 1,
// // // //     name: "Hard Pressing",
// // // //     video: "public/videos/Hard pressing.mp4",
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     name: "Expert's Trust",
// // // //     video: "public/videos/Trusted by professional.mp4",
// // // //   },
// // // //   {
// // // //     id: 3,
// // // //     name: "Trusted by professional",
// // // //     video: "public/videos/Trusted by professional 2.mp4",
// // // //   },
// // // //   {
// // // //     id: 4,
// // // //     name: "Sixer",
// // // //     video: "public/videos/Six.mp4",
// // // //   },
// // // // ];

// // // // // const TrustedByProfessionals = () => {
// // // // //   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

// // // // //   const handlePlay = (index: number) => {
// // // // //     videoRefs.current[index]?.play();
// // // // //   };

// // // // //   return (
// // // // //     <section className="py-20 bg-black text-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 mb-10">
// // // // //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// // // // //           Trusted by Professionals
// // // // //         </h2>
// // // // //         <p className="text-center text-zinc-400 mt-3">
// // // // //           See our bats in action — built for power hitters.
// // // // //         </p>
// // // // //       </div>

// // // // //       <div className="overflow-x-auto scrollbar-hide px-4">
// // // // //         <div className="flex gap-6 w-max">
// // // // //           {videos.map((item, index) => (
// // // // //             <motion.div
// // // // //               key={item.id}
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               className="relative min-w-[250px] md:min-w-[320px] h-[450px] rounded-3xl overflow-hidden bg-zinc-900 shadow-lg"
// // // // //             >
// // // // //               <video
// // // // //                 ref={(el) => (videoRefs.current[index] = el)}
// // // // //                 src={item.video}
// // // // //                 muted
// // // // //                 loop
// // // // //                 playsInline
// // // // //                 className="w-full h-full object-cover"
// // // // //               />

// // // // //               {/* Overlay */}
// // // // //               <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
// // // // //                 <button
// // // // //                   onClick={() => handlePlay(index)}
// // // // //                   className="bg-white text-black p-4 rounded-full shadow-lg hover:scale-110 transition"
// // // // //                 >
// // // // //                   <Play size={24} />
// // // // //                 </button>
// // // // //               </div>

// // // // //               {/* Influencer Name */}
// // // // //               <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-1 rounded-full text-sm font-semibold">
// // // // //                 {item.name}
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default TrustedByProfessionals;

// // // // // const TrustedByProfessionals = () => {
// // // // //   return (
// // // // //     <section className="py-20 bg-black text-white">
// // // // //       <div className="max-w-7xl mx-auto px-4 mb-10">
// // // // //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// // // // //           Trusted by Professionals
// // // // //         </h2>
// // // // //         <p className="text-center text-zinc-400 mt-3">
// // // // //           Real power. Real performance. Real sixes.
// // // // //         </p>
// // // // //       </div>

// // // // //       <div className="overflow-x-auto scrollbar-hide px-4">
// // // // //         <div className="flex gap-6 w-max">
// // // // //           {videos.map((item) => (
// // // // //             <motion.div
// // // // //               key={item.id}
// // // // //               whileHover={{ scale: 1.05 }}
// // // // //               className="relative min-w-[250px] md:min-w-[320px] h-[450px] rounded-3xl overflow-hidden bg-zinc-900 shadow-lg"
// // // // //             >
// // // // //               <video
// // // // //                 src={item.video}
// // // // //                 autoPlay
// // // // //                 muted
// // // // //                 loop
// // // // //                 playsInline
// // // // //                 className="w-full h-full object-cover"
// // // // //               />

// // // // //               {/* Influencer Name */}
// // // // //               <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-1 rounded-full text-sm font-semibold">
// // // // //                 {item.name}
// // // // //               </div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default TrustedByProfessionals;

// // // // const TrustedByProfessionals = () => {
// // // //   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

// // // //   useEffect(() => {
// // // //     videoRefs.current.forEach((video) => {
// // // //       if (video) {
// // // //         video.play().catch(() => {
// // // //           // autoplay might fail silently
// // // //         });
// // // //       }
// // // //     });
// // // //   }, []);

// // // //   return (
// // // //     <section className="py-20 bg-black text-white overflow-hidden">
// // // //       <div className="max-w-7xl mx-auto px-4 mb-10">
// // // //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// // // //           Trusted by Professionals
// // // //         </h2>
// // // //         <p className="text-center text-zinc-400 mt-3">
// // // //           Real power. Real performance. Real sixes.
// // // //         </p>
// // // //       </div>

// // // //       {/* Hide scrollbar container */}
// // // //       <div className="overflow-x-auto no-scrollbar px-4">
// // // //         <div className="flex gap-6 w-max">
// // // //           {videos.map((item, index) => (
// // // //             <motion.div
// // // //               key={item.id}
// // // //               whileHover={{ scale: 1.03 }}
// // // //               className="relative min-w-[250px] md:min-w-[320px] h-[450px] rounded-3xl overflow-hidden bg-black shadow-lg"
// // // //             >
// // // //               <video
// // // //                 ref={(el) => (videoRefs.current[index] = el)}
// // // //                 muted
// // // //                 loop
// // // //                 playsInline
// // // //                 autoPlay
// // // //                 preload="auto"
// // // //                 className="w-full h-full object-cover"
// // // //               >
// // // //                 <source src={item.video} type="video/mp4" />
// // // //               </video>

// // // //               <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-1 rounded-full text-sm font-semibold">
// // // //                 {item.name}
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default TrustedByProfessionals;

// // // import { motion } from "framer-motion";
// // // import { useRef } from "react";

// // // const videos = [
// // //   {
// // //     id: 1,
// // //     name: "Hard Pressing",
// // //     video: "public/videos/Hard pressing.mp4",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Expert's Trust",
// // //     video: "public/videos/Trusted by professional.mp4",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Trusted by professional",
// // //     video: "public/videos/Trusted by professional 2.mp4",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Sixer",
// // //     video: "public/videos/Six.mp4",
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "Rocket Ping",
// // //     video: "public/videos/Rocket_Ping.mp4",
// // //   },
// // // ];

// // // const TrustedByProfessionals = () => {
// // //   const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

// // //   const handleClick = (index: number) => {
// // //     const video = videoRefs.current[index];
// // //     if (!video) return;

// // //     // Enable sound on tap
// // //     video.muted = false;
// // //     video.controls = true;
// // //     video.play();
// // //   };

// // //   return (
// // //     <section className="py-20 bg-black text-white overflow-hidden">
// // //       <div className="max-w-7xl mx-auto px-4 mb-10">
// // //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// // //           Trusted by Professionals
// // //         </h2>
// // //         <p className="text-center text-zinc-400 mt-3">
// // //           Real power. Real performance. Real sixes.
// // //         </p>
// // //       </div>

// // //       <div className="overflow-x-auto no-scrollbar px-4">
// // //         <div className="flex gap-6 w-max">
// // //           {videos.map((item, index) => (
// // //             <motion.div
// // //               key={item.id}
// // //               whileHover={{ scale: 1.03 }}
// // //               className="
// // //                 relative
// // //                 min-w-[240px]
// // //                 md:min-w-[320px]
// // //                 h-[420px]
// // //                 md:h-[500px]
// // //                 rounded-3xl
// // //                 overflow-hidden
// // //                 bg-black
// // //                 shadow-lg
// // //               "
// // //             >
// // //               <video
// // //                 ref={(el) => (videoRefs.current[index] = el)}
// // //                 autoPlay
// // //                 muted
// // //                 loop
// // //                 playsInline
// // //                 preload="auto"
// // //                 className="w-full h-full object-cover cursor-pointer"
// // //                 onClick={() => handleClick(index)}
// // //               >
// // //                 <source src={item.video} type="video/mp4" />
// // //               </video>

// // //               <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-1 rounded-full text-sm font-semibold">
// // //                 {item.name}
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default TrustedByProfessionals;

// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState, useRef } from "react";
// // import { X } from "lucide-react";

// // const videos = [
// //   {
// //     id: 1,
// //     name: "Hard Pressing",
// //     video: "public/videos/Hard pressing.mp4",
// //   },
// //   {
// //     id: 2,
// //     name: "Expert's Trust",
// //     video: "public/videos/Trusted by professional.mp4",
// //   },
// //   {
// //     id: 3,
// //     name: "Trusted by professional",
// //     video: "public/videos/Trusted by professional 2.mp4",
// //   },
// //   {
// //     id: 4,
// //     name: "Sixer",
// //     video: "public/videos/Six.mp4",
// //   },
// //   {
// //     id: 5,
// //     name: "Rocket Ping",
// //     video: "public/videos/Rocket_Ping.mp4",
// //   },
// // ];

// // const TrustedByProfessionals = () => {
// //   const [activeVideo, setActiveVideo] = useState<string | null>(null);
// //   const fullVideoRef = useRef<HTMLVideoElement | null>(null);

// //   const openVideo = (src: string) => {
// //     setActiveVideo(src);
// //     setTimeout(() => {
// //       if (fullVideoRef.current) {
// //         fullVideoRef.current.muted = false;
// //         fullVideoRef.current.play();
// //       }
// //     }, 200);
// //   };

// //   const closeVideo = () => {
// //     if (fullVideoRef.current) {
// //       fullVideoRef.current.pause();
// //     }
// //     setActiveVideo(null);
// //   };

// //   return (
// //     <section className="py-20 bg-black text-white overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-4 mb-10">
// //         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
// //           Trusted by Professionals
// //         </h2>
// //         <p className="text-center text-zinc-400 mt-3">
// //           Real power. Real performance. Real sixes.
// //         </p>
// //       </div>

// //       {/* Horizontal Scroll */}
// //       <div className="overflow-x-auto no-scrollbar px-4">
// //         <div className="flex gap-6 w-max">
// //           {videos.map((item) => (
// //             <motion.div
// //               key={item.id}
// //               whileHover={{ scale: 1.03 }}
// //               onClick={() => openVideo(item.video)}
// //               className="
// //                 relative
// //                 min-w-[220px]
// //                 md:min-w-[300px]
// //                 aspect-[9/16]
// //                 rounded-3xl
// //                 overflow-hidden
// //                 bg-black
// //                 shadow-lg
// //                 cursor-pointer
// //               "
// //             >
// //               <video
// //                 src={item.video}
// //                 autoPlay
// //                 muted
// //                 loop
// //                 playsInline
// //                 className="w-full h-full object-cover"
// //               />

// //               <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-1 rounded-full text-sm font-semibold">
// //                 {item.name}
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* FULLSCREEN MODAL */}
// //       <AnimatePresence>
// //         {activeVideo && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 bg-black z-50 flex items-center justify-center"
// //           >
// //             <button
// //               onClick={closeVideo}
// //               className="absolute top-6 right-6 text-white"
// //             >
// //               <X size={30} />
// //             </button>

// //             <video
// //               ref={fullVideoRef}
// //               src={activeVideo}
// //               controls
// //               autoPlay
// //               className="max-h-[90vh] max-w-[95vw] object-contain"
// //             />
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </section>
// //   );
// // };

// // export default TrustedByProfessionals;

// *****************************************************

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef } from "react";
// import { X } from "lucide-react";

// const videos = [
//   {
//     id: 1,
//     name: "Hard Pressing",
//     video: "/videos/hard-pressing.MP4",
//   },
//   {
//     id: 2,
//     name: "Expert's Trust",
//     video: "/videos/trusted-by-professional.MP4",
//   },
//   {
//     id: 3,
//     name: "Sixer",
//     video: "/videos/Six.MP4",
//   },
//   {
//     id: 4,
//     name: "Rocket Ping",
//     video: "/videos/rocket-ping.MP4",
//   },
//   {
//     id: 5,
//     name: "Trusted by professional",
//     video: "/videos/trusted-by-professional-2.MP4",
//   },
// ];

// const TrustedByProfessionals = () => {
//   const [activeVideo, setActiveVideo] = useState<string | null>(null);
//   const fullVideoRef = useRef<HTMLVideoElement | null>(null);

//   const openVideo = (src: string) => {
//     setActiveVideo(src);
//     setTimeout(() => {
//       if (fullVideoRef.current) {
//         fullVideoRef.current.muted = false;
//         fullVideoRef.current.play();
//       }
//     }, 200);
//   };

//   const closeVideo = () => {
//     if (fullVideoRef.current) fullVideoRef.current.pause();
//     setActiveVideo(null);
//   };

//   return (
//     <section className="py-20 bg-zinc-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 mb-12">
//         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
//           Trusted by Professionals
//         </h2>
//         <p className="text-center text-zinc-400 mt-3">
//           Real power. Real performance. Real sixes.
//         </p>
//       </div>

//       {/* Scroll container */}
//       <div className="overflow-x-auto no-scrollbar px-4">
//         <div className="flex gap-8 items-start">

//           {videos.map((item) => (
//             <motion.div
//               key={item.id}
//               whileHover={{ scale: 1.03 }}
//               onClick={() => openVideo(item.video)}
//               className="
//                 flex-shrink-0
//                 w-[220px]
//                 sm:w-[250px]
//                 md:w-[280px]
//                 lg:w-[300px]
//                 h-[390px]
//                 sm:h-[445px]
//                 md:h-[500px]
//                 lg:h-[540px]
//                 rounded-3xl
//                 overflow-hidden
//                 bg-black
//                 shadow-2xl
//                 cursor-pointer
//               "
//             >
//               <video
//                 src={item.video}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute bottom-4 left-4 bg-white/80 px-4 py-1 rounded-full text-sm font-semibold">
//                 {item.name}
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>

//       {/* Fullscreen Modal */}
//       <AnimatePresence>
//         {activeVideo && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black z-50 flex items-center justify-center"
//           >
//             <button
//               onClick={closeVideo}
//               className="absolute top-6 right-6 text-white"
//             >
//               <X size={30} />
//             </button>

//             <video
//               ref={fullVideoRef}
//               src={activeVideo}
//               controls
//               autoPlay
//               className="max-h-[90vh] max-w-[95vw] object-contain"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default TrustedByProfessionals;

// *************************************************************************

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef } from "react";
// import { X } from "lucide-react";

// const videos = [
//   {
//     id: 1,
//     name: "Hard Pressing",
//     video: "/videos/hard-pressing.mp4",
//   },
//   {
//     id: 2,
//     name: "Expert's Trust",
//     video: "/videos/trusted-by-professional.mp4",
//   },
//   {
//     id: 3,
//     name: "Trusted by professionals",
//     video: "/videos/trusted-by-professional-2.mp4",
//   },
//   {
//     id: 4,
//     name: "Sixer",
//     video: "/videos/six.mp4",
//   },
//   {
//     id: 5,
//     name: "Rocket Ping",
//     video: "/videos/rocket-ping.mp4",
//   },
// ];

// const TrustedByProfessionals = () => {
//   const [activeVideo, setActiveVideo] = useState<string | null>(null);
//   const fullVideoRef = useRef<HTMLVideoElement | null>(null);

//   const openVideo = (src: string) => {
//     setActiveVideo(src);
//     setTimeout(() => {
//       if (fullVideoRef.current) {
//         fullVideoRef.current.muted = false;
//         fullVideoRef.current.play();
//       }
//     }, 200);
//   };

//   const closeVideo = () => {
//     if (fullVideoRef.current) fullVideoRef.current.pause();
//     setActiveVideo(null);
//   };

//   return (
//     <section className="py-20 bg-zinc-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 mb-12">
//         <h2 className="text-3xl md:text-4xl font-display font-black text-center">
//           Trusted by Professionals
//         </h2>
//         <p className="text-center text-zinc-400 mt-3">
//           Real power. Real performance. Real sixes.
//         </p>
//       </div>

//       <div className="overflow-x-auto scrollbar-hide px-4">
//         <div className="flex gap-8">

//           {videos.map((item) => (
//             <motion.div
//               key={item.id}
//               whileHover={{ scale: 1.03 }}
//               onClick={() => openVideo(item.video)}
//               className="relative flex-shrink-0
//                 w-[230px] sm:w-[260px] md:w-[280px]
//                 aspect-[9/16]
//                 rounded-3xl overflow-hidden
//                 bg-zinc-100 shadow-xl cursor-pointer"
//             >
//               <video
//                 src={item.video}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 preload="auto"
//                 className="w-full h-full object-cover"
//               />

//               <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-semibold">
//                 {item.name}
//               </div>
//             </motion.div>
//           ))}

//         </div>
//       </div>

//       <AnimatePresence>
//         {activeVideo && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
//           >
//             <button
//               onClick={closeVideo}
//               className="absolute top-6 right-6 text-white"
//             >
//               <X size={30} />
//             </button>

//             <video
//               ref={fullVideoRef}
//               src={activeVideo}
//               controls
//               autoPlay
//               className="max-h-[90vh] max-w-[95vw] object-contain"
//             />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// };

// export default TrustedByProfessionals;

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { X } from "lucide-react";

const videos = [
  {
    id: 1,
    name: "Hard Pressing",
    video: "/videos/hard-pressing.MP4",
  },
  {
    id: 2,
    name: "Expert's Trust",
    video: "/videos/trusted-by-professional.MP4",
  },
  {
    id: 3,
    name: "Sixer",
    video: "/videos/Six.MP4",
  },
  {
    id: 4,
    name: "Rocket Ping",
    video: "/videos/rocket-ping.MP4",
  },
  {
    id: 5,
    name: "Trusted by professional",
    video: "/videos/trusted-by-professional-2.MP4",
  },
];

const TrustedByProfessionals = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const fullVideoRef = useRef<HTMLVideoElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Drag-to-scroll refs
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragDistance = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragDistance.current = 0;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    dragDistance.current = Math.abs(walk);
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  };

  const openVideo = (src: string) => {
    // Don't open modal if user was dragging
    if (dragDistance.current > 5) return;
    setActiveVideo(src);
    setTimeout(() => {
      if (fullVideoRef.current) {
        fullVideoRef.current.muted = false;
        fullVideoRef.current.play();
      }
    }, 200);
  };

  const closeVideo = () => {
    if (fullVideoRef.current) fullVideoRef.current.pause();
    setActiveVideo(null);
  };

  return (
    <section className="py-20 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-black text-center">
          Trusted by Professionals
        </h2>
        <p className="text-center text-zinc-400 mt-3">
          Real power. Real performance. Real sixes.
        </p>
      </div>

      {/* Drag-to-scroll container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar px-4 select-none"
        style={{ cursor: "grab" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="flex gap-8 items-start">
          {videos.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.03 }}
              onClick={() => openVideo(item.video)}
              className="
                relative
                flex-shrink-0
                w-[220px]
                sm:w-[250px]
                md:w-[280px]
                lg:w-[300px]
                h-[390px]
                sm:h-[445px]
                md:h-[500px]
                lg:h-[540px]
                rounded-3xl
                overflow-hidden
                bg-black
                shadow-2xl
                cursor-pointer
              "
            >
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              />

              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 text-white hover:text-zinc-300 transition-colors"
            >
              <X size={30} />
            </button>

            <video
              ref={fullVideoRef}
              src={activeVideo}
              controls
              autoPlay
              playsInline
              className="max-h-[90vh] max-w-[95vw] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TrustedByProfessionals;