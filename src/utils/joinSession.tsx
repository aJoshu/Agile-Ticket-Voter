import axios from "axios";
import Cookies from "js-cookie";

export default async function joinSession(sessionID:string) {
  const userID = Cookies.get("userID");
  const userName = Cookies.get("userName");
  
  try {
    const response = await axios.post('/joinSession', {
      userID, userName, sessionID
    });

    return response;
    
    
    // do something with the response data
  } catch (error) {
    console.error('Error:', error);
    // handle the error
  }
  
}
