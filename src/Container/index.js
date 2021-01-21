import React, { useContext } from 'react';

export const HomeContext = React.createContext(null);
export const useHomeContext = () => useContext(HomeContext);

const HomeContainer = (props) => {
  return (
    <HomeContext.Provider
      value={{
        // to-do: store api data
      }}
    >
      {props.children}
    </HomeContext.Provider>
  )
};

export default HomeContainer;