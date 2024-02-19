import { Form, Row, Col, FormControl, Button } from "react-bootstrap";
import ListadoNoticias from "./ListaNoticias";
import { useEffect, useState } from "react";

const FormularioNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [pais, setPais] = useState("ar");
  const [categoria, setCategoria] = useState("Other");

  useEffect(() => {
    consultarAPI();
  }, [categoria, pais]);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_380933fac24736a597bbac00596b075fffe11&country=${pais}&category=${categoria}`
      );
      const datos = await respuesta.json();
      setNoticias(datos.results);
    } catch (error) {
      console.error();
    }
  };

  return (
    <>
      <section className="sectionForm mx-auto px-2 rounded-3 bg-white ">
        <Form className="form pt-2 pt-md-5">
          <Form.Group
            as={Row}
            className="mb-2 mb-md-3 d-flex justify-content-md-center gap-2 gap-md-3"
          >
            <Form.Label column sm="5" md="4">
              Selecciona una categoría:
            </Form.Label>
            <Col md="5">
              <Form.Select
                required
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">seleccione</option>
                <option value="Entertainment">Entretenimiento</option>
                <option value="Technology">Tecnología</option>
                <option value="Business">Negocios</option>
                <option value="Politics">Política</option>
                <option value="Sports">Deportes</option>
                <option value="Health">Salud</option>
                <option value="Crime">Crimen</option>
                <option value="Domestic">Doméstico</option>
                <option value="Education">Educación</option>
                <option value="Environment">Medio ambiente</option>
                <option value="Food">Comida</option>
                <option value="Lifestyle">Estilo de vida</option>
                <option value="Science">Ciencia</option>
                <option value="Tourism">Turismo</option>
                <option value="World">Mundo</option>
              </Form.Select>
            </Col>
            <Form.Label column sm="4">
              Selecciona un país:
            </Form.Label>
            <Col md="5">
              <Form.Select
                value={pais}
                onChange={(e) => setPais(e.target.value)}
              >
                <option value="">seleccione</option>
                <option value="af">Afganistán</option>
                <option value="al">Albania</option>
                <option value="dz">Argelia</option>
                <option value="as">Samoa Americana</option>
                <option value="ad">Andorra</option>
                <option value="ao">Angola</option>
                <option value="ai">Anguila</option>
                <option value="aq">Antártida</option>
                <option value="ag">Antigua y Barbuda</option>
                <option value="ar">Argentina</option>
                <option value="am">Armenia</option>
                <option value="aw">Aruba</option>
                <option value="au">Australia</option>
                <option value="at">Austria</option>
                <option value="az">Azerbaiyán</option>
                <option value="bs">Bahamas</option>
                <option value="bh">Baréin</option>
                <option value="bd">Bangladés</option>
                <option value="bb">Barbados</option>
                <option value="by">Bielorrusia</option>
                <option value="be">Bélgica</option>
                <option value="bz">Belice</option>
                <option value="bj">Benín</option>
                <option value="bm">Bermudas</option>
                <option value="bt">Bután</option>
                <option value="bo">Bolivia</option>
                <option value="ba">Bosnia y Herzegovina</option>
                <option value="bw">Botsuana</option>
                <option value="bv">Isla Bouvet</option>
                <option value="br">Brasil</option>
                <option value="io">
                  Territorio Británico del Océano Índico
                </option>
                <option value="bn">Brunéi</option>
                <option value="bg">Bulgaria</option>
                <option value="bf">Burkina Faso</option>
                <option value="bi">Burundi</option>
                <option value="kh">Camboya</option>
                <option value="cm">Camerún</option>
                <option value="ca">Canadá</option>
                <option value="cv">Cabo Verde</option>
                <option value="ky">Islas Caimán</option>
                <option value="cf">República Centroafricana</option>
                <option value="td">Chad</option>
                <option value="cl">Chile</option>
                <option value="cn">China</option>
                <option value="cx">Isla de Navidad</option>
                <option value="cc">Islas Cocos</option>
                <option value="co">Colombia</option>
                <option value="km">Comoras</option>
                <option value="cg">Congo</option>
                <option value="cd">República Democrática del Congo</option>
                <option value="ck">Islas Cook</option>
                <option value="cr">Costa Rica</option>
                <option value="ci">Costa de Marfil</option>
                <option value="hr">Croacia</option>
                <option value="cu">Cuba</option>
                <option value="cy">Chipre</option>
                <option value="cz">República Checa</option>
                <option value="dk">Dinamarca</option>
                <option value="dj">Yibuti</option>
                <option value="dm">Dominica</option>
                <option value="do">República Dominicana</option>
                <option value="ec">Ecuador</option>
                <option value="eg">Egipto</option>
                <option value="sv">El Salvador</option>
                <option value="gq">Guinea Ecuatorial</option>
                <option value="er">Eritrea</option>
                <option value="ee">Estonia</option>
                <option value="et">Etiopía</option>
                <option value="fk">Islas Malvinas</option>
                <option value="fo">Islas Feroe</option>
                <option value="fj">Fiyi</option>
                <option value="fi">Finlandia</option>
                <option value="fr">Francia</option>
                <option value="gf">Guayana Francesa</option>
                <option value="pf">Polinesia Francesa</option>
                <option value="tf">Territorios Australes Franceses</option>
                <option value="ga">Gabón</option>
                <option value="gm">Gambia</option>
                <option value="ge">Georgia</option>
                <option value="de">Alemania</option>
                <option value="gh">Ghana</option>
                <option value="gi">Gibraltar</option>
                <option value="gr">Grecia</option>
                <option value="gl">Groenlandia</option>
                <option value="gd">Granada</option>
                <option value="gp">Guadalupe</option>
                <option value="gu">Guam</option>
                <option value="gt">Guatemala</option>
                <option value="gg">Guernsey</option>
                <option value="gn">Guinea</option>
                <option value="gw">Guinea-Bisáu</option>
                <option value="gy">Guyana</option>
                <option value="ht">Haití</option>
                <option value="hm">Islas Heard y McDonald</option>
                <option value="va">Santa Sede</option>
                <option value="hn">Honduras</option>
                <option value="hk">Hong Kong</option>
                <option value="hu">Hungría</option>
                <option value="is">Islandia</option>
                <option value="in">India</option>
                <option value="id">Indonesia</option>
                <option value="ir">Irán</option>
                <option value="iq">Irak</option>
                <option value="ie">Irlanda</option>
                <option value="im">Isla de Man</option>
                <option value="il">Israel</option>
                <option value="it">Italia</option>
                <option value="jm">Jamaica</option>
                <option value="jp">Japón</option>
                <option value="je">Jersey</option>
                <option value="jo">Jordania</option>
                <option value="kz">Kazajistán</option>
                <option value="ke">Kenia</option>
                <option value="ki">Kiribati</option>
                <option value="kp">Corea del Norte</option>
                <option value="kr">Corea del Sur</option>
                <option value="kw">Kuwait</option>
                <option value="kg">Kirguistán</option>
                <option value="la">Laos</option>
                <option value="lv">Letonia</option>
                <option value="lb">Líbano</option>
                <option value="ls">Lesoto</option>
                <option value="lr">Liberia</option>
                <option value="ly">Libia</option>
                <option value="li">Liechtenstein</option>
                <option value="lt">Lituania</option>
                <option value="lu">Luxemburgo</option>
                <option value="mo">Macao</option>
                <option value="mk">Macedonia del Norte</option>
                <option value="mg">Madagascar</option>
                <option value="mw">Malaui</option>
                <option value="my">Malasia</option>
                <option value="mv">Maldivas</option>
                <option value="ml">Malí</option>
                <option value="mt">Malta</option>
                <option value="mh">Islas Marshall</option>
                <option value="mq">Martinica</option>
                <option value="mr">Mauritania</option>
                <option value="mu">Mauricio</option>
                <option value="yt">Mayotte</option>
                <option value="mx">México</option>
                <option value="fm">Micronesia</option>
                <option value="md">Moldavia</option>
                <option value="mc">Mónaco</option>
                <option value="mn">Mongolia</option>
                <option value="me">Montenegro</option>
                <option value="ms">Montserrat</option>
                <option value="ma">Marruecos</option>
                <option value="mz">Mozambique</option>
                <option value="mm">Myanmar</option>
                <option value="na">Namibia</option>
                <option value="nr">Nauru</option>
                <option value="np">Nepal</option>
                <option value="nl">Países Bajos</option>
                <option value="nc">Nueva Caledonia</option>
                <option value="nz">Nueva Zelanda</option>
                <option value="ni">Nicaragua</option>
                <option value="ne">Níger</option>
                <option value="ng">Nigeria</option>
                <option value="nu">Niue</option>
                <option value="nf">Isla Norfolk</option>
                <option value="mp">Islas Marianas del Norte</option>
                <option value="no">Noruega</option>
                <option value="om">Omán</option>
                <option value="pk">Pakistán</option>
                <option value="pw">Palaos</option>
                <option value="ps">Palestina</option>
                <option value="pa">Panamá</option>
                <option value="pg">Papúa Nueva Guinea</option>
                <option value="py">Paraguay</option>
                <option value="pe">Perú</option>
                <option value="ph">Filipinas</option>
                <option value="pn">Pitcairn</option>
                <option value="pl">Polonia</option>
                <option value="pt">Portugal</option>
                <option value="pr">Puerto Rico</option>
                <option value="qa">Catar</option>
                <option value="re">Reunión</option>
                <option value="ro">Rumania</option>
                <option value="ru">Rusia</option>
                <option value="rw">Ruanda</option>
                <option value="bl">San Bartolomé</option>
                <option value="sh">
                  Santa Elena, Ascensión y Tristán de Acuña
                </option>
                <option value="kn">San Cristóbal y Nieves</option>
                <option value="lc">Santa Lucía</option>
                <option value="mf">San Martín</option>
                <option value="pm">San Pedro y Miquelón</option>
                <option value="vc">San Vicente y las Granadinas</option>
                <option value="ws">Samoa</option>
                <option value="sm">San Marino</option>
                <option value="st">Santo Tomé y Príncipe</option>
                <option value="sa">Arabia Saudita</option>
                <option value="sn">Senegal</option>
                <option value="rs">Serbia</option>
                <option value="sc">Seychelles</option>
                <option value="sl">Sierra Leona</option>
                <option value="sg">Singapur</option>
                <option value="sx">Sint Maarten</option>
                <option value="sk">Eslovaquia</option>
                <option value="si">Eslovenia</option>
                <option value="sb">Islas Salomón</option>
                <option value="so">Somalia</option>
                <option value="za">Sudáfrica</option>
                <option value="gs">
                  Islas Georgias del Sur y Sandwich del Sur
                </option>
                <option value="ss">Sudán del Sur</option>
                <option value="es">España</option>
                <option value="lk">Sri Lanka</option>
                <option value="sd">Sudán</option>
                <option value="sr">Surinam</option>
                <option value="sj">Svalbard y Jan Mayen</option>
                <option value="se">Suecia</option>
                <option value="ch">Suiza</option>
                <option value="sy">Siria</option>
                <option value="tw">Taiwán</option>
                <option value="tj">Tayikistán</option>
                <option value="tz">Tanzania</option>
                <option value="th">Tailandia</option>
                <option value="tl">Timor Oriental</option>
                <option value="tg">Togo</option>
                <option value="tk">Tokelau</option>
                <option value="to">Tonga</option>
                <option value="tt">Trinidad y Tobago</option>
                <option value="tn">Túnez</option>
                <option value="tr">Turquía</option>
                <option value="tm">Turkmenistán</option>
                <option value="tc">Islas Turcas y Caicos</option>
                <option value="tv">Tuvalu</option>
                <option value="ug">Uganda</option>
                <option value="ua">Ucrania</option>
                <option value="ae">Emiratos Árabes Unidos</option>
                <option value="gb">Reino Unido</option>
                <option value="us">Estados Unidos de América</option>
                <option value="uy">Uruguay</option>
                <option value="uz">Uzbekistán</option>
                <option value="vu">Vanuatu</option>
                <option value="ve">Venezuela</option>
                <option value="vn">Vietnam</option>
                <option value="vg">Islas Vírgenes Británicas</option>
                <option value="vi">Islas Vírgenes de los Estados Unidos</option>
                <option value="wf">Wallis y Futuna</option>
                <option value="eh">Sáhara Occidental</option>
                <option value="ye">Yemen</option>
                <option value="zm">Zambia</option>
                <option value="zw">Zimbabue</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </Form>
      </section>
      <ListadoNoticias noticias={noticias}></ListadoNoticias>
    </>
  );
};

export default FormularioNoticias;
