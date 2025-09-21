import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsById } from "./features/productSlice";
import { RootState, AppDispatch } from "./store/store";
import UseTheme from "./components/UseTheme";

const App = () => {
  const { theme, toggleTheme }: any = UseTheme();
  const dispatch = useDispatch<AppDispatch>();

  const { items, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );

  const styleCard = {
    backgroundColor: "red",
  };

  useEffect(() => {
    dispatch(fetchProductsById(1));
  }, [dispatch]);

  return (
    <div>
      {/* <button onClick={toggleTheme} style={styleCard}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {items && <div>title</div>} */}
      Hello
    </div>
  );
};

export default App;
