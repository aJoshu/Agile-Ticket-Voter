import axios from "axios";
import Cookies from "js-cookie";

export default async function requstSession() {
  const userId = Cookies.get("userID");
  console.log(userId);

  try {
    const response = await axios.post('/createSession', {
      // request body data goes here, if any
    });

    console.log('Response:', response.data);
    // do something with the response data
  } catch (error) {
    console.error('Error:', error);
    // handle the error
  }
  
}
