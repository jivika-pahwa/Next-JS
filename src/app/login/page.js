import Link from "next/link";
import styles from "../page.module.css";

const Login = () => {
  return (
    <div className={styles.main}>
        <h1>Login Page Using File Based Routing</h1>
        <Link href="/">Go Back</Link>
    </div>
  )
}

export default Login;
