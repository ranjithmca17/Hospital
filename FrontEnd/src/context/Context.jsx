// import { createContext } from "react";
// import { doctors } from "../assets/assets";

// export const AppContext=createContext();

// const AppContextProvider=(props)=>{

//     const value={
// doctors
//     }
//     return(
//         <AppContext.Provider value={value}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }

// export default AppContextProvider;


import { createContext } from "react";
import { doctors } from "../assets/assets"; // Importing the doctors data

// Creating the context
export const AppContext = createContext();

// AppContextProvider component to wrap your application
const AppContextProvider = (props) => {
    // Providing value to the context (in this case, the doctors data)
    const value = {
        doctors
    };

    // Additional context data can be provided here if needed
    const r = "Ran";

    return (
        // Providing the context value to children
        <AppContext.Provider value={{ value, r,doctors }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
