
import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'
const Ninjas = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>AllNinjas</h1>
      {
        data.map((i) => {
          return <Link href={`/ninjas/${i.id}`} key={i.id} ><a className={styles.single} >
            <h3>{i.name}</h3>
          </a></Link>
        })

      }
    </div>
  );
};

export default Ninjas;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      data: data
    }
  }
}