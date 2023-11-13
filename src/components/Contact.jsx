const Contact = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl md:text-4xl mb-16 text-center">Contacto</h2>

      <form
        action=""
        className="flex flex-wrap justify-between gap-8 px-1 max-w-screen-lg mx-auto"
      >
        <input
          type="text"
          name="name"
          id="name"
          className="border-b px-2
                    py-4 flex-grow basis-60 focus-input"
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          id="email"
          className="border-b px-2
                    py-4 flex-grow basis-60 focus-input"
          placeholder="Email"
        />

        <textarea
          placeholder="Message"
          className="border px-4 py-6
                    min-w-full max-w-full w-full min-h-[100px] max-h-60 focus-input"
        ></textarea>

        <input
          type="submit"
          className="bg-quaternary-color
                     text-secondary-color 
                       font-semibold 
                       py-4 
                       px-14 
                       mx-auto 
                       rounded-lg
                       border
                     hover:bg-primary-color 
                     hover:text-quaternary-color
                     hover:border-quaternary-color
                       transition-colors 
                       cursor-pointer"
          value="Contáctame"
        />
      </form>
    </section>
  );
};
export default Contact;
