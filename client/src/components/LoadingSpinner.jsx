import React from "react";
import { ClipLoader } from "react-spinners";

function LoadingSpinner({ loading }) {
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <ClipLoader
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}

export default LoadingSpinner;
