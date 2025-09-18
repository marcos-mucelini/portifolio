import "./Sobre.css";

export default function SobreMim() {
  return (
    <>
      <section id="principal" className="sobre-mim-sessao">
        <div className="sobre-mim-conteudo">
          <p className="sobre-mim-texto-principal">Sobre mim</p>
          <p className="sobre-mim-texto-explicacao">
            Olá, meu nome é Marcos, atualmente sou professor e este é um projeto
            que pretendo desenvolver com os alunos do ensino médio. Nele vamos
            desenvolver em conjunto um portfólio.
          </p>

          <p className="sobre-mim-texto-ferramentas">
            Aqui estão as ferramentas que vamos utilizar neste projeto:
          </p>

          <div className="sobre-mim-container-listas">
            <div className="sobre-mim-conteudo-listas">
              <p className="sobre-mim-cabecalho-lista">Design//</p>
              <ul className="sobre-mim-lista">
                <li className="sobre-mim-item-lista">Figma</li>
              </ul>
            </div>
            <div className="sobre-mim-conteudo-listas">
              <p className="sobre-mim-cabecalho-lista">Ferramentas//</p>
              <ul className="sobre-mim-lista">
                <li className="sobre-mim-item-lista">React</li>
                <li className="sobre-mim-item-lista">HTML+CSS</li>
                <li className="sobre-mim-item-lista">Javascript</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sobre-mim-imagem">
          <img
            src="https://i.pinimg.com/736x/0a/39/ff/0a39ff7975a3acec4f99dae45fdda19b.jpg"
            width={333}
            height={401}
          />
        </div>
      </section>
    </>
  );
}
