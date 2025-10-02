import TextoDestacado from "../components/TextoDestacado";
import TextoPrincipal from "../components/TextoPrincipal";

import "./Sobre.css";

export default function Sobre() {
  return (
    <>
      <section className="light">
        <TextoDestacado texto={"Olá meu nome é"} />
        <TextoPrincipal texto={"Marcos Augusto"} />
        <p>
          Sou formado sou em ciência da computação, atualmente dou aula no
          Marista Escola Social de Cascavel
        </p>
      </section>
    </>
  );
}
