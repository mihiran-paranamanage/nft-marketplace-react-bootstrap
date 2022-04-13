import React, {createContext, useState} from 'react';

const AppContext = createContext({
    showCollectionLeftPanel: false,
    showMyCollectionLeftPanel: false,
    toggleCollectionLeftPanel: () => {},
    toggleMyCollectionLeftPanel: () => {}
});

export const AppContextProvider: React.FC = (props) => {
    const [showCollectionLeftPanel, setShowCollectionLeftPanel] = useState(false);
    const [showMyCollectionLeftPanel, setShowMyCollectionLeftPanel] = useState(false);
    const toggleCollectionLeftPanel = () => setShowCollectionLeftPanel((s: boolean) => !s);
    const toggleMyCollectionLeftPanel = () => setShowMyCollectionLeftPanel((s: boolean) => !s);

    const context = {
        showCollectionLeftPanel: showCollectionLeftPanel,
        showMyCollectionLeftPanel: showMyCollectionLeftPanel,
        toggleCollectionLeftPanel: toggleCollectionLeftPanel,
        toggleMyCollectionLeftPanel: toggleMyCollectionLeftPanel
    }

    return (
        <AppContext.Provider value={context}>
            {props.children}
        </AppContext.Provider>
    );
}

export default AppContext;
