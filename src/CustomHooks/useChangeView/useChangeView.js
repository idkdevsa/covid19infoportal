import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Transition, animated } from "react-spring/renderprops";

const useChangeView = (
  viewsArray,
  DropDownButtonVariant,
  DropDownButtonText
) => {
  const [currentView, setCurrentView] = useState(viewsArray[0].id);
  const [activeButton, setActiveButton] = useState(1);

  const transitions = (curV) => {
    return (
      <Transition
        items={activeButton}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(activeButton) =>
          activeButton === currentView
            ? (props) => <div style={props}>{curV}</div>
            : null
        }
      </Transition>
    );
  };

  const renderDropdown = () => {
    const setStateOnClick = (CurrentView, ActiveButton) => {
      setCurrentView(CurrentView);
      setActiveButton(ActiveButton);
    };
    return (
      <DropdownButton
        as={ButtonGroup}
        title={DropDownButtonText}
        variant={DropDownButtonVariant}
      >
        {viewsArray.map((view) => {
          return (
            <Dropdown.Item
              as={Button}
              key={view.id}
              active={activeButton === view.id ? true : false}
              eventKey={view.id}
              onClick={() => setStateOnClick(view.id, view.id)}
            >
              {view.name}{" "}
              <img
                src={view.icon}
                alt={view.name}
                width="20rem"
                height="20rem"
              />
            </Dropdown.Item>
          );
        })}
      </DropdownButton>
    );
  };

  return [{ currentView, animated }, renderDropdown, transitions];
};

useChangeView.propTypes = {
  viewsArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.any,
    })
  ).isRequired,
  DropDownButtonVariant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
    "link",
    "outline-primary",
    "outline-secondary",
    "outline-success",
    "outline-warning",
    "outline-danger",
    "outline-info",
    "outline-light",
    "outline-dark",
  ]),
  DropdownButtonText: PropTypes.string,
};

useChangeView.defaultProps = {
  DropDownButtonVariant: "outline-primary",
  DropDownButtonText: "Change View",
};

export default useChangeView;
