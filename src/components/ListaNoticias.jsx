import Noticia from "./Noticia";

const ListadoNoticias = ({ noticias}) => {
  return (
    <section className="sectionNews mx-auto my-5 rounded-2">
      <h3 className="py-3 text-center">Resultados</h3>
      <article className="py-5 border-top border-2 d-flex gap-3 flex-wrap justify-content-center px-2">
        {Array.isArray(noticias) && noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <Noticia key={index} noticia={noticia} />
          ))
        ) : (
          <p className="text-center">No se encontraron resultados</p>
        )}
      </article>
    </section>
  );
};

export default ListadoNoticias;
