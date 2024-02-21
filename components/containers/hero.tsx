"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const animationVariants = {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      {/* video */}
      <video
        className="absolute w-full h-screen z-0 object-cover"
        muted
        autoPlay
        loop
      >
        <source src="/videos/waves.mp4" type="video/mp4" />
      </video>
      {/* Filter */}
      {/* <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-[2px]"></div> */}
      {/* content */}
      <motion.div
        variants={animationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative container lg:w-7/12 flex flex-col items-center gap-8 text-center"
      >
        <h1 className="capitalize">
          A Bitcoin Layer 2 Bridging all your assets
        </h1>
        <p className="lg:text-xl lg:px-10">
          Seamlessly bridge Bitcoin, Ethereum, BSC, Solana, and Cardano assets
          to the trove chain.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-6 pt-6">
          <button className="btn-primary">get started</button>
          <button className="btn-secondary">learn more</button>
        </div>
      </motion.div>
    </section>
  );
}
