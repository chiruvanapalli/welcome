import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsById } from "./store/slice/productSlice";
import { AppDispatch } from "./store/store";
import "./assets/styles/main.scss";
import restObj from "./dummy-files/restObject.json";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsById(1));
  }, [dispatch]);

  console.log(restObj);

  return <AppRoutes />;
};

export default App;
