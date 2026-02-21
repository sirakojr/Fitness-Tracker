import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Features = () => {

  const slides = [
    {
      id: 1,
      title: "Track Every Workout Effortlessly",
      description:
        "Log exercises, sets, reps, and weights in seconds. Stay consistent and never lose track of your progress again.",
      image: "/src/assets/images/slide/logWorkout.jpg",
    },
    {
      id: 2,
      title: "See Your Progress in Real Time",
      description:
        "Visualize strength gains, workout history, and performance trends with clean, powerful analytics.",
      image: "/src/assets/images/slide/trackProgress.jpg",
    },
    {
      id: 3,
      title: "Build Discipline. Stay Consistent.",
      description:
        "Turn your workouts into measurable progress and stay motivated with clear goals and tracking insights.",
      image: "/src/assets/images/slide/motivation.jpg",
    },
  ];

  return (
    <div className="text-zinc-900 bg-white dark:bg-zinc-800 dark:text-zinc-100">
      <h1 className="text-center pt-4">Features</h1>
      <div>
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-[70vh] "
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 h-[62vh] md:h-[70vh] p-6 md:p-10">
                <div className="flex justify-center items-center h-full ">
                  <div>
                    <h2 className="text-center font-semibold text-2xl">
                      {slide.title}
                    </h2>
                    <p className="mx-4 md:mx-10">{slide.description}</p>
                  </div>
                </div>
                <img
                  src={slide.image}
                  className="w-full h-full object-cover object-center rounded-lg transition-transform duration-150 hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Features;
