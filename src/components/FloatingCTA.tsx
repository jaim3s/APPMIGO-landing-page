const FloatingCTA = () => {
  return (
    <a
      href="#get-started"
      className={`
        fixed bottom-6 right-6
        py-3 px-6 rounded-full shadow-lg transition duration-300 z-50
        text-white

        bg-[#007550] hover:bg-[#2a8241]  /* Modo claro */

        dark:bg-[#36a558] dark:hover:bg-[#2a8241]  /* Modo oscuro */
      `}
    >
      🚀
    </a>
  );
};

export default FloatingCTA;
