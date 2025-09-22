// Modules
import React, { ReactNode, useEffect, useState } from "react";
import style from "./Ripple.module.scss";
// import { IRipple } from "../../models/components/Ripple.interface";
// import AnimateOnScreen from "../AnimateOnScreen/AnimateOnScreen";

export interface IRipple {
  children: ReactNode;
  className?: string;
  duration?: number;
  color?: string;
  opacity?: number;
  size?: number;
  centerOnly?: boolean;
  fullWidth?: boolean;
}

const Ripple = React.forwardRef<HTMLDivElement, IRipple>(
  (
    {
      children,
      className = "",
      duration = 0.5,
      color = "#00000",
      opacity = 0.3,
      size = 3,
      centerOnly = true,
      fullWidth,
    },
    ref
  ) => {
    // Variables
    const widthClass = fullWidth ? style.fullWidth : style.fit;

    // States
    const [show, setShow] = useState(false);
    const [holding, setHolding] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Functions
    const onClickHandler = (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setPosition((prev) => ({ ...prev, x: x, y: y }));
      setShow(true);
      setHolding(true);
      setAnimating(true);
    };

    const onClickEndHandler = () => {
      setHolding(false);
    };

    const onAnimationComplete = () => {
      setAnimating(false);
    };

    useEffect(() => {
      if (!animating && !holding) {
        setShow(false);
      }
    }, [animating, holding]);

    return (
      <div
        className={`${style.main} ${widthClass} ${className}`}
        onPointerDown={(event) => onClickHandler(event)}
        onPointerUp={onClickEndHandler}
        onPointerOut={onClickEndHandler}
        ref={ref}
      >
        {children}
        <span
          className={style.ripple}
          style={{
            top: centerOnly ? "50%" : position.y,
            left: centerOnly ? "50%" : position.x,
            opacity: opacity,
            backgroundColor: color,
            transition: show ? `${duration}s ease` : "none",
            transform: `translate(-50%, -50%) scale(${show ? size : 0})`,
            border: "none",
          }}
          onTransitionEnd={onAnimationComplete}
        ></span>
      </div>
    );
  }
);

Ripple.displayName = "Ripple";

export default Ripple;
