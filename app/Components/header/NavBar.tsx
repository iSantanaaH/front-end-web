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
    <>
      <nav className={styles.NavBar}>
        <section className={styles.SectionPhoto}>
          <figure>
            <Image
              src={"/Images/micael.png"}
              width={100}
              height={100}
              alt="Minha Foto"
              className="DevPhoto"
            ></Image>
          </figure>
        </section>

        <section className={styles.SectionLinks}>
          <Link href={"/"}>Projetos</Link>
          <Link href={"/"}>Tecnologias</Link>
          <Link href={"/"}>Sobre mim</Link>
        </section>

        <section className={styles.SocialNetworks}>
          <FaLinkedin />
          <FaInstagramSquare />
          <FaGithub />
        </section>
      </nav>
    </>
  );
}
