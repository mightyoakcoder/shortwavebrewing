import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';

function BulletList({ items }) {
  const half = Math.ceil(items.length / 2);
  const firstCol = items.slice(0, half);
  const secondCol = items.slice(half);

  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-x-4 md:gap-x-8 w-full max-w-[600px]">
        <ul className="list-disc list-inside pl-4 md:pl-20">
          {firstCol.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="text-gray-500"></span> {item}
            </li>
          ))}
        </ul>
        <ul className="list-disc list-inside pl-4 md:pl-15">
          {secondCol.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="text-gray-500"></span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [isClient, setIsClient] = useState(false);

  const skillItems = [
    'JavaScript',
    'TypeScript',
    'NodeJs',
    'ExpressJs',
    'ReactJS',
    'REST APIs',
    'CI/CD',
    'MongoDB Atlas',
    'TailwindCSS',
    'HTML/CSS',
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto px-2 py-8 max-w-screen-lg">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* First Section */}
        <div className={`${styles.glass} w-full`}>
          <div className='title flex flex-col items-center'>
            <h4 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-center'>About Me</h4>
            <div className='space-y-4 px-4 mb-6 md:px-6'>
              <p className='text-lg md:text-xl text-center text-gray-600'>
                Welcome to Shortwave Brewing, a hand-crafted blend of my passions and professional journey.
              </p>
              <p className='text-lg md:text-xl text-center text-gray-600'>
                As a career changer that has been in software engineering for a couple of years now, I'm excited to share my growth and projects here.
              </p>
              <p className='text-lg md:text-xl text-center text-gray-600'>Please bear with me as this is a work in progress!</p>
              <p className='text-lg md:text-xl text-center text-gray-600'>
                This site is inspired by my late father's love for brewing beer and amateur radio. I aim to honor his memory while reflecting my own path. Just as a great beer brings people together and a clear signal connects us, I hope to connect with like-minded individuals through my work.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className={`${styles.glass} w-full`}>
          <div className='title flex flex-col items-center h-full justify-center'>
            <h4 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-center'>Skills</h4>
            <div className='px-4 md:px-20 w-full text-justified mb-4'>
              <BulletList items={skillItems} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
