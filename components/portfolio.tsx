"use client";

import { useState, useEffect, ReactNode } from "react";
import {
  Moon,
  Sun,
  Code2,
  ExternalLink,
  FileDown,
  Mail,
  Linkedin,
  Github,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const profilePic = "/me.jpeg";

const projects = [
  {
    id: 1,
    title: "Rinha de Backend",
    description:
      "Desafio com diversas regras de desenvolver uma API HTTP de controle de concorrência com o tema créditos e débitos.",
    url: "https://github.com/limaenz/rinha-de-backend-2024-q1-dotnet",
  },
  {
    id: 2,
    title: "Finança em foco",
    description:
      "Aplicativo nativo android para gestão de finanças com features de cadastrar despesas e metas com feedback e análise do seu desempenho. - Feito com Java e Firebase.",
    url: "https://github.com/limaenz/financa-em-foco-app",
  },
  {
    id: 3,
    title: "API EcoMapa",
    description:
      "API Rest para cadastrar e armazenar pontos sustentáveis com latitudes e longitude.",
    url: "https://github.com/limaenz/ecomapa-api-c-sharp",
  },
  {
    id: 4,
    title: "Fio Agulha",
    description: "Aplicativo mobile (Android/IOS) feito em react native.",
    url: "https://github.com/limaenz/ecomapa-api-c-sharp",
  },
];

const articles = [
  {
    id: 0,
    title: "[Em construção]",
    description: "",
    url: "",
  },
];

const experiences = [
  {
    id: 1,
    company: "Upper",
    role: "Software Engineer",
    period: "2022-o momento",
    description:
      "Desenvolvimento de aplicações (Android/IOS, Windows Services, APIs REST, Addon SAP B1) para indústrias de diversos segmentos e franquias (McDonald's) utilizando as tecnologias React Native, TypeScript, .NET, AWS, Azure DevOps, Docker, SQL Server, HANA, Design Patterns e Testes de Unidade e Integração.",
  },
];

const navItems = [
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Artigos", href: "#articles" },
  { name: "Experiência", href: "#experience" },
];

const FadeInSection = ({ children }: { children: ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export function PortfolioComponent() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") !== "false";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-indigo-900 text-indigo-900 dark:text-indigo-100 transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <header className="sticky top-0 z-10 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border-b border-indigo-200/20 dark:border-gray-700/20">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Code2 className="mr-2 h-6 w-6" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-300 dark:to-purple-400">
              Enzo Lima
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="relative px-2 py-1 overflow-hidden group"
                >
                  <span className="relative z-10 text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-300 dark:to-purple-400 transition-colors duration-200 ease-in-out group-hover:from-indigo-500 group-hover:to-purple-400">
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-500 transform scale-x-0 transition-transform duration-200 ease-in-out group-hover:scale-x-100"></span>
                </a>
              ))}
            </div>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </nav>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/10 dark:bg-gray-800/10 backdrop-blur-md py-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-500 hover:to-purple-400 transition-all duration-200"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 space-y-16">
        <FadeInSection>
          <section
            id="about"
            className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-12 mb-20"
          >
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-300 dark:to-purple-400">
                Sobre Mim
              </h2>
              <p className="text-lg text-indigo-700 dark:text-indigo-300">
                Olá, me chamo Enzo e sou apaixonado por este mundo de
                tecnologias e amo criar soluções e resolver problemas utilizando
                elas.
              </p>

              <p className="text-lg text-indigo-700 dark:text-indigo-300">
                Moro no interior de São Paulo, e trabalho como Engenheiro de
                Software - algo que começou como curiosidade e virou uma
                verdadeira paixão! O que mais me move é o desafio de resolver
                problemas.
              </p>

              <p className="text-lg text-indigo-700 dark:text-indigo-300">
                Tenho experiência atuando em soluções para franquias e indústria
                de diversos segmentos como importação, produção e qualidade.
                Realizando manutenções e escalando projetos com estruturas
                variadas e legadas sendo necessário Rewriting e Refactoring.
              </p>

              <p className="text-lg text-indigo-700 dark:text-indigo-300">
                Criando APIs Rest, Windows Services, Web Services, Mobile
                Android / IOS, Addon SAP B1 e integrações de sistemas externos.
              </p>

              <p className="text-lg text-indigo-700 dark:text-indigo-300">
                Atuando com diversas tecnologias como: .NET, SQL Server, Docker,
                AWS, Azure DevOps, ReactNative, TypeScript, CI/CD, Design
                Patterns, Microsserviços, Testes de Unidade e Integração.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300"
                >
                  <a
                    href="mailto:enzolimafranca@gmail.com"
                    className="flex items-center hover:text-blue-500 transition-colors"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Entre em contato
                  </a>
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end mb-8 md:mb-0">
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={profilePic}
                  alt="Enzo Lima"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 hover:scale-105"
                />
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-800 dark:from-indigo-300 dark:to-purple-400">
              Projetos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-indigo-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{project.description}</p>
                        <div className="flex items-center text-indigo-700 dark:text-indigo-300">
                          Visualizar Projeto
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="articles" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-800 dark:from-indigo-300 dark:to-purple-400">
              Artigos
            </h2>
            <div className="space-y-4">
              {articles.map((article) => (
                <motion.div
                  key={article.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={article.url}>
                    <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-indigo-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <CardHeader>
                        <CardTitle>{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{article.description}</p>
                        <div className="mt-2 text-indigo-700 dark:text-indigo-300">
                          Ler Mais
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="experience" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-800 dark:from-indigo-300 dark:to-purple-400">
              Experiência Profissional
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-indigo-200 dark:border-gray-700 shadow-md">
                    <CardHeader>
                      <CardTitle>{exp.company}</CardTitle>
                      <p className="text-sm text-indigo-600 dark:text-indigo-300">
                        {exp.role} | {exp.period}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p>{exp.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="download-cv" className="flex justify-center mb-20">
            <Button
              asChild
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-lg py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/cv-enzo-lima.pdf" download>
                <FileDown className="mr-2 h-5 w-5" />
                Download CV
              </Link>
            </Button>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section
            id="social-links"
            className="flex justify-center space-x-8 mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-full hover:bg-indigo-200 dark:hover:bg-gray-700 p-3"
              >
                <Link
                  href="https://www.linkedin.com/in/limaenz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-8 w-8" />
                  <span className="sr-only">Perfil do LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-full hover:bg-indigo-200 dark:hover:bg-gray-700 p-3"
              >
                <Link
                  href="https://github.com/limaenz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-8 w-8" />
                  <span className="sr-only">Perfil do GitHub</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="rounded-full hover:bg-indigo-200 dark:hover:bg-gray-700 p-3"
              >
                <a href="mailto:enzolimafranca@gmail.com">
                  <Mail className="h-8 w-8" />
                  <span className="sr-only">Contato por e-mail</span>
                </a>
              </Button>
            </motion.div>
          </section>
        </FadeInSection>
      </main>

      <footer className="bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-gray-800 dark:to-indigo-900 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Enzo Lima. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

        html {
          scroll-behavior: smooth;
          font-family: "Space Grotesk", sans-serif;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
        .group:hover .group-hover\\:from-cyan-400 {
          --tw-gradient-from: #22d3ee;
          --tw-gradient-stops: var(--tw-gradient-from),
            var(--tw-gradient-to, rgba(34, 211, 238, 0));
        }
        .group:hover .group-hover\\:to-purple-400 {
          --tw-gradient-to: #c084fc;
        }
      `}</style>
    </div>
  );
}
