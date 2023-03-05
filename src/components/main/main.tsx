import Button from 'react-bootstrap/Button';
import requstSession from '../../utils/requestSession';
import "./style.scss";

export default function Main() {
  return (
    <div>
      <div className="main-container">
        <h1>Agile Poker</h1>
        <p>
          Welcome to Agile Poker, an online app for teams to plan story points!
        </p>
      </div>
      <div className="main-buttons">
          <Button variant="primary" onClick={()=>{requstSession()}}>Create Session</Button>
          <Button variant="primary">Join Session</Button>
      </div>
    </div>
  );
}
