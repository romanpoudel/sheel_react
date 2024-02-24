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
          We Provide Best Service
        </motion.p>
        <div
          className={`text-sm text-justify px-20 py-10 line-clamp-${expanded ? 'none' : '2'} text-white overflow-y-auto max-h-[30rem]`}
          style={{ maxHeight: expanded ? '30rem' : 'auto' }}
        >
          <div className={`text-lg text-justify px-20  line-clamp-${expanded ? 'none' : '2'} text-white`}>
            <p >
              At Sheel Waterproofing, we are dedicated to providing exceptional waterproofing services for homes and businesses alike. With our expertise and commitment to quality, we ensure that your property remains protected from water damage and its detrimental effects. Water intrusion can wreak havoc on your property, leading to costly repairs, mold growth, and structural instability. That's why our experienced team of professionals is here to offer comprehensive waterproofing solutions tailored to your specific needs. With years of industry knowledge and state-of-the-art techniques, we specialize in basement waterproofing, foundation repair, and exterior waterproofing. No matter the size or complexity of the project, we have the expertise to deliver outstanding results that stand the test of time.

              <br /><br />

              At Sheel Waterproofing, we are dedicated to providing exceptional waterproofing services for homes and businesses alike. With our expertise and commitment to quality, we ensure that your property remains protected from water damage and its detrimental effects. Water intrusion can wreak havoc on your property, leading to costly repairs, mold growth, and structural instability. That's why our experienced team of professionals is here to offer comprehensive waterproofing solutions tailored to your specific needs. With years of industry knowledge and state-of-the-art techniques, we specialize in basement waterproofing, foundation repair, and exterior waterproofing. No matter the size or complexity of the project, we have the expertise to deliver outstanding results that stand the test of time.
              <br /><br />

              At Sheel Waterproofing, we pride ourselves on our customer-centric approach. We understand that each property is unique, and we take the time to assess your specific requirements before recommending the most effective waterproofing solution. Our dedicated team is always ready to answer your questions, address your concerns, and guide you through every step of the process. We prioritize the use of high-quality materials and the latest industry advancements to ensure optimal performance and durability. Our goal is to provide you with peace of mind, knowing that your property is shielded from water damage, even in the most challenging conditions.

              When you choose Sheel Waterproofing, you are choosing a partner that is committed to your satisfaction. We strive to exceed your expectations, delivering exceptional results within budget and on schedule. Explore our range of services, learn more about our successful projects, and contact us today for a complimentary consultation. Let Sheel Waterproofing be your reliable choice for all your waterproofing needs. Protect your investment with confidence - choose Sheel Waterproofing as your trusted waterproofing solution provider.
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
