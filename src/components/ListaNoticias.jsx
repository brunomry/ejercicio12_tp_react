import Noticia from "./Noticia";

const ListadoNoticias = () => {
  return (
    <section className="sectionNews mx-auto my-5 rounded-2">
      <h3 className="py-3 text-center">Resultados de categoría</h3>
      <article className="py-5 containerCardsMovies border-top border-2 d-flex gap-3 flex-wrap justify-content-center px-2">
        <Noticia></Noticia>
        <Noticia></Noticia>
      </article>
    </section>
  );
};

export default ListadoNoticias;