import React from "react";
import MainRoutes from "./MainRoutes";
import DishesContextProvider from "./contexts/DishesContextProvider";
import Navbar from "./components/Navbar/Navbar";
import "./styles/index.css";
import UsersContextProvider from "./contexts/userContext";

function App() {
  return (
    <>
      <UsersContextProvider>
        <DishesContextProvider>
          <Navbar />
          <MainRoutes />
        </DishesContextProvider>
      </UsersContextProvider>
    </>
  );
}

export default App;
