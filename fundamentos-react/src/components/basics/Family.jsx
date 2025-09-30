import React from "react";

import Membrer from "./Membrer";

export default (props) => {
  return (
    <>
      <Membrer name="Marcio" surname={props.surname} />
      <Membrer name="Elaine" {...props} />
      <Membrer name="Helena" surname={props.surname} />
    </>
  );
};
