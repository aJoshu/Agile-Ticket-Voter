import axios from "axios";

export default async function joinSession(sessionID: string) {
  const userID = localStorage.getItem("userID");
  const userName = localStorage.getItem("userName");

  try {
    const response = await axios.post("/joinSession", {
      userID,
      userName,
      sessionID,
    });

    return response;

    // do something with the response data
  } catch (error) {
    console.error("Error:", error);
    // handle the error
  }
}
