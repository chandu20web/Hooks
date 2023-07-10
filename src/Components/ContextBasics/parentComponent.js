import React from "react";
import { ChildComponent } from "./childComponent";

export const ParentComponent = () => {
  return (
    <div>
      <h1>User Context Parent Component</h1>
      <ChildComponent />
    </div>
  );
};
