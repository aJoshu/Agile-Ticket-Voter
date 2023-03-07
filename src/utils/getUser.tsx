import Cookies from "js-cookie";

export default function getUser() {
  console.log("Creating a user");
  let user = Cookies.get("userID");
  if (user) {
    return user;
  }
}
