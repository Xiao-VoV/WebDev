import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  // throw new Error("Error: Home component");
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thought Agency.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          doloremque a nobis eum mollitia alias nihil dolorem minima vitae
          dolor!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn more</button>
          <button className={styles.button}>Contact us</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImage} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImage} />
      </div>
    </div>
  );
};

export default Home;
