import Image from "next/image";
import Link from "next/link";

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
            minhas habilidades na programação. Com um background acadêmico
            sólido e uma abordagem prática no desenvolvimento de soluções, estou
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

      <section id="projects" className={styles.Projects}>
        <div>
          <h2>Projetos</h2>
        </div>
        <div className={styles.ContainerBoxes}>
          <div className={styles.Box}>
            <figure>
              <Image
                src={"/Images/javascript.png"}
                alt="Projeto 1"
                width={240}
                height={140}
                className={styles.ImageProject}
              />
            </figure>

            <div className={styles.ContainerTitle}>
              <h3>Projeto 1</h3>
              <div className={styles.ColorBottomTitle}></div>
            </div>

            <div className={styles.DescriptionProject}>
              <p className={styles.Details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eros magna, ornare non pulvinar eget, euismod ut
                nulla.
              </p>
            </div>

            <div className={styles.RedirectProject}>
              <Link href={"/"}>
                <button className={styles.ButtonProject}>Acessar</button>
              </Link>
            </div>
          </div>
          <div className={styles.Box}>
            <figure>
              <Image
                src={"/Images/javascript.png"}
                alt="Projeto 1"
                width={240}
                height={140}
                className={styles.ImageProject}
              />
            </figure>

            <div className={styles.ContainerTitle}>
              <h3>Projeto 1</h3>
              <div className={styles.ColorBottomTitle}></div>
            </div>

            <div className={styles.DescriptionProject}>
              <p className={styles.Details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eros magna, ornare non pulvinar eget, euismod ut
                nulla.
              </p>
            </div>

            <div className={styles.RedirectProject}>
              <Link href={"/"}>
                <button className={styles.ButtonProject}>Acessar</button>
              </Link>
            </div>
          </div>
          <div className={styles.Box}>
            <figure>
              <Image
                src={"/Images/javascript.png"}
                alt="Projeto 1"
                width={240}
                height={140}
                className={styles.ImageProject}
              />
            </figure>

            <div className={styles.ContainerTitle}>
              <h3>Projeto 1</h3>
              <div className={styles.ColorBottomTitle}></div>
            </div>

            <div className={styles.DescriptionProject}>
              <p className={styles.Details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eros magna, ornare non pulvinar eget, euismod ut
                nulla.
              </p>
            </div>

            <div className={styles.RedirectProject}>
              <Link href={"/"}>
                <button className={styles.ButtonProject}>Acessar</button>
              </Link>
            </div>
          </div>
          <div className={styles.Box}>
            <figure>
              <Image
                src={"/Images/javascript.png"}
                alt="Projeto 1"
                width={240}
                height={140}
                className={styles.ImageProject}
              />
            </figure>

            <div className={styles.ContainerTitle}>
              <h3>Projeto 1</h3>
              <div className={styles.ColorBottomTitle}></div>
            </div>

            <div className={styles.DescriptionProject}>
              <p className={styles.Details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eros magna, ornare non pulvinar eget, euismod ut
                nulla.
              </p>
            </div>

            <div className={styles.RedirectProject}>
              <Link href={"/"}>
                <button className={styles.ButtonProject}>Acessar</button>
              </Link>
            </div>
          </div>
          <div className={styles.Box}>
            <figure>
              <Image
                src={"/Images/javascript.png"}
                alt="Projeto 1"
                width={240}
                height={140}
                className={styles.ImageProject}
              />
            </figure>

            <div className={styles.ContainerTitle}>
              <h3>Projeto 1</h3>
              <div className={styles.ColorBottomTitle}></div>
            </div>

            <div className={styles.DescriptionProject}>
              <p className={styles.Details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eros magna, ornare non pulvinar eget, euismod ut
                nulla.
              </p>
            </div>

            <div className={styles.RedirectProject}>
              <Link href={"/"}>
                <button className={styles.ButtonProject}>Acessar</button>
              </Link>
            </div>
          </div>
          <div className={styles.Box}>
            <figure>
              <Image
                src={"/Images/javascript.png"}
                alt="Projeto 1"
                width={240}
                height={140}
                className={styles.ImageProject}
              />
            </figure>

            <div className={styles.ContainerTitle}>
              <h3>Projeto 1</h3>
              <div className={styles.ColorBottomTitle}></div>
            </div>

            <div className={styles.DescriptionProject}>
              <p className={styles.Details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eros magna, ornare non pulvinar eget, euismod ut
                nulla.
              </p>
            </div>

            <div className={styles.RedirectProject}>
              <Link href={"/"}>
                <button className={styles.ButtonProject}>Acessar</button>
              </Link>
            </div>
          </div>
          <div className={styles.Box}>
            <figure>
              <Image
                src={"/Images/javascript.png"}
                alt="Projeto 1"
                width={240}
                height={140}
                className={styles.ImageProject}
              />
            </figure>

            <div className={styles.ContainerTitle}>
              <h3>Projeto 1</h3>
              <div className={styles.ColorBottomTitle}></div>
            </div>

            <div className={styles.DescriptionProject}>
              <p className={styles.Details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eros magna, ornare non pulvinar eget, euismod ut
                nulla.
              </p>
            </div>

            <div className={styles.RedirectProject}>
              <Link href={"/"}>
                <button className={styles.ButtonProject}>Acessar</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="technologies" className={styles.Technologies}>
        <div>
          <h2>Tecnologias</h2>
        </div>

        <div className={styles.ContainerTechnologies}>
          <div>
            <Image
              src={"/Images/html.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/css.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/javascript.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/typescript.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/node.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/react.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/postgresql.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/git.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/linux.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/docker.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/tailwindcss.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
          <div>
            <Image
              src={"/Images/nextjs.svg"}
              width={100}
              height={100}
              alt="Imagem do HTML"
              className={styles.ImageTechnologies}
            />
          </div>
        </div>
      </section>

      <section id="additionalSkills" className={styles.AditionalSkills}>
        <div className={styles.AditionalTitle}>
          <h2>Tecnologias e habilidades adicionais</h2>
        </div>
        <div className={styles.ContainerSkills}>
          <div>
            <ul className={styles.ListSkills}>
              <li>SQL</li>
              <li>Banco de dados</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ListSkills}>
              <li>Wordpress</li>
              <li>Next.js</li>
              <li>Inglês</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ListSkills}>
              <li>Aprendizagem rápida</li>
              <li>Engajamento</li>
              <li>Trabalho em equipe</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="aboutMe" className={styles.AboutMe}>
        <div>
          <h2>Sobre mim</h2>
        </div>

        <div className={styles.LineX}>
          <div className={styles.TitleFirstYear}>
            <h2>2020</h2>
          </div>
          <div className={styles.FirstYear}>
            <div className={styles.ParagraphFirstYear}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                tincidunt orci non urna interdum,
              </p>
            </div>
          </div>
          <div className={styles.TitleSecondYear}>
            <h2>2021</h2>
          </div>
          <div className={styles.SecondYear}>
            <div className={styles.ParagraphSecondYear}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                tincidunt orci non urna interdum,
              </p>
            </div>
          </div>
          <div className={styles.TitleThirdYear}>
            <h2>2022</h2>
          </div>
          <div className={styles.ThirdYear}>
            <div className={styles.ParagraphThirdYear}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                tincidunt orci non urna interdum,
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
