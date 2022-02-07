import React from "react";

const Textarea = ({ text, value }) => {
  return (
    <div className="indent-4 select-none text-gray-900 outline-none shadow-md p-5 rounded-md font-semibold bg-white w-full max-w-2xl">
      {text && text.split("").map((char, index) => {
        let color = "";
        if (value.length > index) {
          if (char === value[index]) {
            color = "bg-green-400";
          } else {
            color = "bg-red-400";
          }
        }
        return (
          <span key={index} className={color}>
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default Textarea;
