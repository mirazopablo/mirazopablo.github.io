"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import profilePic from "../assets/photo.jpg"
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    Code2,
    Database,
    Server,
    Layers,
    Globe,
    ChevronRight,
    Terminal,
    Cpu,
} from "lucide-react"

const translations = {
    ES: {
        hero: {
            role: "Desarrollador Full Stack",
            bio: "Estudiante avanzado de Ingenieria En Informatica. Desarrollador junior Full Stack, arquitectura y DevOps, como asi tambien la optimizacion de bases de datos relacionales.",
            cta: "Ver Proyectos",
        },
        sections: {
            stack: "Stack Tecnológico",
            projects: "Proyectos Destacados",
            contact: "Contacto",
        },
        skills: {
            languages: "Lenguajes",
            frameworks: "Frameworks & Herramientas",
            databases: "Bases de Datos",
            devops: "Infraestructura & DevOps",
        },
        projects: [
            {
                title: "Viking App - Backend API",
                desc: "Infraestructura central para el ecosistema Viking App. Gestiona el ciclo de vida completo de reparaciones, desde la recepción hasta la entrega. Arquitectura monolítica modular.",
                tech: ["Java", "Spring Boot", "MySQL", "Docker", "JWT"],
                link: "https://github.com/mirazopablo/Viking-App-Back",
            },
            {
                title: "Miel-IA - Backend | Intelligent Medical Diagnosis",
                desc: "API RESTful de alto rendimiento que orquestra un ensamble híbrido de ML (Random Forest, XGBoost, Regresión Logística) para la detección temprana del Síndrome de Guillain-Barré.",
                tech: ["Python", "FastAPI", "TensorFlow/Keras", "Scikit-Learn"],
                link: "https://github.com/mirazopablo/miel-ia",
            },
            {
                title: "Miel-IA - Frontend | Intelligent Medical Diagnosis",
                desc: "Interfaz web moderna para el ecosistema Miel-IA. Paneles personalizados para médicos, administradores y pacientes con visualizaciones de riesgo y explicabilidad (XAI).",
                tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
                link: "https://github.com/mirazopablo/miel-ia-front",
            },
        ],
    },
    EN: {
        hero: {
            role: "Full Stack Developer",
            bio: "Advanced student of Computer Engineering. Junior Full Stack developer, architecture and DevOps, as well as relational database optimization.",
            cta: "View Projects",
        },
        sections: {
            stack: "Tech Stack",
            projects: "Featured Projects",
            contact: "Contact",
        },
        skills: {
            languages: "Languages",
            frameworks: "Frameworks & Tools",
            databases: "Databases",
            devops: "Infrastructure & DevOps",
        },
        projects: [
            {
                title: "Viking App - Backend API",
                desc: "Core infrastructure for the Viking App ecosystem. Manages the entire repair lifecycle, from device intake to final delivery. Modular monolithic architecture.",
                tech: ["Java", "Spring Boot", "MySQL", "Docker", "JWT"],
                link: "https://github.com/mirazopablo/Viking-App-Back",
            },
            {
                title: "Miel-IA - Backend | Intelligent Medical Diagnosis",
                desc: "High-performance RESTful API orchestrating a hybrid ML ensemble (Random Forest, XGBoost, Logistic Regression) for the early detection of Guillain-Barré Syndrome.",
                tech: ["Python", "FastAPI", "TensorFlow/Keras", "Scikit-Learn"],
                link: "https://github.com/mirazopablo/miel-ia",
            },
            {
                title: "Miel-IA - Frontend | Intelligent Medical Diagnosis",
                desc: "Modern web interface for the Miel-IA ecosystem. Tailored dashboards for doctors, admins, and patients with risk visualizations and explainability (XAI).",
                tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
                link: "https://github.com/mirazopablo/miel-ia-front",
            },
        ],
    },
}

export default function Portfolio() {
    const [lang, setLang] = useState<"ES" | "EN">("ES")
    const t = translations[lang]

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 font-sans">
            <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="text-lg font-bold tracking-tighter text-indigo-500">Pablo Mirazo</span>
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => setLang(lang === "ES" ? "EN" : "ES")}
                            className="flex items-center gap-2 text-sm font-medium hover:text-indigo-400 transition-colors px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900"
                        >
                            <Globe size={14} />
                            {lang === "ES" ? "EN" : "ES"}
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row items-center gap-24">
                        <div className="relative group shrink-0">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative w-80 h-80 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden shadow-2xl">
                                <Image
                                    src={profilePic}
                                    alt="Pablo Mirazo"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                                Pablo <span className="text-indigo-500">Mirazo</span>
                            </h1>
                            <p className="text-xl text-indigo-400 font-medium mb-6 uppercase tracking-widest">{t.hero.role}</p>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-8">{t.hero.bio}</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <a
                                    href="#projects"
                                    className="bg-zinc-100 text-zinc-950 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all flex items-center gap-2"
                                >
                                    {t.hero.cta} <ChevronRight size={18} />
                                </a>
                                <div className="flex gap-2">
                                    <SocialIcon href="https://github.com/mirazopablo" icon={<Github size={20} />} />
                                    <SocialIcon href="https://linkedin.com/in/pmirazo" icon={<Linkedin size={20} />} />
                                    <SocialIcon href="mailto:mirazopablo@gmail.com" icon={<Mail size={20} />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <div className="h-8 w-1 bg-indigo-500 rounded-full" />
                        {t.sections.stack}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <SkillCard
                            icon={<Code2 className="text-indigo-400" />}
                            title={t.skills.languages}
                            items={["Python", "Java", "Go", "SQL"]}
                        />
                        <SkillCard
                            icon={<Server className="text-indigo-400" />}
                            title={t.skills.frameworks}
                            items={["FastAPI", "Flask", "Spring Boot"]}
                        />
                        <SkillCard
                            icon={<Database className="text-indigo-400" />}
                            title={t.skills.databases}
                            items={["PostgreSQL", "MySQL", "Redis", "MongoDB"]}
                        />
                        <SkillCard
                            icon={<Layers className="text-indigo-400" />}
                            title={t.skills.devops}
                            items={["Docker", "Kubernetes", "CI/CD", "AWS"]}
                        />
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                        <div className="h-8 w-1 bg-indigo-500 rounded-full" />
                        {t.sections.projects}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {t.projects.map((project, i) => (
                            <ProjectCard key={i} {...project} />
                        ))}
                    </div>
                </section>

                {/* Contact Footer */}
                <section className="border-t border-zinc-800 pt-16 text-center">
                    <h2 className="text-2xl font-bold mb-8">{t.sections.contact}</h2>
                    <div className="flex justify-center gap-8 text-zinc-400">
                        <a href="https://github.com/mirazopablo" className="hover:text-indigo-400 transition-colors">
                            Github
                        </a>
                        <a href="https://linkedin.com/in/pmirazo" className="hover:text-indigo-400 transition-colors">
                            LinkedIn
                        </a>
                        <a href="mailto:mirazopablo@gmail.com" className="hover:text-indigo-400 transition-colors">
                            Email
                        </a>
                    </div>
                    <p className="mt-12 text-sm text-zinc-600">
                        © {new Date().getFullYear()} Pablo Mirazo.
                    </p>
                </section>
            </main>
        </div>
    )
}

function SkillCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
    return (
        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 transition-colors group">
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-bold mb-4 text-zinc-100">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function ProjectCard({ title, desc, tech, link }: { title: string; desc: string; tech: string[]; link: string }) {
    return (
        <div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all flex flex-col">
            <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-4">
                    <Cpu className="text-indigo-500 opacity-50" size={32} />
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-zinc-800 rounded-lg text-zinc-300 hover:text-white hover:bg-indigo-600 transition-all"
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{title}</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">{desc}</p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700 group-hover:border-indigo-500/30 transition-colors"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/50 transition-all"
        >
            {icon}
        </a>
    )
}
