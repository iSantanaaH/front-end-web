{
  /* Importações principais */
}
import Link from "next/link";
import Image from "next/image";

{
  /* Estilos */
}
import styles from "./NavBar.module.css";

{
  /* React-icons */
}
import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { createPortal } from "react-dom";

interface NavBarProps {
  isOpen: boolean;
  toggleMenu: () => void;
  menuRef: React.RefObject<HTMLDivElement>;
}

export default function NavBar({ isOpen, toggleMenu, menuRef }: NavBarProps) {
 
  const menuContent = (
    <div className={styles.MenuOptions} ref={menuRef}>
      <div className={styles.LinksMenu}>
        <Link className={styles.LinksDefault} href={"/"} passHref>
          <span>Home</span>
        </Link>
        <Link className={styles.LinksDefault} href={"/#projects"} passHref>
          <span>Projetos</span>
        </Link>
        <Link className={styles.LinksDefault} href={"/#technologies"} passHref>
          <span>Tecnologias</span>
        </Link>
        <Link
          className={styles.LinksDefault}
          href={"/#additionalSkills"}
          passHref
        >
          <span>Habilidades</span>
        </Link>
        <Link className={styles.LinksDefault} href={"/#aboutMe"} passHref>
          <span>Sobre mim</span>
        </Link>
      </div>
    </div>
  );

  return (
    <header className={styles.HeaderNavBar}>
      <nav className={styles.NavBar}>
        <section className={styles.ContainerLogo}>
          <div>
            <Link className={styles.MyName} href={"/"} passHref>
              <p>
                Micael<span>Dev</span>
              </p>
            </Link>
          </div>
        </section>

        <section className={styles.SectionLinks}>
          <div className={styles.ContainerLinks}>
            <Link className={styles.LinksDefault} href={"/#projects"} passHref>
              <span>Projetos</span>
            </Link>
            <Link
              className={styles.LinksDefault}
              href={"/#technologies"}
              passHref
            >
              <span>Tecnologias</span>
            </Link>
            <Link
              className={styles.LinksDefault}
              href={"/#additionalSkills"}
              passHref
            >
              <span>Habilidades</span>
            </Link>
            <Link className={styles.LinksDefault} href={"/#aboutMe"} passHref>
              <span>Sobre mim</span>
            </Link>
          </div>
        </section>

        <section className={styles.SocialNetworks}>
          <div>
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
          <menu className={styles.Menu}>
            <div>
              <button onClick={toggleMenu}>
                <Image
                  src={"/Images/menu.svg"}
                  width={30}
                  height={30}
                  alt={"Icon Menu"}
                />
              </button>
            </div>
            {isOpen && createPortal(menuContent, document.body)}
          </menu>
        </section>
      </nav>
    </header>
  );
}
