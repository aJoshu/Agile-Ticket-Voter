
export default function getUser() {

  const domain = window.location.hostname;

  let userID = window.localStorage.getItem('userID');
  let userName = window.localStorage.getItem('userName');
  (window.localStorage as Storage & { domain?: string }).domain = domain;
  

  let user = {
    userID,
    userName,
  };
  if (user) {
    return user;
  }
}
