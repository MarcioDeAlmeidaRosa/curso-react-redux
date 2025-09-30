import React, { cloneElement } from "react";

export default (props) => {
  return (
    <>
      {/* <Membrer name="Marcio" surname={props.surname} />
      <Membrer name="Elaine" {...props} />
      <Membrer name="Helena" surname={props.surname} /> */}
      {/* {props.children} */}
      {/* {cloneElement(props.children, { ...props })} */}

      {/* {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })} */}

      {props.children.map((child, index) => {
        return cloneElement(child, { ...props, key: index });
      })}
    </>
  );
};
