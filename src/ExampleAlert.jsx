import React from "react";
import Main from "./Main";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";

const ExampleAlert = () => {
  return (
    <AlertProvider>
      <div className={"container pt-3"}>
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  );
};

export default ExampleAlert;
