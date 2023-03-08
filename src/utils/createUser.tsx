import Cookies from "js-cookie";

class User {
  id: string = "";
  displayName?: string;
}

export default function CreateUser() {
  const enterUsername = prompt("Pick a username");
  console.log("Creating a user");

  if (enterUsername) {
    const user = new User();
    const uuid = generateUUID();

    user.displayName = `${enterUsername}`;
    user.id = uuid;

    Cookies.set("userID", user.id);
    Cookies.set("userName", user.displayName);
  } else {
    CreateUser();
  }
}

function generateUUID(): string {
  let uuid = "";
  for (let i = 0; i < 12; i++) {
    if (i === 4 || i === 8) {
      uuid += "-";
    }
    uuid += Math.floor(Math.random() * 16).toString(16);
  }
  return uuid;
}
