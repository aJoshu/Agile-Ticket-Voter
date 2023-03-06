import { useState } from "react";
import Button from "react-bootstrap/Button";
import requstSession from "../../utils/requestSession";
import "./style.scss";

export default function Main() {
  const [selected, setSelected] = useState<number>();

  const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  const request = async () => {
    await requstSession().then((result) => {
      if (result && result.data) {
        console.log(result.data);
      }
    });
  };

  const select = (id: number) => {
    setSelected(id);
    console.log(selected);
  };

  return (
    <div>
      <div className="main-container">
        <h1>Agile Poker</h1>
        <p>
          Welcome to Agile Poker, an online app for teams to plan story points!
        </p>
      </div>
      {true && (
        <>
          <div className="main-buttons">
            <Button
              variant="primary"
              onClick={() => {
                request();
              }}
            >
              Create Session
            </Button>
            <Button variant="primary">Join Session</Button>
          </div>
        </>
      )}

      {true && (
        <>
          <div className="main-container">
            Vote: {selected}
            <div className="wrapper">
              {fibonacci.map(function (object, i) {
                return (
                  <span
                    onClick={() => {
                      select(object);
                    }}
                    className="grid-Item"
                    id={`value-${object}`}
                  >
                    {object}
                  </span>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
