import React from "react";

export default function RadioFormField(props) {
  return (
    <>
      <div className="d-flex gap-2 mt-2">
        {props.values.map((item, index) => {
          return (
            <div key={index}>
              <div className="form-check" >
                <input
                  type="radio"
                  name={props.name}
                  onChange={props.updateFormField}
                  checked={item === props.fieldValue}
                  value={item}
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor={props.name}>
                  {item}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
