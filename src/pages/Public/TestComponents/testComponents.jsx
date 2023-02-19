import React from "react";
import GameCard from "../../../components/GameCard/gameCard";
import Toast from "../../../components/toast/toast";

const TestComponents = () => {
  const [showToast, setShowToast] = React.useState(false);

  return (
    <>
      <h1>This is test components page.</h1>
      <div className="border p-3 m-3 rounded rounded-5">
        <h3>Toasts</h3>
        <button
          className="btn btn-success mb-3"
          onClick={(e) => {
            e.preventDefault();
            setShowToast(!showToast);
          }}
        >
          {showToast ? "Hide" : "Show"} All Toasts
        </button>
        <div className="d-flex justify-content-between">
          <Toast
            className={"primary"}
            show={showToast}
            message="Primary Toast"
          />
          <Toast className={"danger"} show={showToast} message="Danger Toast" />
          <Toast
            className={"success"}
            show={showToast}
            message="Success Toast"
          />
        </div>
      </div>
      <div className="border p-3 m-3 rounded rounded-5">
        <h3>Prodcut Card</h3>
        <GameCard />
      </div>
    </>
  );
};

export default TestComponents;
