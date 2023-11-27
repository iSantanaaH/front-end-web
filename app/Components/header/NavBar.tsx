import Image from "next/image";
import Link from "next/link";

import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={styles.NavBar}>
        <div className={styles.ContentNavBar}>
          <section className={styles.SectionPhoto}>
            <figure>
              <Image src={""} width={100} height={100} alt="Minha Foto"></Image>
            </figure>
          </section>

          <section className={styles.SectionLinks}>
            <Link href={"/"}>Projetos</Link>
            <Link href={"/"}>Tecnologias</Link>
            <Link href={"/"}>Sobre mim</Link>
          </section>

          <section className={styles.SocialNetworks}>
            <Image
              src={
                "https://icongr.am/devicon/linkedin-original.svg?size=100&color=currentColor"
              }
              width={100}
              height={100}
              alt="Linkedin"
            />
          </section>
        </div>
      </nav>
    </>
  );
}
