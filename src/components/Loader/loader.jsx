import React from "react";
import Loading from "react-fullscreen-loading";

const Loader = ({ loading }) => {
  return <Loading loading={loading} loaderColor="#3498db" />;
};

export default Loader;
