import React from "react";

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns?.map((col, key) => {
          return (
            <th scope="col" key={key}>
              {col}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
