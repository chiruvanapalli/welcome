import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
