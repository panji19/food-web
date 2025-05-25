import React from "react";
import BannerPng from "../../assets/food/banner.png";
import { motion } from "framer-motion";

// ✅ Definisikan fungsi SlideUp
const SlideUp = (delay = 0) => ({
    hidden: {
      y: 60,     // Bergerak dari bawah ke atas
      opacity: 0, // Mulai dari transparan
    },
    show: {
      y: 0,      // Berhenti di posisi normal
      opacity: 1, // Menjadi tidak transparan
      transition: {
        duration: 0.8, // Durasi animasi
        delay: delay,  // Delay animasi
        ease: "easeOut", // Jenis easing
      },
    },
  });

const Banner = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
     {/* image section */}
<div className="relative">
  <motion.img whileInView={{
  opacity: 1,
  x: 0,
  y: 0,
}}
whileHover={{
  scale: 1.2,
  rotate: 15,
  x: 50,
  y: -50,
}}
transition={{
  duration: 0.8,
  delay: 0.5,
  scale: {duration:0.5},
}}
    src={BannerPng}
    alt=""
    className="relative z-10 w-full lg:max-w-[350px] img-shadow"
  />
 <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.5 }}
  className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px] md:h-[400px] md:w-[400px] bg-lightYellow rounded-full"
></motion.div>
</div>
          {/* text content section */}
          <div className="space-y-5 lg:max-w-[400px]">
          <motion.h1
           variants={SlideUp(1)}
  initial="hidden"
  whileInView="show"
  className="text-6xl uppercase font-semibold font-league">
    The Best yummy food in the town
  </motion.h1>
  <motion.p
  variants={SlideUp(1.3)}
  initial="hidden"
  whileInView="show"
>
  Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Vero ea
  enim porro!
</motion.p>
<motion.button
 variants={SlideUp(1.6)}
  initial="hidden"
  whileInView="show"
  className="btn-primary"
>
  Order Now
</motion.button>
</div>
        </div>
      </div>
    </section>
  );
};

export default Banner;