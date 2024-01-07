"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import NavBar from "./Components/header/NavBar";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";

interface IframeVideoProps {
  id: number;
  path: string;
}

export default function HomePage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isFrameVideo, setIsframeVideo] = useState<IframeVideoProps | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  const openIframe = (video: IframeVideoProps | null) => {
    setIsframeVideo(video);
  };

  useEffect(() => {
    function disableDropdown(event: MouseEvent) {
      event.stopPropagation();

      const clickedElement = event.target as HTMLElement;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(clickedElement)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", disableDropdown);

    return () => {
      document.removeEventListener("mousedown", disableDropdown);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      backgroundVideoRef.current &&
      !backgroundVideoRef.current.contains(event.target as Node)
    ) {
      setIsframeVideo(null);
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <header>
        <section>
          <div>
            <NavBar
              menuRef={dropdownRef}
              isOpen={isMenuOpen}
              toggleMenu={toggleMenu}
            />
          </div>
        </section>
      </header>

      <main>
        <section className={styles.ContainerResume}>
          <div className={styles.Resume}>
            <h2>Resumo</h2>
            <p>
              Olá, meu nome é <span>Micael Santana</span>, sou um entusiasta e
              desenvolvedor front-end, sou formado em Análise e Desenvolvimento
              de Sistemas na UNOPOAR em Dezembro de 2023. Tenho uma paixão
              profunda por tecnologia e estou em constante busca pelo
              aprimoramento das minhas habilidades na programação. Com um
              background acadêmico sólido e uma abordagem prática no
              desenvolvimento de soluções, estou ansioso para aplicar meu
              conhecimento e experiência em um ambiente colaborativo.
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
                className={styles.LogoImage}
                src={"/Images/software.png"}
                width={500}
                height={500}
                alt="Logo react.js"
              />
            </figure>
          </div>
        </section>

        <section id="projects" className={styles.Projects}>
          {isFrameVideo && (
            <div className={styles.ContainerIframe}>
              <div className={styles.Iframe}>
                <video
                  ref={backgroundVideoRef}
                  src={isFrameVideo.path}
                  controls
                ></video>
              </div>
            </div>
          )}
          <div>
            <h2>Projetos</h2>
          </div>
          <div className={styles.ContainerBoxes}>
            <div id="estrelaGuia" className={styles.Box}>
              <figure>
                <Image
                  src={"/Images/EstrelaGuia.png"}
                  alt="Estrela Guia"
                  width={240}
                  height={140}
                  className={styles.ImageProject}
                  title="Estrela Guia"
                />
              </figure>

              <div className={styles.ContainerTitle}>
                <h3>Estrela Guia</h3>
                <div className={styles.GithubProject}>
                  <Link
                    target="_blank"
                    href={"https://github.com/iSantanaaH/blog-star-guide"}
                    passHref
                    title="Github do projeto"
                  >
                    <span>
                      <FaGithub color="#FFF" />
                    </span>
                  </Link>
                </div>
              </div>

              <div className={styles.DescriptionProject}>
                <p className={styles.Details}>
                  Um projeto Full Stack de um blog, onde o usuário pode criar
                  uma postagem se ele tiver permissão. O projeto conta com
                  autenticação utilizando JWT e com banco de dados.
                </p>
                <div className={styles.TechnologiesUsed}>
                  <Image
                    src={"/Images/html.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do HTML"
                    className={styles.ImageTechnologiesBox}
                    title="HTML"
                  />
                  <Image
                    src={"/Images/tailwindcss.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do TailwindCSS"
                    className={styles.ImageTechnologiesBox}
                    title="TailwindCSS"
                  />
                  <Image
                    src={"/Images/nextjs.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do Nextjs"
                    className={styles.ImageTechnologiesBox}
                    title="Next.js"
                  />
                  <Image
                    src={"/Images/typescript.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do Typescript"
                    className={styles.ImageTechnologiesBox}
                    title="Typescript"
                  />
                  <Image
                    src={"/Images/javascript.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do Javascript"
                    className={styles.ImageTechnologiesBox}
                    title="Javascript"
                  />
                  <Image
                    src={"/Images/postgresql.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do PostgreSQL"
                    className={styles.ImageTechnologiesBox}
                    title="PostgreSQL"
                  />
                </div>
              </div>

              <div className={styles.RedirectProject}>
                <Link href={"#projects"} className={styles.LinkVideo}>
                  <span
                    onClick={() =>
                      openIframe({ id: 1, path: "/Videos/teste.mkv" })
                    }
                  >
                    Vídeo do projeto
                  </span>
                </Link>
                <Link target="_blank" href={"https://estrelaguia.vercel.app/"}>
                  <button className={styles.ButtonProject}>Acessar</button>
                </Link>
              </div>
            </div>

            <div id="sitenubank" className={styles.Box}>
              <figure>
                <Image
                  src={"/Images/SiteNubank.png"}
                  alt="Site Nubank"
                  width={250}
                  height={140}
                  className={styles.ImageProject}
                  title="Site Nubank"
                />
              </figure>

              <div className={styles.ContainerTitle}>
                <h3>Nubank Site</h3>
                <div className={styles.GithubProject}>
                  <Link
                    target="_blank"
                    href={"https://github.com/iSantanaaH/nubank-site"}
                    passHref
                    title="Github do projeto"
                  >
                    <span>
                      <FaGithub color="#FFF" />
                    </span>
                  </Link>
                </div>
              </div>

              <div className={styles.DescriptionProject}>
                <p className={styles.Details}>
                  Esse é um site estático que fiz copiando algumas partes do
                  site da nubank. Foi desenvolvido para aprimorar minhas
                  habilidades com Grid Layout e FlexBox.
                </p>
                <div className={styles.TechnologiesUsed}>
                  <Image
                    src={"/Images/html.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do HTML"
                    className={styles.ImageTechnologiesBox}
                    title="HTML"
                  />
                  <Image
                    src={"/Images/css.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do CSS3"
                    className={styles.ImageTechnologiesBox}
                    title="CSS"
                  />
                  <Image
                    src={"/Images/javascript.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do Javascript"
                    className={styles.ImageTechnologiesBox}
                    title="Javascript"
                  />
                </div>
              </div>

              <div className={styles.RedirectProject}>
                <Link href={"#sitenubank"} className={styles.LinkVideo}>
                  <span
                    onClick={() =>
                      openIframe({ id: 1, path: "/Videos/estrelaguia.mkv" })
                    }
                  >
                    Vídeo do projeto
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://isantanaah.github.io/nubank-site/"}
                >
                  <button className={styles.ButtonProject}>Acessar</button>
                </Link>
              </div>
            </div>

            <div id="sitenubank" className={styles.Box}>
              <figure>
                <Image
                  src={"/Images/calculadoraIMC.png"}
                  alt="Calculadora de IMC"
                  width={250}
                  height={140}
                  className={styles.ImageProject}
                  title="Calculadora de IMC"
                />
              </figure>

              <div className={styles.ContainerTitle}>
                <h3>Calculadora de IMC</h3>
                <div className={styles.GithubProject}>
                  <Link
                    target="_blank"
                    href={"https://github.com/iSantanaaH/CalculatorIMC"}
                    passHref
                    title="Github do projeto"
                  >
                    <span>
                      <FaGithub color="#FFF" />
                    </span>
                  </Link>
                </div>
              </div>

              <div className={styles.DescriptionProject}>
                <p className={styles.Details}>
                  Esse projeto foi feito com intuito de aprimorar minhas
                  habilidades em comunição entre front-end e back-end. É um site
                  onde o usuário informa sua altura e seu peso para o back-end.
                  O back processa os dados e retorna o IMC e o status atual do
                  usuário, o front por sua vez recebe a resposta e informa ao
                  usuário seu IMC e status que vai de abaixo do peso a obeso.
                </p>
                <div className={styles.TechnologiesUsed}>
                  <Image
                    src={"/Images/html.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do HTML"
                    className={styles.ImageTechnologiesBox}
                    title="HTML"
                  />
                  <Image
                    src={"/Images/scss.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do SCSS"
                    className={styles.ImageTechnologiesBox}
                    title="SCSS"
                  />
                  <Image
                    src={"/Images/javascript.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do Javascript"
                    className={styles.ImageTechnologiesBox}
                    title="Javascript"
                  />
                  <Image
                    src={"/Images/typescript.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do Typescript"
                    className={styles.ImageTechnologiesBox}
                    title="Typescript"
                  />
                  <Image
                    src={"/Images/react.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do React"
                    className={styles.ImageTechnologiesBox}
                    title="React"
                  />
                </div>
              </div>

              <div className={styles.RedirectProject}>
                <Link href={"#sitenubank"} className={styles.LinkVideo}>
                  <span
                    onClick={() =>
                      openIframe({ id: 1, path: "/Videos/estrelaguia.mkv" })
                    }
                  >
                    Vídeo do projeto
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://isantanaah.github.io/nubank-site/"}
                >
                  <button className={styles.ButtonProject}>Acessar</button>
                </Link>
              </div>
            </div>
            <div id="sitenubank" className={styles.Box}>
              <figure>
                <Image
                  src={"/Images/MundoInvertido.png"}
                  alt="Site Nubank"
                  width={250}
                  height={140}
                  className={styles.ImageProject}
                  title="Site Nubank"
                />
              </figure>

              <div className={styles.ContainerTitle}>
                <h3>Mundo Invertido</h3>
                <div className={styles.GithubProject}>
                  <Link
                    target="_blank"
                    href={"https://github.com/iSantanaaH/inverted-world"}
                    passHref
                    title="Github do projeto"
                  >
                    <span>
                      <FaGithub color="#FFF" />
                    </span>
                  </Link>
                </div>
              </div>

              <div className={styles.DescriptionProject}>
                <p className={styles.Details}>
                  Essa é uma landing page da série Stranger Things da netflix.
                  Ao clicar em qualquer lugar do site uma música começa a tocar
                  de acordo com o tema (light ou dark). O botão no início da
                  página faz com que todo o site fique de cabeça pra baixo.
                </p>
                <div className={styles.TechnologiesUsed}>
                  <Image
                    src={"/Images/html.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do HTML"
                    className={styles.ImageTechnologiesBox}
                    title="HTML"
                  />
                  <Image
                    src={"/Images/css.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do SCSS"
                    className={styles.ImageTechnologiesBox}
                    title="SCSS"
                  />
                  <Image
                    src={"/Images/javascript.svg"}
                    width={30}
                    height={30}
                    alt="Imagem do Javascript"
                    className={styles.ImageTechnologiesBox}
                    title="Javascript"
                  />
                </div>
              </div>

              <div className={styles.RedirectProject}>
                <Link href={"#sitenubank"} className={styles.LinkVideo}>
                  <span
                    onClick={() =>
                      openIframe({ id: 1, path: "/Videos/estrelaguia.mkv" })
                    }
                  >
                    Vídeo do projeto
                  </span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://isantanaah.github.io/nubank-site/"}
                >
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
                title="HTML"
              />
            </div>
            <div>
              <Image
                src={"/Images/css.svg"}
                width={100}
                height={100}
                alt="Imagem do CSS"
                className={styles.ImageTechnologies}
                title="CSS"
              />
            </div>
            <div>
              <Image
                src={"/Images/javascript.svg"}
                width={100}
                height={100}
                alt="Imagem do Javascript"
                className={styles.ImageTechnologies}
                title="Javascript"
              />
            </div>
            <div>
              <Image
                src={"/Images/typescript.svg"}
                width={100}
                height={100}
                alt="Imagem do Typescript"
                className={styles.ImageTechnologies}
                title="Typescript"
              />
            </div>
            <div>
              <Image
                src={"/Images/node.svg"}
                width={100}
                height={100}
                alt="Imagem do Node.js"
                className={styles.ImageTechnologies}
                title="Node.js"
              />
            </div>
            <div>
              <Image
                src={"/Images/react.svg"}
                width={100}
                height={100}
                alt="Imagem do React"
                className={styles.ImageTechnologies}
                title="React.js"
              />
            </div>
            <div>
              <Image
                src={"/Images/postgresql.svg"}
                width={100}
                height={100}
                alt="Imagem do PostgreSQL"
                className={styles.ImageTechnologies}
                title="PostgreSQL"
              />
            </div>
            <div>
              <Image
                src={"/Images/git.svg"}
                width={100}
                height={100}
                alt="Imagem do Git"
                className={styles.ImageTechnologies}
                title="Git"
              />
            </div>
            <div>
              <Image
                src={"/Images/linux.svg"}
                width={100}
                height={100}
                alt="Imagem do Linux"
                className={styles.ImageTechnologies}
                title="Linux"
              />
            </div>
            <div>
              <Image
                src={"/Images/docker.svg"}
                width={100}
                height={100}
                alt="Imagem do Docker"
                className={styles.ImageTechnologies}
                title="Docker"
              />
            </div>
            <div>
              <Image
                src={"/Images/tailwindcss.svg"}
                width={100}
                height={100}
                alt="Imagem do TailwindCSS"
                className={styles.ImageTechnologies}
                title="TailwindCSS"
              />
            </div>
            <div>
              <Image
                src={"/Images/nextjs.svg"}
                width={100}
                height={100}
                alt="Imagem do Next.js"
                className={styles.ImageTechnologies}
                title="Next.js"
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
                <li>Wordpress</li>
              </ul>
            </div>
            <div>
              <ul className={styles.ListSkills}>
                <li>Foco em resultado</li>
                <li>Levantamento de Requisitos</li>
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

        <section id="aboutMe" className={styles.NewAboutMe}>
          <div>
            <h2>Sobre mim</h2>
          </div>
          <div className={styles.Timeline}>
            <div className={styles.Year}>
              <h2 className={styles.TitleYear}>2018</h2>
              <p className={styles.ParagraphYear}>
                Terminei o ensino médio e comecei a me interessar pela
                programação e suas tecnologias.
              </p>
            </div>
            <div className={styles.Line}></div>
            <div className={styles.Year}>
              <h2 className={styles.TitleYear}>2021</h2>
              <p className={styles.ParagraphYear}>
                Comecei minha faculdade em Análise e Desenvolvimento de Sistemas
                e meus estudos na área.
              </p>
            </div>
            <div className={styles.Line}></div>
            <div className={styles.Year}>
              <h2 className={styles.TitleYear}>2022</h2>
              <p className={styles.ParagraphYear}>
                Já era um Desenvolvedor Jr. e foi quando comecei a desenvolver
                projetos pessoais.
              </p>
            </div>
            <div className={styles.Line}></div>
            <div className={styles.Year}>
              <h2 className={styles.TitleYear}>2023</h2>
              <p className={styles.ParagraphYear}>
                Terminei minha faculdade e com meus projetos e conhecimentos
                comecei a buscar minha tão sonhada vaga dev.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className={styles.Footer}>
          <div>
            <h3>Whatsapp:</h3>
            <p>
              <Link
                className={styles.LinkPhone}
                href={"tel:+5575999468431"}
                passHref
              >
                <span>(75)</span>
                99946-8431
              </Link>
            </p>
            <p>
              <Link
                className={styles.LinkPhone}
                href={"tel:+5569981071154"}
                passHref
              >
                <span>(69)</span>
                98107-1154
              </Link>
            </p>
          </div>
          <div>
            <h3>Email:</h3>
            <p>
              <Link
                className={styles.LinkEmail}
                href={"mailto:micaeldev.santana@gmail.com"}
              >
                micaeldev.santana<span>@gmail.com</span>
              </Link>
            </p>
          </div>
          <div className={styles.SocialFooter}>
            <Link
              target="_blank"
              href={"https://github.com/iSantanaaH"}
              passHref
            >
              <span>
                <FaGithub color="#FFF" />
              </span>
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/micael-santana-4626181a5/"}
              passHref
            >
              <span>
                <FaLinkedin color="#FFF" />
              </span>
            </Link>
            <Link
              target="_blank"
              href={"https://www.instagram.com/dev_santanaah/"}
              passHref
            >
              <span>
                <FaInstagramSquare color="#FFF" />
              </span>
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
}
