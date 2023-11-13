const Navbar = () => {
  return (
    <nav className="flex h-20 items-center justify-between">
      <a href="./" className="w-1/2 max-w-[200px]">
        <span className="text-3xl md:text-2xl">José cruz</span>
      </a>

      <input type="checkbox" id="menu" className="peer/menu hidden"/>
      <label
        htmlFor="menu"
        className="w-10 h-10 bg-open-menu bg-cover bg-center bg-primary-color
                rounded-lg cursor-pointer peer-checked/menu:bg-close-menu transition-all
                z-40 md:hidden"
      ></label>

      <ul
        className="fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center
                justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full
                transition-[clip-path] duration-500 md:clip-circle-full md:relative
                md:grid-flow-col md:p-0 md:bg-transparent md:px-[2%]"
      >
        <li className="link-portfolio">
          <a href="#">Sobre mí</a>
        </li>

        <li className="link-portfolio">
          <a href="#">Experiencia</a>
        </li>

        <li className="link-portfolio">
          <a href="#">Proyectos</a>
        </li>

        <li className="link-portfolio">
          <a href="#">Contáctame</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
