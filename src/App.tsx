import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsById } from "./store/slice/productSlice";
import { AppDispatch } from "./store/store";
import "./assets/styles/main.scss";
import AppRoutes from "./routes/AppRoutes";
import MockData from "./mock-files/MockData";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsById(1));
  }, [dispatch]);

  console.log(MockData);

  return <AppRoutes />;
};

export default App;
