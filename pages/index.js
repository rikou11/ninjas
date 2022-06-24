import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>

      <h1 className={styles.title}>Home</h1>
      {/* <img className={styles.img} src="https://api.lorem.space/image/game?w=2000&h=2000&hash=ro96u22z
      " alt="" /> */}
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        vitae iusto error? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellendus neque magnam laudantium fuga delectus exercitationem, officia ratione nesciunt reprehenderit libero soluta fugiat!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
        vitae iusto error?
      </p>
      <Link href="/ninjas/"><a className={styles.btn}>Ninja Listing</a></Link>

    </div>
  );
}
