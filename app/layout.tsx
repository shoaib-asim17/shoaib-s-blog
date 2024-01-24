import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-stone-950 p-8 my-6 rounded-md">
        <Image 
          src="/logo.jpg"
          
          width={100}
          height={100}
          className="mx-auto rounded-full "
          alt={"logo"}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">MOHAMMED SHOAIB ASIM</h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my blog. 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Designed by Shoaib Asim</h3>
        <h4>Copyrights reserved by Shoaib Asim</h4>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body className="bg-stone-900 opacity-100 rounded-3xl bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-pruple-800		">
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}