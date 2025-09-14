import React, { useEffect, useState } from "react";
import { BiTrophy } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { GrCatalog } from "react-icons/gr";
import { motion, animate } from "framer-motion";

// essa função copiei do site oficial Frame Motion
function AnimatedNumber({ value, suffix = "", delay = 0, duration = 2 }) {
  const [displayValue, setDisplayValue] = useState(0);

  return (
    <motion.span
      className="font-bold !text-3xl"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay }}

      // callback para iniciar a contagem quando aparecer
      onViewportEnter={() => {
        animate(0, value, {
          duration: duration,
          onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
        });
      }}>
      {displayValue}
      {suffix}
    </motion.span>
  );
}

export const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto h-[500px] md:h-[250px] px-8 sm:px-6 lg:px-8 flex items-center">
        <ul className="list-none w-full h-full text-white flex flex-col md:flex-row justify-evenly md:justify-between md:items-center">
          <li>
            <div className="flex gap-5 items-center">
              <BiTrophy className="text-orange" size={55} />
              <p>
                <AnimatedNumber value={10} suffix="K+" delay={0} /> <br />
                Alunos aprovados
              </p>
            </div>
          </li>
          <li>
            <div className="flex gap-5 items-center">
              <IoIosStats className="text-orange" size={55} />
              <p>
                <AnimatedNumber value={95} suffix="%" delay={0.3} /> <br />
                Taxa de sucesso
              </p>
            </div>
          </li>
          <li>
            <div className="flex gap-5 items-center">
              <GrCatalog className="text-orange" size={55} />
              <p>
                <AnimatedNumber value={15} suffix="+" delay={0.6} /> <br />
                Cursos disponíveis
              </p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};


