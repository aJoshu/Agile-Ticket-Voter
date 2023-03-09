
export default function getUser() {
  let userID = localStorage.getItem("userID");
  let userName = localStorage.getItem("userName");

  let user = {
    userID,
    userName,
  };
  if (user) {
    return user;
  }
}
