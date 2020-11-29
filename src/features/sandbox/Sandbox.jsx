import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modal/modalReducer";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <>
      <h1>Testing </h1>
      <h1>The data is {data}</h1>
      <Button
        color="green"
        onClick={() => dispatch(increment(20))}
        content="Increment"
      />
      <Button
        color="red"
        onClick={() => dispatch(decrement(10))}
        content="Decrement"
      />
      <Button
        color="teal"
        onClick={() =>dispatch(openModal({modalType: 'TestModal', modalProps: {data}}))}
        content="Open Modal"
      />
    </>
  );
}
