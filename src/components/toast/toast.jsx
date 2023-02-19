import React from "react";

const Toast = ({ className, message, show }) => {
  return (
    <div
      className={`toast align-items-center border-0 mb-2
        ${
          className === "primary"
            ? "text-bg-primary"
            : className === "success"
            ? "text-bg-success"
            : className === "danger"
            ? "text-bg-danger"
            : null
        }  
        fade
        ${show ? "show" : ""}
    `}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{message}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Toast;
