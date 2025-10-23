import {Outlet} from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
    <main>
        <Navigation/>
        <Header name="Casper Simon Jensen" />
        <Outlet/>
        <Footer age="21" />
    </main>
    </>
  )
}

export default MainLayout
