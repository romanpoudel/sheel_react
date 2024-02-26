import { useState } from 'react';
import { motion } from 'framer-motion';
import { ImagesSlider } from '../../ui/imageslider';

export function Carousel() {
  const images = [
    'https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const [expanded, setExpanded] = useState(false);

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          We Provide <span className="inline-block bg-gradient-to-tr from-indigo-500 via-purple-500 to-green-500 font-bold  text-transparent bg-clip-text drop-shadow-lg">Best Service</span> 
        </motion.p>
        <div
          className={`text-sm text-justify px-8 py-10 line-clamp-${expanded ? 'none' : '4'} text-white overflow-y-auto max-h-[30rem]`}
          style={{ maxHeight: expanded ? '30rem' : 'auto' }}
        >
          <div className={`text-lg text-justify px-8  line-clamp-${expanded ? 'none' : '4'} text-white`}>
            <p >
              At <span className="inline-block bg-gradient-to-tr from-indigo-500 via-purple-500 to-green-500 font-bold  text-transparent bg-clip-text drop-shadow-lg">Sheel Waterproofing</span>, our dedication extends beyond merely providing exceptional waterproofing services; it encompasses a commitment to unparalleled   expertise and quality. Recognizing the imminent threat posed by water damage to properties, we prioritize tailored solutions to mitigate its effects. With a specialized team proficient in basement waterproofing, foundation repair, and exterior waterproofing, we assure enduring solutions regardless of project scale or complexity. Our ethos <span className="inline-block bg-gradient-to-tr from-indigo-500 via-purple-500 to-green-500 font-bold  text-transparent bg-clip-text drop-shadow-lg">revolves around a client-centric approach</span>, where understanding your unique requirements forms the cornerstone of our service. Embracing cutting-edge materials and industry innovations, we instill confidence in the longevity and efficacy of our solutions, ensuring your investment is safeguarded against water damage. Opting for Sheel Waterproofing signifies choosing a partner committed to surpassing expectations, <span className="inline-block bg-gradient-to-tr from-indigo-500 via-purple-500 to-green-500 font-bold  text-transparent bg-clip-text drop-shadow-lg">delivering exceptional outcomes</span>, and fortifying your property against the perils of water damage.


            </p>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 "
        >
          <span>{expanded ? 'See Less' : 'See More'}</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent mb-30" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
