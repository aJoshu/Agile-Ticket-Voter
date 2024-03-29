
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

    const domain = window.location.hostname;

    window.localStorage.setItem('userID', user.id);
    window.localStorage.setItem('userName', user.displayName);
    (window.localStorage as Storage & { domain?: string }).domain = domain;
    

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
