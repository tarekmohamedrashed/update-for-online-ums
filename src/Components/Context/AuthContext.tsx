// import { jwtDecode } from "jwt-decode";
// import  { createContext, useEffect, useState } from "react";

// //  عشان هنستخدمه برا exportوخليناه AuthContext وسمناه Context لل  create و عملنا  file contextاحنا كده عملنا 
// export let AuthContext = createContext({});

// //   يعني بتمد  Provider اللي ب function  دي ال  
// export default function AuthContextProvider (props)  {
//     let [userData,setUserData]=useState(null)
//  let saveUserData=()=>{
// //encodedToken وكده حطناه هنا في ال  userTokenوهنديله نفس اسمه اللي هناك اللي هو  getItemومدام هنجيبه يبقي هنعمله  login في ال  localStorage بتاعي اللي انا حطوه في ال  token  وهجيب ال  let  يعني متشفره هعرف  encode اللي هحتجها  data كده انا بقي معايا ال  tokenالمضغوطه جوا ال  data عشان اقدر استخدم ال  terminal في ال  npm i jwt-decode كده  jwt-decodeلل instoll ونعمل  jwt-decode من خلال موقع ال  token بعد ما نفك ضعط ال 
// let encodedToken=localStorage.getItem("userToken")
// // بتاعي user هنفكله بقي التشفير بتاعه عشان ناخد بيانات ال 
// let decodedToken=jwtDecode(encodedToken)
// setUserData(decodedToken)
//  }
// //  Token يحمل احفظلي الداتا اللي في  component ويشوف ان في داتا فعشان كده بقوله اول ما ال  nullعشان كل ما نخش الموقع ميشوفناش اننا  useEffect هنعمل 
//  useEffect(()=>{
// if(localStorage.getItem("userToken"))
//     saveUserData()
//  },[])
//   return (
//     // اني عايز امدك بشوية بيانات context  كده بقول لل 
//     <AuthContext.Provider value={{saveUserData,userData }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };


import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState, ReactNode } from "react";

// Define the shape of the user data
interface UserData {
  [key: string]: any; // Adjust the type based on your JWT payload structure
}

// Define the shape of the AuthContext
interface AuthContextProps {
  userData: UserData | null;
  saveUserData: () => void;
}

// Create the context with an initial value
export const AuthContext = createContext<AuthContextProps>({
  userData: null,
  saveUserData: () => {},
});

// Define the props for the AuthContextProvider component
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  const saveUserData = () => {
    // Retrieve the token from localStorage
    const encodedToken = localStorage.getItem("userToken");

    if (encodedToken) {
      // Decode the token and update the state
      const decodedToken: UserData = jwtDecode(encodedToken);
      setUserData(decodedToken);
    }
  };

  useEffect(() => {
    // Check if a token exists in localStorage and save user data on component mount
    if (localStorage.getItem("userToken")) {
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ saveUserData, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
