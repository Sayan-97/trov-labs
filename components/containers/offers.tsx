"use client";

import OfferImg1 from "@/public/svgs/document.svg";
import OfferImg2 from "@/public/svgs/bridges.svg";
import OfferImg3 from "@/public/svgs/cross-chain.svg";
import OfferImg4 from "@/public/svgs/design.svg";
import OfferImg5 from "@/public/svgs/hyperspeed.svg";

import GradTop from "@/public/imgs/offer-grad-top.png";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

export default function Offers() {
    const scroll = useScroll()
  const offers = [
    {
      image: OfferImg1,
      title: "Smart Contract Evolution",
      des: "Deploy and execute modified EVM-compatible smart contracts for DeFi, NFTs, and other innovative applications, expanding Bitcoin's functionality beyond simple value transfers.",
    },
    {
      image: OfferImg2,
      title: "Decentralized Governance",
      des: "Empower the community through a DAO structure to govern upgrades, fees, and the future direction of Trove Chain, ensuring transparency and democraticdecision-making",
    },
    {
      image: OfferImg3,
      title: "Seamless Cross-Chain Bridges",
      des: "Connect effortlessly with major c like Ethereum, BNB Chain, and others, fostering interoperability and facilitating asset transfer with ease.",
    },
    {
      image: OfferImg4,
      title: "User-Centric Design",
      des: "Enjoy a simple and intuitive interface and wallet, making Trove Chain accessible to both technical and non-technical users, fostering widespread adoption.",
    },
    {
      image: OfferImg5,
      title: "HyperSpeed Transactions",
      des: "Experience tens of thousands of transactions per second (TPS), exceeding current Bitcoin limitations and propelling it into the world of high-volume applications.",
    },
  ];

  const cardAnimationVariants = {
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

  return (
    <section className="container grid grid-cols-12 gap-6 py-16 relative">
      <Image
        src={GradTop}
        alt="img"
        className="absolute right-0 lg:-top-40 lg:w-[80%] object-cover object-center"
      />
      <Image
        src={GradTop}
        alt="img"
        className="absolute w-[100%] right-0 top-52"
      />
      {offers.map((item, index) => (
        <motion.div
          key={index}
          variants={cardAnimationVariants}
          initial="initial"
          whileInView="animate"
          custom={index}
          viewport={{ once: true}}
          className={`${
            index === 0 || index === 1
              ? "col-span-12 lg:col-span-6"
              : "col-span-12 lg:col-span-4"
          }`}
        >
          <div
            key={index}
            className="w-full h-auto p-8 rounded-[15px] border-2 border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.02)] backdrop-blur-[50px] flex flex-col items-start space-y-6"
            style={{ boxShadow: "0px 4px 9px 0px rgba(0, 0, 0, 0.25)" }}
          >
            <div
              className="rounded-full bg-black p-3"
              style={{
                boxShadow: "0px 0px 14px 0px rgba(3, 213, 248, 0.60)",
              }}
            >
              <Image src={item.image} alt="img" />
            </div>
            <h4 className="text-lg font-medium">{item.title}</h4>
            <p className=" text-muted">{item.des}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
