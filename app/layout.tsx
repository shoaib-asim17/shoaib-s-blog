
import "../styles/globals.css"

export const metadata = {
  title: "sh-Blog",
  description: 'A blog for personal needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    
    <html>

      <body className="bg-sky-950" >
        <header>
          <h1>MOHAMMED SHOAIB ASIM</h1>
          <p>A simple guy.</p>
          <hr />
        </header>

        {children}

        <footer>
            <hr />
          <h3>Designed by shoaib asim  </h3>
          <p>Copyrights reserved by Shoaib Asim</p>
        </footer>
      </body>
    </html>
    
    
  )
}
