import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import getUser from "../../utils/getUser";
import joinSession from "../../utils/joinSession";
import requstSession from "../../utils/requestSession";
import "./style.scss";

export default function Main() {
  const [collected] = useState<any>({});
  const [selected, setSelected] = useState<number>();
  const [getSession, setSession] = useState<number>();

  const handleChange = (event: any) => {
    collected[event.target.id] = event.target.value;
    if (event.target.value.length < 1) delete collected[event.target.id];
    console.log(collected);
  };

  const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  const request = async () => {
    await requstSession().then((result) => {
      if (result && result.data) {
        setSession(result.data);
      }
    });
  };

  const join = async () => {
    const sessionID = collected.sessionID;
    if (sessionID) {
      await joinSession(sessionID).then((result) => {
        if (result) {
          console.log(result);
        }
      });
    } else {
      console.log("No sessinID");
    }
  };

  const select = (id: number) => {
    setSelected(id);
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
            <div className="button-item">
              <Button
                variant="primary"
                onClick={() => {
                  request();
                }}
              >
                Create Session
              </Button>
            </div>
            <div className="button-item">
              <InputGroup className="mb-3">
                <InputGroup.Text
                  onClick={() => {
                    join();
                  }}
                >
                  Join
                </InputGroup.Text>
                <Form.Control
                  aria-label="joinID"
                  id="sessionID"
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
          </div>
        </>
      )}

      {true && (
        <>
          <div className="main-container">
            <h3>Voting Board</h3>
            {getSession}
            <p>Vote: {selected}</p>
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
      <p>{getUser()}</p>
    </div>
  );
}
