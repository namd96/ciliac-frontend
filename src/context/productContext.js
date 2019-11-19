import React from 'react';

export default React.createContext({
    results: false,
    queriesList: false,
    query: false,
    setResults: () => { },
    setQueriesList: () => { },
});