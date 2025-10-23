import "./Header.css";

const Header = ({ name }) => {
  return (
    <header className="site-header">
      <h1>{name}</h1>
    </header>
  );
};

export default Header;
