{
  /* Importações principais */
}
import Image from "next/image";
import Link from "next/link";

{
  /* Estilos */
}
import styles from "./NavBar.module.css";

{
  /* React-icons */
}
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";

export default function NavBar() {
  return (
    <header className={styles.HeaderNavBar}>
      <nav className={styles.NavBar}>
        <section className={styles.ContainerLogo}>
          <div>
            <p>
              Micael<span>Dev</span>
            </p>
          </div>
        </section>

        <section className={styles.SectionLinks}>
          <div>
            <Link className={styles.LinksDefault} href={"/"} passHref>
              <span>Projetos</span>
            </Link>
            <Link className={styles.LinksDefault} href={"/"} passHref>
              <span>Tecnologias</span>
            </Link>
            <Link className={styles.LinksDefault} href={"/"} passHref>
              <span>Sobre mim</span>
            </Link>
          </div>
        </section>

        <section className={styles.SocialNetworks}>
          <div>
            <Link target="_blank" href={"https://github.com/iSantanaaH"} passHref>
              <span>
                <FaGithub color="#FFF" />
              </span>
            </Link>
            <Link target="_blank" href={"https://www.linkedin.com/in/micael-santana-4626181a5/"} passHref>
              <span>
                <FaLinkedin color="#FFF" />
              </span>
            </Link>
            <Link target="_blank" href={"/"} passHref>
              <span>
                <FaInstagramSquare color="#FFF" />
              </span>
            </Link>
          </div>
        </section>
      </nav>
    </header>
  );
}
