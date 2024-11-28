import React from "react";
import { Slide } from "react-awesome-reveal";

const VisibilitySlide = ({
    duration,
    triggerOnce,
    direction,
    onVisibilityChange,
    children,
    ...rest
}) => {
    return (
        <Slide
            duration={duration}
            triggerOnce={triggerOnce}
            direction={direction}
            onVisibilityChange={onVisibilityChange}
            {...rest}
        >
            {children}
        </Slide>
    );
};

export default VisibilitySlide;
