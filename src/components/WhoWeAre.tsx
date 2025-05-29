import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const teamMembers = [
  {
    name: "👑 Jesus Orlando Benavides Medina",
    image: "/images/jesus.jpg",
    role: "CEO",
    description: "Lidera la visión, estrategia y dirección general del proyecto.",
  },
  {
    name: "📢 Jose Esteban Cortes Pinzon",
    image: "/images/jose.jpg",
    role: "CCO",
    description: "Gestiona la comunicación interna y externa de la app.",
  },
  {
    name: "💻 Juan David Jaimes Claros",
    image: "/images/juan david.jpg",
    role: "CTO",
    description: "Supervisa el desarrollo y mantenimiento tecnológico.",
  },
  {
    name: "💰 Maria Jose Leal Sabogal",
    image: "/images/maria jose.png",
    role: "CFO",
    description: "Administra las finanzas y planes económicos del proyecto.",
  },
  {
    name: "⚙️ Sergio Andres Patarroyo Torres",
    image: "/images/sergio.png",
    role: "COO",
    description: "Coordina las operaciones diarias y procesos clave.",
  },
  {
    name: "🎯 Juan Sebastian Sutachan Correa",
    image: "/images/sebastian.png",
    role: "CMO",
    description: "Diseña e implementa las estrategias de marketing y marca.",
  },
];

const WhoWeAre = () => (
  <section className="py-20 bg-gray-100 text-center">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12">¿Quiénes Somos?</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="team-carousel"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 hover:shadow-2xl cursor-pointer flex items-center gap-6 mx-auto max-w-2xl my-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full"
              />
              <div className="text-left">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-lg text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default WhoWeAre;
