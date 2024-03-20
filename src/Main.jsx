import { useAlert } from "./alert/AlertContext";

const Main = () => {
  const  {toggle, test } = useAlert();

  return (
    <>
      <h1>This is Main.jsx about Context examples</h1>
      <button onClick={toggle} className={"btn btn-success"}>
        show alert
      </button>
    </>
  );
};

export default Main;
