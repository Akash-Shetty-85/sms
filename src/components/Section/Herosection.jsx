import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
const backgroundImages = [
  "https://media.istockphoto.com/id/1332985409/photo/doctor-and-nurse-medical-team-are-performing-surgical-operation-at-emergency-room-in-hospital.jpg?s=612x612&w=0&k=20&c=P3xsG4PsfEQMqYQN8OwEymuMM6IE0-Us7bJvQQ-HTr4=",
  "https://plus.unsplash.com/premium_photo-1723489231878-3e3170c26999?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661627109539-69d7096ea354?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1cmdlcnl8ZW58MHx8MHx8fDA%3D",
];
const Herosection = () => {
  return (
    <div className="relative h-80 md:h-[80svh] max-w-full overflow-x-hidden">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        loop
        className="absolute inset-0 h-50 md:h-full w-full z-10"
      >
        {backgroundImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="h-full w-full bg-contain bg-no-repeat bg-center md:bg-cover md:bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-black/50 z-1"></div>
      <div className="absolute top-50 left-45 -translate-x-1/2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 z-10 max-w-xs md:min-w-2xl">
        <h1 className="text-white text-2xl font-bold md:text-5xl w-2xs md:w-full line-clamp-4">
          Bridging the Gap in Advanced Medical HealthCare
        </h1>
      </div>
    </div>
  );
};

export default Herosection;
