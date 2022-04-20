import { motion } from 'framer-motion';
import React from 'react';

import clsxm from '@/lib/clsxm';

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const AnimatedCharacters = ({
  text,
  className,
}: { text: string } & React.ComponentPropsWithoutRef<'div'>) => {
  const item = {
    hidden: {
      y: '200%',
      color: '#333333',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: '#333333',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };
  const words = text.split(' ').map((word) => [...word.split(''), '\u00A0']);
  return (
    <motion.div initial='hidden' whileInView='visible' variants={container}>
      <div className={clsxm('flex flex-wrap justify-start', className)}>
        {words.map((_, index) => {
          return (
            <p
              key={index}
              className='w-max font-medium leading-tight drop-shadow-md'
            >
              {words[index].map((element, index) => {
                return (
                  <span
                    style={{
                      overflow: 'hidden',
                      display: 'inline-block',
                    }}
                    key={index}
                  >
                    <motion.span
                      style={{ display: 'inline-block' }}
                      variants={item}
                    >
                      {element}
                    </motion.span>
                  </span>
                );
              })}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AnimatedCharacters;
