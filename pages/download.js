import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import styles from "/styles/Download.module.css";

export default function Download() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        ></link>
      </Head>

      <Header></Header>

      <div className={styles.main_title_box}>
        <div className={styles.main_image}> </div>
        <h1 className={styles.main_title}>Download</h1>
      </div>

      <div className={styles.main_box}>
        <h1 className={styles.title_box}>Télécharger le projet</h1>
        <div className={styles.main_description}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam tortor,
            eget aliquam nisl nisl sit amet nisl. Sed tincidunt,
          </p>
        </div>

        <div className={styles.github_box}>
          <div className={styles.github_logo}>
            <p>Ici un logo</p>
          </div>
          <div className={styles.github_desc}>
            <p>GitHub</p>
          </div>
        </div>

        <div className={styles.server_box}>
          <div className={styles.server_desc}>
            <p>Serveur</p>
          </div>
          <div className={styles.server_logo}>
            <p>Ici un logo</p>
          </div>
        </div>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      ></script>

      <Footer></Footer>
    </>
  );
}
