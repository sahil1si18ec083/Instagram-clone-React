import React from "react";
import TextField from "@material-ui/core/TextField";
const TextFieldWithButton = ({ value, placeholder, setValue, buttonLabel }) => {
  const Button = () => (
    <button className={`btn-${buttonLabel}`}>{buttonLabel}</button>
  );
  return (
    <TextField
      id={buttonLabel}
      className={buttonLabel}
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        setValue(event?.target?.value);
      }}
      InputProps={{ endAdornment: <Button /> }}
    />
  );
};

export default TextFieldWithButton;
