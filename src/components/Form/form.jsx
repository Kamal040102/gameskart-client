import React from "react";

const Form = ({ data, onClick, buttonLabel }) => {
  const [body, setBody] = React.useState(null);

  let obj = {};

  return (
    <div>
      {data?.map((dat, idx) => {
        return (
          <div className="mb-3" key={idx}>
            <label htmlFor={dat.label} className="form-label">
              {dat.label}
            </label>
            <input
              type={dat.type}
              className="form-control"
              id={dat.label}
              onChange={(e) => {
                obj[dat.value] = e.target.value;
              }}
            />
          </div>
        );
      })}
      <div className="mb-3">
        <button className="btn btn-success" onClick={(e) => onClick(e, obj)}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Form;
