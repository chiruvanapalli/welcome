import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => (
  <>
    <Header />
    <main>
      <Outlet /> {/* Renders child routes here */}
    </main>
    <Footer />
  </>
);

export default MainLayout;
