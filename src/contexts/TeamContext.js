import { createContext, useContext, useState } from "react";
const TeamContext = createContext();

const TeamProvider = ({ children }) => {
  const [team, setTeam] = useState([]);

  const values = {
    team,
    setTeam,
  };

  return <TeamContext.Provider value={values}>{children}</TeamContext.Provider>;
};

const useTeam = () => useContext(TeamContext);

export { TeamProvider, useTeam };
