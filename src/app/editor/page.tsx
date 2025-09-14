"use client";
import React, { useEffect, useState } from "react";
import Workbench from "../components/workbench/Workbench";

const Editor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isLBMDown, setIsLBMDown] = useState(false);

  useEffect(() => {
  document.addEventListener("mousedown", (e) => {
    setIsLBMDown(true)
  });
  document.addEventListener("mouseup", (e) => {
    setIsLBMDown(false)
  });
  document.addEventListener("mousemove", (e) => {
    setCursorX(e.clientY)
    setCursorY(e.clientX)
    //console.log(`Координаты: X=${e.clientX}, Y=${e.clientY}`);
  });
  })

  return (
    <>
      <div>Editor</div>
      <div className="rect" style={{top: `${isLBMDown ? cursorX : "0"}px`, left: `${isLBMDown ? cursorY : "0"}px`}}>
        я квадрат
      </div>
      <Workbench />
    </>
  );
};

export default Editor;
