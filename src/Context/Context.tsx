import React, { createContext, useState } from "react";

export const TokenContext = createContext<any>(null);

interface ContextProviderProps {
    children: React.ReactNode;
}

function TokenContextProvider({ children }: ContextProviderProps): JSX.Element {
    const [message, setMessage] = useState("");

    return (
        <TokenContext.Provider value={{ message, setMessage }}>
            {children}
        </TokenContext.Provider>
    );
}

export default TokenContextProvider;