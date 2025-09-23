"use client";

import React, { useEffect, useState, ReactNode, forwardRef } from "react";
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
    const centerOnly = true;

    const [show, setShow] = useState(false);
    const [holding, setHolding] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      setPosition({ x, y });
      setShow(true);
      setHolding(true);
      setAnimating(true);
    };

    const handlePointerUpOrOut = () => setHolding(false);

    const handleTransitionEnd = () => setAnimating(false);

    useEffect(() => {
      if (!animating && !holding) setShow(false);
    }, [animating, holding]);

    const rippleStyle: React.CSSProperties = {
      top: centerOnly ? "50%" : position.y,
      left: centerOnly ? "50%" : position.x,
      opacity,
      backgroundColor: color,
      transition: show ? `${duration}s ease` : "none",
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
        <span
          className={style.ripple}
          style={rippleStyle}
          onTransitionEnd={handleTransitionEnd}
        />
      </div>
    );
  }
);

Ripple.displayName = "Ripple";

export default Ripple;
