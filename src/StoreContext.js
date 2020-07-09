import React from "react";
import store from "./redux/redux-store";
import App from "./App";

const StoreContext = React.createContext(null);

export const Provider = (props) => {
    return <StoreContext.Provider store={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;