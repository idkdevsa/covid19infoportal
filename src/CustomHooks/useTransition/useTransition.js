import React, { useState } from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const useTransition = (props, tOrF) => {
  const [transIn, setTransIn] = useState(tOrF);

  return (
    <Transition in={transIn} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {console.log(props.children)}
        </div>
      )}
    </Transition>
  );
};

export default useTransition;
