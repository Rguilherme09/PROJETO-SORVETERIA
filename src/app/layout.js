import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape";

import "./globals.css";

export const metadata = {
  title: "Gelateria Artesanal",
  description: "Site utilizado para consumo de informações sobre a gelateria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}