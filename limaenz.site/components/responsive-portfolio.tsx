"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Code2, Menu } from "lucide-react";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import profilePic from "@/app/assets/me.jpeg";

export function ResponsivePortfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode !== null ? isDarkMode : true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div
      className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Code2 className="mr-2 h-6 w-6" />
            <span>Enzo Lima</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Alternar modo escuro</span>
            </Button>
            <div className="hidden md:flex space-x-4">
              <Link
                href="#about"
                className="hover:text-blue-500 dark:hover:text-blue-400"
              >
                Sobre
              </Link>
              <Link
                href="#projects"
                className="hover:text-blue-500 dark:hover:text-blue-400"
              >
                Projetos
              </Link>
              <Link
                href="#articles"
                className="hover:text-blue-500 dark:hover:text-blue-400"
              >
                Artigos
              </Link>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Alternar menu</span>
            </Button>
          </div>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 py-2">
            <Link
              href="#about"
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Sobre
            </Link>
            <Link
              href="#projects"
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Projetos
            </Link>
            <Link
              href="#articles"
              className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Artigos
            </Link>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src={profilePic}
              alt="Enzo Lima"
              width={300}
              height={300}
              className="rounded-full bg-gray-200 dark:bg-gray-700 w-48 h-48 md:w-64 md:h-64"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h1>
              <p className="text-lg md:text-xl mb-4">Em construção...</p>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link href="#contact">Entrar em contato</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1].map((project) => (
              <Card
                key={project}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardHeader>
                  <CardTitle>Projeto {project}</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Em construção...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Em construção...</p>
                  <Button
                    asChild
                    className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link href={`#project-${project}`}>Ver Projeto</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="articles" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Artigos Recentes
          </h2>
          <div className="space-y-6">
            {[1].map((article) => (
              <Card
                key={article}
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardHeader>
                  <CardTitle>Em construção</CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Publicado em: {new Date().toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Um breve trecho do artigo vai aqui...</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full md:w-auto border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                  >
                    <Link href={`#article-${article}`}>Leia Mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-200 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            Conecte-se comigo
          </h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <Link
                href="https://github.com/limaenz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuGithub className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              <Link
                href="https://linkedin.com/in/limaenz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Enzo Lima. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
