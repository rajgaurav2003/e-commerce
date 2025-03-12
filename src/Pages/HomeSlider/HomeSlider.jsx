import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

const images = [
  { src: "https://thumbs.dreamstime.com/b/kids-shopping-smiling-little-girl-bags-gifts-happy-child-holds-lot-sale-holidays-concept-105009088.jpg", alt: "Kids Fashion" },
  { src: "https://img.freepik.com/premium-vector/fashion-sale-social-media-template_536268-148.jpg?w=2000", alt: "Shopping Clothes" },
  { src: "https://thumbs.dreamstime.com/b/kids-shopping-smiling-little-girl-bags-gifts-happy-child-holds-lot-sale-holidays-concept-105009088.jpg", alt: "Kids Fashion" },
  { src: "https://img.freepik.com/premium-vector/fashion-sale-social-media-template_536268-148.jpg?w=2000", alt: "Shopping Clothes" },

];

export default function ImageSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative p-2">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        className="rounded-lg shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img.src} alt={img.alt} className="w-full h-[400px] object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>

     
      <button ref={prevRef} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10">
        <FaChevronLeft className="text-gray-600" />
      </button>
      <button ref={nextRef} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md z-10">
        <FaChevronRight className="text-gray-600" />
      </button>
    </div>
  );
}
