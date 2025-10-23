import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/InfoCardPage">InfoCard</Link>
        </li>
        <li>
            <Link to="/CounterPage">Counter</Link>
        </li>
        <li>
            <Link to="/AboutPage">About</Link>
        </li>
        <li>
            <Link to="/ContactPage">Contact</Link>
        </li>
        <li>
            <Link to="/ProductsPage">Products</Link>
        </li>
      </ul>
    </nav>
  );
};
