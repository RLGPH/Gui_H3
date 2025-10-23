import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import HomePage from "./pages/HomePage";
import InfoCardPage from "./pages/InfoCardPage";
import CounterPage from "./pages/CounterPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />}/>
          <Route path="/InfoCardPage" element={<InfoCardPage />}/>
          <Route path="/CounterPage" element={<CounterPage />}/>
          <Route path="/AboutPage" element={<AboutPage />}/>
          <Route path="/ContactPage" element={<ContactPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
