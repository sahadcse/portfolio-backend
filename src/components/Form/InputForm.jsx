// import React from 'react'

const InputForm = ({
  type,
  id,
  name,
  className,
  value,
  onChange,
  placeholder,
  error,
}) => {
  
  
  return (
    <div>
      <input
        type={type}
        id={id}
        name={name}
        className={`${className} p-1 w-full mb-3 border-2 border-sky-300 rounded-md outline-none text-black`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputForm;
