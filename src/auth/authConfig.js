import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_B2C_CLIENT_ID,
    authority: `https://${import.meta.env.VITE_B2C_TENANT}.ciamlogin.com/`,
    redirectUri: import.meta.env.VITE_REDIRECT_URI,
    postLogoutRedirectUri: "/",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const protectedResources = {
  toDoListAPI: {
    endpoint: "https://localhost:44351/api/todolist",
    scopes: {
      read: ["https://fledgerentraidpoc.onmicrosoft.com/api/test.read"],
      write: ["https://fledgerentraidpoc.onmicrosoft.com/api/test.write"],
    },
  },
};

export const loginRequest = {
  scopes: [
    ...protectedResources.toDoListAPI.scopes.read,
    ...protectedResources.toDoListAPI.scopes.write,
  ],
};
