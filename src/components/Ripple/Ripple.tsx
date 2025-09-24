"use client";

import React, { useState, ReactNode, forwardRef } from "react";
import style from "./Ripple.module.scss";

type RippleProps = {
  children: ReactNode;
  className?: string;
};

const Ripple = forwardRef<HTMLDivElement, RippleProps>(
  ({ children, className = "" }, ref) => {
    const duration = 0.5;
    const color = "#000000";
    const opacity = 0.3;
    const size = 3;

    const [show, setShow] = useState(false);

    const handlePointerDown = () => setShow(true);
    const handlePointerUpOrOut = () => setShow(false);

    const rippleStyle: React.CSSProperties = {
      top: "50%",
      left: "50%",
      opacity,
      backgroundColor: color,
      transition: `${duration}s ease`,
      transform: `translate(-50%, -50%) scale(${show ? size : 0})`,
      border: "none",
    };

    return (
      <div
        className={`${style.main} ${style.fit} ${className}`}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUpOrOut}
        onPointerOut={handlePointerUpOrOut}
        ref={ref}
      >
        {children}
        <span className={style.ripple} style={rippleStyle} />
      </div>
    );
  }
);

Ripple.displayName = "Ripple";

export default Ripple;
