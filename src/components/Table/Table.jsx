import React from "react";
import TableCell from "./TableCell/table-cell";
import TableHead from "./TableHead/table-head";

const Table = ({ tableHead, tableData }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped">
          <TableHead columns={tableHead} />
          <tbody>
            {tableData?.map((data, key) => {
              return <TableCell cellData={data} key={key} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
