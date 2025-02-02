// Can be accessed anywhere from the app

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
