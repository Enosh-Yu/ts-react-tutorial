import React from "react";
import { useParams } from "react-router-dom";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  console.log("name = ", name);
  const params = useParams();
  console.log("params = ", params);
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello ..., {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
