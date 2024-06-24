"use client";
import DayLight from "@/components/DayLight";
import Popup from "@/components/Popup";
import Preloader from "@/components/Preloader";
import { TunisContext } from "@/context/context";
import { tunisUtility } from "@/utility";
import { useContext, useEffect } from "react";
import Cursor from "./Cursor";
import Header from "./Header";

const TunisLayout = ({ children }) => {
  const { direction, popup, dark } = useContext(TunisContext);
  useEffect(() => {
    tunisUtility.customCursor();
  }, []);
  return (
    <div
      className={`home ${dark ? "dark" : ""} bg-${dark ? "black" : "white"
        } text-${dark ? "white" : "black-6"
        } relative w-full h-full overflow-hidden anim--effect-3 animation-${direction}`}
    >
      <Preloader />
      {popup && <Popup />}

      <DayLight />

      <Header />
      {children}
      <Cursor />
    </div>
  );
};
export default TunisLayout;
