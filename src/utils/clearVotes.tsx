import axios from "axios";

export default function clearVotes(sessionID: string) {
  try {
    axios.post("clearVotes", {
      sessionID,
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
