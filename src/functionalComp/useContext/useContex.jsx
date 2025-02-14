import React, { createContext, useContext } from "react";
const UseContexts = createContext("mukesh");

const UserProfile = () => {
    const user = useContext(UseContexts);
    return (
        <div>
            user: {user}
        </div>
    );
}


function UseContext() {
    return (
        <UseContexts.Provider value="iam provider">
            <UserProfile />
        </UseContexts.Provider>
    );
}
export default UseContext;
