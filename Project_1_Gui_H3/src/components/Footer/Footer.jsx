import "./Footer.css";

const Footer = ({ age }) => {
  return (
    <footer className="site-footer">
      <p>Alder: {age}</p>
    </footer>
  );
};

export default Footer;
