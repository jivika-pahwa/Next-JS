import Link from "next/link";
import styles from "../../page.module.css";

const AboutStudent = () => {
  return (
    <div className={styles.main}>
        <h1>Student About Page using Nested Routing</h1>
        <Link href="/">Go Back</Link>
    </div>
  )
}

export default AboutStudent;
