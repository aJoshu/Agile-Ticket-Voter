import Cookies from "js-cookie";

export default function getUser() {
  let userID = Cookies.get("userID");
  let userName = Cookies.get("userName");
  let user = {
    userID,
    userName
  }
  if (user) {
    return user;
  }
}
