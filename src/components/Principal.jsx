import "./Principal.css";

export default function Principal() {
  return (
    <section id="principal" className="principal-sessao">
      <div className="principal-conteudo">
        <p className="principal-bem-vindo">Olá, meu nome é</p>
        <h1 className="principal-nome">Marcos Augusto</h1>
        <p className="principal-apresentacao">
          Sou formado em ciência da computação, atualmente dou aula no Marista
          Escola Social de Cascavel.
        </p>
        <a href="#contact" className="principal-btn">
          Contato
        </a>
      </div>
    </section>
  );
}
