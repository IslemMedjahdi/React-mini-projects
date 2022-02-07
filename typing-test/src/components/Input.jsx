import React from 'react';

const Input = ({value,setValue,time}) => {
  return <> 
     <textarea rows={2} placeholder='Start typing...' className='resize-none px-5 py-2 rounded-md outline-none shadow-lg bg-white font-semibold max-w-2xl w-full' value={value} onChange={(e) => time && setValue(e.target.value)}/>
     </>
};

export default Input;
