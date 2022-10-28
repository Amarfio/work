import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from  "./Footer";
//this combines all the structures of the application.
export default function Page(){
    return(
    <div>
      <Header />
          <MainContent/>
      <Footer />
    </div>
    )
  }
  