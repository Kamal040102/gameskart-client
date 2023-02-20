import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const Toast = ({ theme, type, message }) => {
//   const config = {
//     position: "top-right",
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: theme ? theme : "light",
//   };

//   return (
//     <>
//       {type === "success"
//         ? toast.success(message, config)
//         : type === "danger"
//         ? toast.error(message, config)
//         : type === "info"
//         ? toast.info(message, config)
//         : toast(message, config)}
//     </>
//   );
// };

// export default Toast;

export const Toast = (type, message, theme) => {
  const config = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme ? theme : "light",
  };
  if (type === "success") {
    return toast.success(message, config);
  } else if (type === "danger") {
    return toast.error(message, config);
  } else if (type === "info") {
    return toast.info(message, config);
  } else {
    return toast(message, config);
  }
};
