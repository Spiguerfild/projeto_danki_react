import "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <h2>Nome empresa</h2>

      <div className="header_logo">
        <img src="https://static.dicionariodesimbolos.com.br/upload/34/17/pena-1_xl.jpeg" width={70} />
      </div>
    
    </div>
  );
}

export default Header;
