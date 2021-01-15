import React from "react";
import { useSelector } from "react-redux";

import { selectExampleValue } from "features/example";

const MainPage: React.FC = () => {
  const value = useSelector(selectExampleValue);

  return (
    <div>
      MainPage
      <div>value or redux example is: {value}</div>
    </div>
  );
};

export default MainPage;
