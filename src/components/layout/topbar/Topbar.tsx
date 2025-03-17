import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import HeaderBGDesktop from "@images/bg-header-desktop.svg";
import HeaderBGMobile from "@images/bg-header-mobile.svg";

const Topbar = (): ReactNode => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => window.removeEventListener("resize", handleResize); 
  }, []);

  return (
    <div className="bg-tertiary w-full">
      <Image
        src={isMobile ? HeaderBGMobile : HeaderBGDesktop}
        alt="Header Background"
        width={1440}
        height={200}
        priority
      />
    </div>
  );
};

export default Topbar;
