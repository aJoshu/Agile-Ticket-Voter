import axios from "axios";

export default async function requstSession() {
  const userID = localStorage.getItem("userID");
  const userName = localStorage.getItem("userName");

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
