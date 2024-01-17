import React from "react";
import Skeleton from "@mui/material/Skeleton";
const CustomSkeleton = () => {
  return (
    <div className="skelton-body">
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <div>
        <Skeleton
          animation="wave"
          height={10}
          width="80%"
          className="top-marker"
          style={{ marginBottom: 6 }}
        />
        <Skeleton animation="wave" height={10} width="40%"
         className="bottom-marker"
         />
      </div>
    </div>
  );
};

export default CustomSkeleton;
