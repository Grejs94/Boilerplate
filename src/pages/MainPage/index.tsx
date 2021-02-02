import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchProducts } from "features/products/index";

import { ExampleInputs } from "./components";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <ExampleInputs />
    </div>
  );
};

export default MainPage;
