import Cookies from "js-cookie";

class User {
  id: string = "";
  displayName?: string;
}

export default function CreateUser() {
  console.log("Creating a user");

  const user = new User();
  const uuid = generateUUID();

  user.displayName = "CoolName";
  user.id = uuid;

  //Store this user in local cookies
  Cookies.set("userID", user.id);

  // On create session send request that user xx-xx-xx-xx wants to create a session

  // Create a session id and store in firebase, return id

  //On frontend get returned id make a component for the voting board

  //This board will have it's own ID, all calls will go to this ID on the backend and to firebase db

  //When an update is detected on that specific board, send an update.

  console.log(user);
}

function generateUUID(): string {
  let uuid = "";
  for (let i = 0; i < 32; i++) {
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-";
    }
    uuid += Math.floor(Math.random() * 16).toString(16);
  }
  return uuid;
}
