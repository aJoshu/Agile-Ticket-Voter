import axios from "axios";

export default function showVotes(sessionID: string) {
  try {
    axios.post("showVotes", {
      sessionID,
    });
  } catch (error) {
    console.error("Error:", error);
  }
}
