export const Experience = () => {
  return (
    <>
      <section className="py-12 text-center">
        <h2 className="text-3xl md:text-4xl text-quaternary-color">Sobre mí</h2>
        <p className="mt-8 paragraph-custom">
          Soy desarrollador de software desde hace 3 años, a lo largo de este
          tiempo he tenido la experiencia de trabajar en proyectos en equipo con
          una comunicación efectiva, me gusta brindar soluciones a los problemas
          a través de la tecnología. Soy una persona responsable, me gusta estar
          en constante aprendizaje y poder apoyar a mis compañeros con lo que
          pueda aportar con mi corta experiencia.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl md:text-4xl text-quaternary-color text-center">
          Experiencia
        </h2>
        <div className="md:w-4/5 mx-auto">
          <article className="relative my-10 grid grid-cols-[30px_1fr] gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-tertiary-color p-1"></div>
              <div className="h-full w-0 border border-tertiary-color"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-quaternary-color">
                Desarrollador full stack
              </h2>
              <span className="text-sm text-tertiary-color">Dic-2020 / Actual</span>
              <span className="realtive right-0 text-quaternary-color md:absolute">
                Nuvem
              </span>
              <p className="text-quaternary-color text-md max-w-[80ch]">
                Desarrollé junto con un equipo de programadores un sistema de
                gestión de productos y ventas para una tienda online, realicé
                diferentes CRUDS y apis para el funcionamiento de la misma,
                también participé en la elaboración de la tienda online
                específicamente en listado de productos y checkout de carrito de
                compras. Las herramientas utilizadas fueron: vuejs, vuetify,
                laravel, mysql y conekta como pasarela de pago.
              </p>
              <p className="text-quaternary-color text-md max-w-[80ch]">
                Además también participé en la elaboración de un sistema de
                administración de una veterinaria y un sistema para gestión
                legal de empresas utilizando: vuejs, vuetify, laravel y mysql.
              </p>
            </div>
          </article>

          <article className="relative my-10 grid grid-cols-[30px_1fr] gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-tertiary-color p-1"></div>
              <div className="h-full w-0 border border-tertiary-color"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-quaternary-color">
                Desarrollador full stack
              </h2>
              <span className="text-sm text-tertiary-color">Sep-2020 / Dic2020</span>
              <span className="realtive right-0 text-quaternary-color md:absolute">
                Ikki Antra
              </span>
              <p className="text-quaternary-color text-md max-w-[80ch]">
                Participé en un equipo de programadores en el desarrollo de
                módulos de una red social tipo facebook utilizando ionic con
                angular para el frontend, laravel para el backend y mysql para
                la gestión de base de datos.
              </p>
              <p className="text-quaternary-color text-md max-w-[80ch]">
                Los módulos en los que trabajé fueron en la creación de
                publicaciones de tipo texto, imagen, foto y video, además del
                sistema de likes y comentarios.
              </p>
            </div>
          </article>

          <article className="relative my-10 grid grid-cols-[30px_1fr] gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="rounded-full bg-tertiary-color p-1"></div>
              <div className="h-full w-0 border border-tertiary-color"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold text-quaternary-color">Soporte</h2>
              <span className="text-sm text-tertiary-color">Ago-2018 / Sep-2020</span>
              <span className="realtive right-0 text-quaternary-color md:absolute">
                Atel
              </span>
              <p className="text-quaternary-color text-md max-w-[80ch]">
                Brindaba soluciones a errores de hardware y software en una
                empresa de atención telefónica por medio de sistema de tickets,
                además de llevar la administración de algunos servidores
                (windows server) y bases de datos (sql server).
              </p>
              <p className="text-quaternary-color text-md max-w-[80ch]">
                También logré realizar varios programas en python para
                automatizar tareas en excel y gestión de redes.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
export default Experience;
