import React, {createContext} from 'react';

const AppContext = createContext({});

export const AppContextProvider: React.FC = (props) => {
    const context = {}

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    );
}
