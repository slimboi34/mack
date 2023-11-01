import React from "react";
import { useMediaQuery } from "react-responsive";

const ResponsiveComponent = () => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isTabletOrMobile = useMediaQuery({ maxDeviceWidth: 1224 });

  return (
    <div>
      {isDesktopOrLaptop && <p></p>}
      {isTabletOrMobile && <p></p>}
    </div>
  );
};

export default ResponsiveComponent;
