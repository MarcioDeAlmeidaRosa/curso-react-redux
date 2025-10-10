import React from "react";

import Children from "./DirectChildren";

export default (props) => {
  return (
    <div>
      <Children name="Teobaldo" age={10} nerd={true} />
      <Children name="Ronivan" age={15} nerd={false} />
    </div>
  );
};
