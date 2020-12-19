import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modal/modalReducer";
import { decrement, increment } from "./testReducer";

export default function Sandbox() {
  const dispatch = useDispatch();
  const [target, setTarget] = useState(null);
  const data = useSelector((state) => state.test.data);
  const {loading} = useSelector((state) => state.async);

  return (
    <>
      <h1>Testing </h1>
      <h1>The data is {data}</h1>
      <Button
        name='increment'
        loading={loading && target === 'increment' }
        color="green"
        onClick={(e) =>{
          dispatch(increment(20))
          setTarget(e.target.name)
        }} 
        content="Increment"
      />
      <Button
        name='decrement'
        loading={loading && target === 'decrement'}
        color="red"
        onClick={(e) => {
          dispatch(decrement(10))
          setTarget(e.target.name)
         }
        }
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
