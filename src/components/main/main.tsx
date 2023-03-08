import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import io from "socket.io-client";
import getUser from "../../utils/getUser";
import joinSession from "../../utils/joinSession";
import requstSession from "../../utils/requestSession";
import "./style.scss";
const socket = io();

export default function Main() {
  const [collected] = useState<any>({});
  const [selected, setSelected] = useState<number>();
  const [getSession, setSession] = useState<string>();
  const [getSessionData, setSessionData] = useState<SessionData>();
  const [getShowVotes, setShowVotes] = useState<boolean>();

  const handleChange = (event: any) => {
    collected[event.target.id] = event.target.value;
    if (event.target.value.length < 1) delete collected[event.target.id];
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket");
    });
  }, []);

  const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  const request = async () => {
    await requstSession().then((result) => {
      if (result && result.data) {
        let sessionID = result.data;
        setSession(sessionID);
        fetchData(sessionID);
      }
    });
  };

  const fetchData = (sessionID: string) => {
    socket.on(`fetchData-${sessionID}`, (response) => {
      setSession(sessionID);
      setSessionData(response);
      console.log(response);
    });
  };

  const join = async () => {
    const sessionID = collected.sessionID;
    if (sessionID) {
      await joinSession(sessionID).then((result) => {
        if (result) {
          fetchData(sessionID);
        }
      });
    }
  };

  const select = (vote: number) => {
    setSelected(vote);
    console.log("Emiting vote");
    socket.emit("vote", {
      sessionID: getSession,
      user: getUser(),
      vote,
    });
  };

  const voteBox = (member: members) => {
    if(getShowVotes){
      return <div className="vote-box vote-green">{member.vote}</div>;
    }else{      
      if (member.hasVoted) {
        return <div className="vote-box vote-green"></div>;
      } else {
        return <div className="vote-box vote-red"></div>;
      }
    }
  };

  const showUsers = () => {
    if (getSessionData?.sessions?.members) {
      return (
        <div>
          <h4>Members</h4>
          <ul>
            <div className="vote-list">
              <b>Username</b>
              <b>Voted</b>
            </div>
            {getSessionData.sessions.members.map((member) => (
              <div className="vote-list">
                <>
                  {member.userName}
                  {voteBox(member)}
                </>
              </div>
            ))}
          </ul>
        </div>
      );
    }
    return <></>;
  };

  const votingBoard = () => {
    if (getSession) {
      return (
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
          {showUsers()}
          <div className="button-item">
              <Button variant="primary" onClick={()=>{setShowVotes(true)}}>Show Votes</Button>
                </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="main-container">
        <h1>Agile Poker</h1>
        <p>
          Welcome to Agile Poker, an online app for teams to plan story points!
        </p>
      </div>
      {!getSession && (
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

      {votingBoard()}
    </div>
  );
}

interface members {
  userID: string;
  userName: string;
  vote: number;
  hasVoted?: boolean;
}

interface SessionData {
  sessions: {
    id: string;
    members: members[];
  };
}
