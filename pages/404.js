import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const NotFound = () => {
    const router = useRouter();
    useEffect(() => {

        setTimeout(() => {

            //  this methode can redirect to the previous page 
            // router.back();
            router.push("/");
        }, 3000);
    }, []);
    return (
        <section>
            <p className={styles.section}>
                Error 404
            </p>
            <Link href='/'><a className={styles.btn}>Go back</a></Link>
        </section>
    );
}

export default NotFound;