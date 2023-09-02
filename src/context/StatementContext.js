// StatementContext.js
import React, { createContext, useReducer, useContext } from "react";

const StatementContext = createContext();

const statementReducer = (state, action) => {
  switch (action.type) {
    case "add_statement":
      return [...state, { title: `Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const StatementProvider = ({ children }) => {
  const [state, dispatch] = useReducer(statementReducer, []);

  const addStatementPost = () => {
    dispatch({ type: "add_statement" });
  };

  return (
    <StatementContext.Provider value={{ state, addStatementPost }}>
      {children}
    </StatementContext.Provider>
  );
};

const useStatementContext = () => {
  const context = useContext(StatementContext);
  if (!context) {
    throw new Error(
      "useStatementContext must be used within a StatementProvider"
    );
  }
  return context;
};

export { StatementProvider, useStatementContext };
