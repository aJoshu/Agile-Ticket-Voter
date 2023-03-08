import axios from "axios";
import Cookies from "js-cookie";

export default async function requstSession() {
  const userID = Cookies.get("userID");
  const userName = Cookies.get("userName");

  console.log(userID);

  try {
    const response = await axios.post('/createSession', {
      userID, userName
    });

    return response;
    
    
    // do something with the response data
  } catch (error) {
    console.error('Error:', error);
    // handle the error
  }
  
}
