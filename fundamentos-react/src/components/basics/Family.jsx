import React, { cloneElement } from "react";

export default (props) => {
  return (
    <>
      {/* <Membrer name="Marcio" surname={props.surname} />
      <Membrer name="Elaine" {...props} />
      <Membrer name="Helena" surname={props.surname} /> */}
      {cloneElement(props.children, { ...props })}
      {/* {props.children} */}
    </>
  );
};
