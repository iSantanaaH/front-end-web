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

      <section>
        <div className={styles.Resume}>
          <h2>Resumo</h2>
          <p>
            Ola, meu nome é <span>Micael Santana</span>, sou desenvolvedor
            front-end, sou formado em Análise e Desenvolvimento de Sistemas na
            UNOPOAR em Dezembro de 2023. Sou apaixonado por tecnologia e busco
            sempre melhorar minhas habilidades na programação. Estou ancioso
            para aplicar meus conhecimentos junto a equipe e contribuir para um
            sucesso contínuo.
          </p>
          <button>
            <span>
              <br></br>
              Vamos Começar
            </span>
          </button>
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
        </div>
      </section>
    </main>
  );
}
