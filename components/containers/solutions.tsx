"use client";
import { motion } from "framer-motion";

export default function Solutions() {
  const Decor = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <g clip-path="url(#clip0_2144_10)">
          <path
            d="M1.55556 3.11112C2.41467 3.11112 3.11112 2.41467 3.11112 1.55556C3.11112 0.696448 2.41467 0 1.55556 0C0.696448 0 0 0.696448 0 1.55556C0 2.41467 0.696448 3.11112 1.55556 3.11112Z"
            fill="white"
          />
          <path
            d="M1.55556 8.00004C2.41467 8.00004 3.11112 7.30359 3.11112 6.44448C3.11112 5.58536 2.41467 4.88892 1.55556 4.88892C0.696448 4.88892 0 5.58536 0 6.44448C0 7.30359 0.696448 8.00004 1.55556 8.00004Z"
            fill="white"
          />
          <path
            d="M6.44423 3.11112C7.30334 3.11112 7.99979 2.41467 7.99979 1.55556C7.99979 0.696448 7.30334 0 6.44423 0C5.58512 0 4.88867 0.696448 4.88867 1.55556C4.88867 2.41467 5.58512 3.11112 6.44423 3.11112Z"
            fill="white"
          />
          <path
            d="M6.44423 8.00004C7.30334 8.00004 7.99979 7.30359 7.99979 6.44448C7.99979 5.58536 7.30334 4.88892 6.44423 4.88892C5.58512 4.88892 4.88867 5.58536 4.88867 6.44448C4.88867 7.30359 5.58512 8.00004 6.44423 8.00004Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_2144_10">
            <rect width="8" height="8" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  };

  const cardAnimationVariantsLeft = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: [-100, 0],
      transition: {
        duration: 0.8,
        delay: 0.2 * index,
      },
    }),
  };
  const cardAnimationVariantsBottom = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: [100, 0],
      transition: {
        duration: 0.8,
        delay: 0.2 * index,
      },
    }),
  };
  const cardAnimationVariantsRight = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      x: [100, 0],
      transition: {
        duration: 0.8,
        delay: 0.2 * index,
      },
    }),
  };

  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-16">
        <motion.h2
          variants={cardAnimationVariantsBottom}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center lg:w-2/3 bg-highlight text-transparent bg-clip-text"
        >
          The fastest and most secure Layer 2 solution for Bitcoin
        </motion.h2>
        <div className="w-full grid lg:grid-cols-3 gap-8 ">
          {Array.from({ length: 3 }).map((_, index) => (
            <motion.div
              variants={
                index === 0
                  ? cardAnimationVariantsLeft
                  : index === 1
                  ? cardAnimationVariantsBottom
                  : cardAnimationVariantsRight
              }
              initial="initial"
              whileInView="animate"
              custom={index}
              viewport={{ once: true }}
              key={index}
              className="bg-[#050505] backdrop-blur-[77px] rounded-[15px] p-8 relative"
            >
              <div className="absolute top-8 left-8">
                <Decor />
              </div>
              <div className="absolute top-8 right-8">
                <Decor />
              </div>
              <div className="absolute bottom-8 right-8">
                <Decor />
              </div>
              <div className="mt-20 py-2 pr-6 space-y-2">
                <h3>Interoperability</h3>
                <p className="text-lg">Simple interoperable Bridging system</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
