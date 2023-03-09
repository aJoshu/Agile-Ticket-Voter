import axios from "axios";

export default async function joinSession(sessionID: string) {
  const domain = window.location.hostname;

  let userID = window.localStorage.getItem('userID');
  let userName = window.localStorage.getItem('userName');
  (window.localStorage as Storage & { domain?: string }).domain = domain;
  
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
