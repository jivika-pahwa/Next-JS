'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState("Friday Tech Session");

  const clickEvent = (userid) => {
    alert("buttton clicked " + userid);
    setData("Next.js : Friday Tech Session on React Framework");
  };

  const navigate = (path) => {
    router.push(`/${path}`);
  };


  return (
    <main className={styles.main}>
      <h1>Welcome to Next JS</h1>
      <h2>Events & States</h2>
      <h3>{data}</h3>
      <button onClick={() => clickEvent(1234)}>Click Me</button>
      <Link href="/about">Go to About Us Page</Link>
      <Link href="/login">Go to Login Page</Link>
      <button onClick={() => navigate("login")}>Button Navigation</button>
    </main>
  );
}
