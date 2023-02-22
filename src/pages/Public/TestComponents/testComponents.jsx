import React from "react";
import GameCard from "../../../components/GameCard/gameCard";
import Table from "../../../components/Table/Table";
import Form from "../../../components/Form/form";

const TestComponents = () => {
  const data = [
    { label: "name", type: "text" },
    { label: "email", type: "email" },
    { label: "password", type: "password" },
    { label: "confirmpassword", type: "text" },
  ];
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
        <div className="row g-3">
          <GameCard />
          <GameCard />
        </div>
      </div>
      <div className="border p-3 m-3 rounded rounded-5">
        <h3>Test-Table</h3>
        <div className="row g-3">
          <Table
            tableHead={["Name", "Email"]}
            tableData={[
              { name: "Kamal", email: "kamal@gmail.com" },
              { name: "Sharma", email: "sharma@gmail.com" },
            ]}
          />
        </div>
      </div>
      <div className="border p-3 m-3 rounded rounded-5">
        <h3>Form Dynamic</h3>
        <Form data={data} buttonLabel={"Submit"} />
      </div>
    </>
  );
};

export default TestComponents;
