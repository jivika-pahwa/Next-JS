'use client'
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  const [data,setData] = useState("Friday Tech Session");

  const clickEvent = (userid) => {
    alert("buttton clicked "+userid);
    setData("Next.js : Friday Tech Session on React Framework");
  };

  const InnerComponent = () => {
    return(
      <>
      <p>Inner Component</p>
      </>
    )
  }

  return (
    <main className={styles.main}>
      <h1>Welcome to Next JS</h1>
      <h2>Events & States</h2>
      <h3>{data}</h3>

      <button onClick={()=>clickEvent(1234)}>Click Me</button>
      {/* below feature is similar to react library */}
      <InnerComponent/> 
      {InnerComponent()}
    </main>
  );
}
