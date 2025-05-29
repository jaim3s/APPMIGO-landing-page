const Demo = () => {
  return (
    <section className="py-20 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">🎬 ¡Descúbrelo en Acción! 🎬</h2>
        <p className="text-lg mb-12 text-gray-600 dark:text-gray-300">
          Vea nuestro vídeo de demostración para comprobar lo fácil que es empezar a utilizar nuestra aplicación.
        </p>
        <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <iframe
            className="w-full h-[500px]"
            src="https://www.youtube.com/embed/gem7wHbtGko"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
          {/* Puedes eliminar este overlay o activarlo solo en hover si lo necesitas */}
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 pointer-events-none"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Demo;
