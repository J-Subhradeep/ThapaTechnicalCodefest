import React from "react";
import wordpress from "./Static/Images/wordpress.png";
import cyberpanel2 from "./Static/Images/cyberpanel2.png";
import cloud from "./Static/Images/cloud.png";
import { FillWithImageWrapper } from "./Styles/FillWithImages.styled";
import { motion } from "framer-motion";
export const FillWithImages = () => {
  return (
    <>
      <motion.div
        initial={{  opacity: 0 }}
        animate={{  opacity: 1 }}
        transition={{ duration: 1.3, delay: 1.5 }}
      >
        <FillWithImageWrapper>
          <motion.div
            className="right-round"
            style={{ y: 4 }}
            // initial={{scale:}}
            animate={{ y: 0 }}
            transition={{
              delay: 1.2,
              duration: 4,
              type: "keyframes",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          ></motion.div>
          <motion.div
            className="right-round2"
            style={{ y: 4 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.2,
              duration: 6,
              type: "keyframes",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          ></motion.div>
          <motion.img
            src={wordpress}
            alt=""
            className="right-round3"
            style={{ y: 5 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.2,
              duration: 4,
              type: "keyframes",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.img
            src={cyberpanel2}
            alt=""
            className="right-round4"
            style={{ y: 5 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.2,
              duration: 2,
              type: "keyframes",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.img
            src={cloud}
            alt=""
            className="right-round5"
            style={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1.2,
              duration: 3.5,
              type: "keyframes",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        </FillWithImageWrapper>
      </motion.div>
    </>
  );
};
