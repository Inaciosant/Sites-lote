/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import img1 from '../assets/001.webp'
import img2 from '../assets/002.webp'
import img3 from '../assets/003.webp'
import img4 from '../assets/004.webp'
import img5 from '../assets/005.webp' 
import img6 from '../assets/006.webp'
import img7 from '../assets/007.webp'
import img9 from '../assets/009.webp'
import img10 from '../assets/010.webp'



import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Importe suas imagens
const images = [img1, img2, img3, img4, img5, img6, img7, img9, img10];

export default function ImageGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-pink-50 ">


<motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="mb-12 text-center"
  >
    <h2 className="text-3xl md:text-4xl  font-bold text-[#005A87] mb-4">
      Nossa Galeria de Imagens
    </h2>
    <div className="mx-auto w-24 h-1 bg-pink-500 rounded-full"></div>
  </motion.div>
      {/* Carrossel Principal */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.3 }
        }}
        modules={[Autoplay, Pagination]}
        className="my-4"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative cursor-zoom-in group"
              onClick={() => openLightbox(index)}
            >
              <img
                src={src}
                alt={`Visualização ${index + 1}`}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-xl transform transition-transform group-hover:scale-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl z-50 hover:text-pink-500 transition-colors"
          >
            <FiX />
          </button>

          <div className="w-full max-w-6xl relative">
            <Swiper
              initialSlide={activeIndex}
              navigation={{
                prevEl: '.prev-button',
                nextEl: '.next-button'
              }}
              loop={true}
              modules={[Navigation, Thumbs, FreeMode]}
              className="mb-4"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Visualização em tela cheia ${index + 1}`}
                    className="w-full h-[70vh] object-contain rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Miniaturas */}
            <div className="max-w-4xl mx-auto mt-4">
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="thumbnail-swiper"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={src}
                      alt={`Miniatura ${index + 1}`}
                      className="h-20 object-cover rounded-md cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Botões de Navegação */}
            <button className="prev-button absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-50 hover:text-pink-500">
              <FiChevronLeft />
            </button>
            <button className="next-button absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-50 hover:text-pink-500">
              <FiChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}