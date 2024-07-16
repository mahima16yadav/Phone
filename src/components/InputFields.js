import { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import "./InputFields.css";

const InputFields = ({
  className = "",
  selectState,
  maharashtra,
  propPadding,
}) => {
  const inputFieldsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`input-fields ${className}`} style={inputFieldsStyle}>
      <div className="select-state">{selectState}</div>
      <Form.Select className="select-formselect" />
    </div>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
  selectState: PropTypes.string,
  maharashtra: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default InputFields;
