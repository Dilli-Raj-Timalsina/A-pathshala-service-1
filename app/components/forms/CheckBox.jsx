import React from 'react';

function Checkbox(props) {
  const { label, name, value, checked, onChange } = props;

  return (
    <label>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2">{label}</span>
    </label>
  );
}

export default Checkbox;
