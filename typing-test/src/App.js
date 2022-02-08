import { useLayoutEffect, useState,useEffect } from "react";
import Input from "./components/Input";
import Textarea from "./components/Textarea";

const App = () => {
  const [value, setValue] = useState("");
  const text = "Walt: Mike is retiring from our crew, so his share of the partnership is available if you can handle his end. Distribution. And if you give him five million dollars of the fifteen million that you brought today. Just think of it as a finder's fee for bringing us together. We have forty pounds of product ready to ship. Ready to go. Are you ready?Declan: Who the hell are you?\nWalt: You know. You all know exactly who I am. Say my name.Declan: What? I don't have a damn clue who the hell you are.Walt: Yeah, you do. I'm the cook. I'm the man who killed Gus Fring.Declan: Bullshit. Cartel got Fring.Walt: Are you sure? That's right. Now. Say my name. Declan: You're Heisenberg. Walt: You're goddamn right.";
  const [time, setTime] = useState(60);
  const [start,setStart] = useState(false);
  useLayoutEffect(() => {
    if (time > 0 && start){
      setTimeout(()=>{
        setTime(time-1);
      },1000);
    }
  },[time,start]);
  useEffect(() => {
    if (value.length > 0)
      setStart(true);
  },[value]);
  const calculteWPM = () => {
    let uncorrectedErrors = 0;
    value.split("").forEach((char,index) => {
      if (text.length > index) {
        if (char !== text[index]) {
          uncorrectedErrors++;
        }
      }
    })
    return Math.floor(value.length/4.5) - Math.floor(uncorrectedErrors/2);
  }
  return (
    <div className={`flex items-center space-y-10 p-5 flex-col`}>
      <div className="flex cursor-pointer font-medium text-gray-900 px-5 max-w-2xl w-full justify-between">
        <h1 className="font-bold text-2xl">Typing Speed.</h1>
      </div>
      <Textarea text={text} value={value} />
      <Input time={time} value={value} setValue={setValue} />
      <div className="flex font-medium text-gray-900 px-5 max-w-2xl w-full justify-between">
        <p> {time} s </p>
        {!time && <p>your average typing speed is {calculteWPM() < 0 ? 0 : calculteWPM()}</p>}
      </div>
      {!time && <button onClick={() => {setTime(60);setValue("");setStart(false)}} className="py-2 px-3 active:scale-95 transition bg-cyan-500 shadow-md rounded text-white font-medium hover:bg-cyan-600">Restart</button> }
    </div>
  );
};

export default App;
