import "./Menu.css";

export default function Menu() {
  return (
    <header className="header">
      <div className="logo">{"🌙"}</div>
      <nav className="nav-links">
        <a href="#principal">Principal</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
        <a href="#resumo" className="btn-resumo">
          Resumo
        </a>
      </nav>
    </header>
  );
}
