import React from "react";

const TableCell = ({ cellData }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData(Object.values(cellData));
  }, []);

  return (
    <tr>
      {data?.map((dat, key) => {
        return <td key={key}>{dat}</td>;
      })}
    </tr>
  );
};

export default TableCell;
