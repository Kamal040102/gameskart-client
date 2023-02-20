import React from "react";
import GameCard from "../../../components/GameCard/gameCard";

const TestComponents = () => {
  return (
    <>
      <h1>This is test components page.</h1>
      {/* <div className="border p-3 m-3 rounded rounded-5">
        <h3>Toasts</h3>
        <button
          className="btn btn-success"
          onClick={(e) => {
            setShowToast(!showToast);
          }}
        >
          Show toasts
        </button>
        {showToast ? (
          <>
            <Toast message={"Toasts are working."} type={"success"} />
            <Toast message={"Toasts are working."} type={"danger"} />
            <Toast message={"Toasts are working."} type={"info"} />
            <Toast message={"Toasts are working."} />
          </>
        ) : null}
      </div> */}
      <div className="border p-3 m-3 rounded rounded-5">
        <h3>Prodcut Card</h3>
        <GameCard />
      </div>
    </>
  );
};

export default TestComponents;
