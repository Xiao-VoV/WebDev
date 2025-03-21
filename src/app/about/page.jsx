import Image from "next/image";
import style from "./about.module.css";
const AboutPage = () => {
  return (
    <div className={style.ImageContainer}>
      <Image src="/about.png" alt="关于" width={500} height={500} />
    </div>
  );
};

export default AboutPage;
