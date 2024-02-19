import  { useState } from 'react';

const ToggleSwitch = (props) => {
  const [toggled, setToggled] = useState(false);

  return (
    <label className="relative inline-block w-14 h-6 cursor-pointer ">
      <input
        type="checkbox"
        className="hidden"
        onClick={() => {
          setToggled((checked) => !checked);
          // eslint-disable-next-line react/prop-types
          props.onClick();
        }}
      />
      <div className="absolute top-0 left-0 w-14 h-6 rounded-full bg-[#77b1c7] transition duration-300 ease-in-out">
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition duration-300 ease-in-out ${
            toggled ? 'transform translate-x-7' : ''
          }`}
        ></div>
      </div>
      <span className={`absolute ml-2 text-[1rem] font-semibold ${toggled ? 'text-white' : 'text-white ml-9'}`}>
        {toggled ? 'C' : 'F'}
      </span>
    </label>
  );
};

export default ToggleSwitch;
