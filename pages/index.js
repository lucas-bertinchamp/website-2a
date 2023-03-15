import Footer from "@/components/Footer.js";
import Head from "next/head";
import Header from "../components/Header.js";
import styles from "../styles/Home.module.css";


export default function Home() {
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
        <div className={styles.main_image}></div>
        <h1 className={styles.main_title}>
          Apprentissage par renforcement et contrôle de la marche du robot
        </h1>
      </div>

      <div className={styles.first_title_box}>
        <h1 className={styles.first_title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>

        <div className={styles.cards_box}>
          <div className={`card ${styles.card}`}>
            <img src="pomme.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className={`card ${styles.card}`}>
            <img src="pomme.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className={`card ${styles.card}`}>
            <img src="pomme.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className={`card ${styles.card}`}>
            <img src="pomme.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className={styles.big_card}>
            <div className={styles.big_card_text}>
              <h2>Unitree GO1</h2>
            </div>
            <div className={styles.robot_image}>
              <img src="robot.png" />
            </div>
          </div>
        </div>
      </div>

      <h1 className={styles.first_title}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>

      <div className={styles.carousel_box}>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="poomme.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <video
                src="unitree_go1.mp4"
                controls
                autoPlay
                width="1920"
                height="1080"
              ></video>
            </div>
            <div className="carousel-item">
              <img src="poomme.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
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
