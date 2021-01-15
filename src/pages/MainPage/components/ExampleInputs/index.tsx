import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "components";
import {
  selectExampleValue,
  incrementValue,
  decrementValue,
} from "features/example";

import * as Styles from "./styles";

const ExampleInputs = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectExampleValue);

  const handleIncrementValue = () => {
    dispatch(incrementValue());
  };

  const handleDecrementValue = () => {
    dispatch(decrementValue());
  };

  return (
    <div>
      <p>Redux state handle with Material buttons</p>
      <Styles.ReduxInputsContainer>
        <Button
          variant="contained"
          color="primary"
          customVariant="short"
          handleClick={handleIncrementValue}
        >
          +
        </Button>
        <Styles.Input value={value} />
        <Button
          variant="contained"
          color="primary"
          customVariant="short"
          handleClick={handleDecrementValue}
        >
          -
        </Button>
      </Styles.ReduxInputsContainer>
    </div>
  );
};

export default ExampleInputs;
