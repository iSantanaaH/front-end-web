import Image from "next/image";

{
  /* Componentes */
}
import NavBar from "./Components/header/NavBar";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <section>
        <div>
          <NavBar />
        </div>
      </section>

      <section className={styles.ContainerResume}>
        <div className={styles.Resume}>
          <h2>Resumo</h2>
          <p>
            Olá, meu nome é <span>Micael Santana</span>, sou um entusiasta e
            desenvolvedor front-end, sou formado em Análise e Desenvolvimento de
            Sistemas na UNOPOAR em Dezembro de 2023. Tenho uma paixão profunda
            por tecnologia e estou em constante busca pelo aprimoramento das
            minhas habilidades na programação. Com um background acadêmico sólido
            e uma abordagem prática no desenvolvimento de soluções, estou
            ansioso para aplicar meu conhecimento e experiência em um ambiente
            colaborativo.
          </p>
          <button>
            <span>
              <br></br>
              Vamos Começar
            </span>
          </button>
        </div>

        <div className={styles.BackgroundImage}>
          <figure>
            <Image
              className={styles.LogoJavascript}
              src={"/Images/javascript.png"}
              width={500}
              height={300}
              alt="Logo react.js"
            />
          </figure>
        </div>
      </section>

      <section className={styles.Projects}>
        <div>
          <h2>Projetos</h2>
        </div>
        <div className={styles.ContainerBoxes}>
          <div className={styles.Box}>
            <figure>
              <img src="" alt="Projeto 1" />
            </figure>

            <h3>Projeto 1</h3>

            <p className={styles.Details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eros magna, ornare non pulvinar eget, euismod ut nulla.
            </p>
          </div>
          <div className={styles.Box}>
            <figure>
              <img src="" alt="" />
            </figure>

            <h3>Projeto 2</h3>

            <p className={styles.Details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eros magna, ornare non pulvinar eget, euismod ut nulla.
            </p>
          </div>
          <div className={styles.Box}>
            <figure>
              <img src="" alt="" />
            </figure>

            <h3>Projeto 3</h3>

            <p className={styles.Details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eros magna, ornare non pulvinar eget, euismod ut nulla.
            </p>
          </div>
          <div className={styles.Box}>
            <figure>
              <img src="" alt="" />
            </figure>

            <h3>Projeto 4</h3>

            <p className={styles.Details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eros magna, ornare non pulvinar eget, euismod ut nulla.
            </p>
          </div>
          <div className={styles.Box}>
            <figure>
              <img src="" alt="" />
            </figure>

            <h3>Projeto 5</h3>

            <p className={styles.Details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eros magna, ornare non pulvinar eget, euismod ut nulla.
            </p>
          </div>
          <div className={styles.Box}>
            <figure>
              <img src="" alt="" />
            </figure>

            <h3>Projeto 6</h3>

            <p className={styles.Details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eros magna, ornare non pulvinar eget, euismod ut nulla.
            </p>
          </div>
          <div className={styles.Box}>
            <figure>
              <img src="" alt="" />
            </figure>

            <h3>Projeto 7</h3>

            <p className={styles.Details}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eros magna, ornare non pulvinar eget, euismod ut nulla.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
