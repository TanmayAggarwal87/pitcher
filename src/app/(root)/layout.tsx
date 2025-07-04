import React from "react";
import Navbar from "../../components/Navbar";
import "../globals.css"


export default function Layout({children}:Readonly<{children:React.ReactNode}>){

  return (
    <html className=" bg-white">
    <body>
        <Navbar/>
        {children}
     </body>
    </html>
  )

}