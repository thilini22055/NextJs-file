import type { Metadata } from "next";
import Link from "next/link";
import style from './globals.module.css';
export const metadata: Metadata = {
  title: "My App",
  description: "Example Next.js App Layout",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
  <div>
       <main>
            {children}
          </main>
      <footer className={style.footer}>
        <p>&copy; 2025 MyApp. All rights reserved.</p>
      </footer>
        </div>
      </body>
    </html>
  );
}
