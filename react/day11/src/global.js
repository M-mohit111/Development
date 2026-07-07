import { createContext, useContext } from "react";

const globalcontent = createContext("mohit");
// when we will use gloablprovider in first file than this mohit will remove and the updated value will be 
// come in the file

export default globalcontent;