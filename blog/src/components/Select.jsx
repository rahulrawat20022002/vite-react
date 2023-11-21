import React, { useId } from "react";

function Select({ options, label, className, ...props }) {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id} className=""></label>}
      <select className="" ref={ref} id={id} {...props}>
        {options
          ? options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))
          : null}
          
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
