import Header from "../Header/Header";
import styles from "./Styles/Banner.module.scss";

export default function Banner() {
  return (
    <>
    <div className={styles["container-banner"]}>
    <Header/>
    <div className={styles["content-part"]}>
        <div className={styles["title"]}>
            The Sports Essence
        </div>
        <div className={styles["description"]}>
          Descubra o mundo dos esportes com a CoreSports. Informações, notícias,
          dicas de treinamento e muito mais para atletas, entusiastas e fãs.
          Conectando você ao universo esportivo com paixão e dedicação.
        </div>
        <div className={styles["button-know-more"]}>
            Conheça mais
        </div>
      </div>
    </div>
    </>
  );
}
