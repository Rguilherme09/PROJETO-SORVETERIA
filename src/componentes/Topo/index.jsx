import Link from "next/link";
import Image from "next/image";

import estilos from './Topo.module.css';
import Logo from "../../../public/logo.png";

export default function Topo() {
  return(
    <header className={estilos.topo_container}>
      <div>
        <Link href="/">
            <Image className={estilos.img} src={Logo} alt="logomarca"/>
        </Link>
        <nav>
          <Link href="/" className={estilos.link_topo}>Home</Link>
          <Link href="/Sabores" className={estilos.link_topo}>Sabores</Link>
          <Link href="/Sobre" className={estilos.link_topo}>Sobre</Link>
        </nav>
      </div>
    </header>
  )
}