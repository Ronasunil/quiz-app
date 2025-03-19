import { createContext, useMemo, useReducer } from "react";

const initialState = { user: {} };

const authReducer = function (state, action) {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, user: action.payload };
    case "CLEAR_USER":
      return initialState;
    case "UPDATE_USER":
      return { ...state, ...action.payload };
  }
};

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
