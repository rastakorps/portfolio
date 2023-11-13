import photo from '../assets/image2.jpg'

const TopPortfolio = () => {
  return (
    <section className="pt-10 pb-16 m-auto md:flex md:justify-between md:w-4/5 items-center gap-8">
      <figure className="md:order-1">
        <img
          src={photo}
          alt="foto"
          className="w-[90%] aspect-square object-cover rounded-full
                    max-w-sm mx-auto"
        />
      </figure>

      <article
        className="text-center mt-8 md:mt-0 md:w-1/2
                md:text-left"
      >
        <h1 className="text-3xl md:text-5xl">Hola, Soy José Cruz.</h1>
        <p className="text-tertiary-color text-xl mt-3 mb-6">
          Desarrollador de software.
        </p>

        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))]
                    auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0"
        >
          <a
            href="#"
            className="
                 bg-quaternary-color
               text-secondary-color 
                 font-semibold 
                 flex items-center 
                 justify-center
                 rounded-lg
                 border
                 hover:bg-primary-color 
                 hover:text-quaternary-color
                 hover:border-quaternary-color
                 transition-colors"
          >
            Descargar CV
          </a>
          <a
            href="#"
            className="
                flex items-center 
                justify-center 
              border-white 
                border 
                font-semibold 
                rounded-lg
                hover:bg-quaternary-color 
              hover:text-secondary-color
                hover:border-primary-color
                transition-colors
                            "
          >
            Experiencia
          </a>
        </div>
      </article>
    </section>
  );
};

export default TopPortfolio;
