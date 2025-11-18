import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Code2, Database, Layers, Sparkles, Zap, Terminal } from "lucide-react";

export default function TimelineDemo() {
  const data = [
    {
      id: 1,
      title: "About Me",
      content: (
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-2xl border border-neutral-700/50 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </h3>
            </div>

            <p className="mb-6 text-sm md:text-base text-neutral-300 leading-relaxed">
              I'm{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Onkar Khedekar
              </span>
              , a passionate Full-Stack Developer specializing in backend
              development, REST APIs, and modern web applications. I work with
              ASP.NET Core, C#, SQL, JavaScript, React, MongoDB, and Node.js.
            </p>

            <div className="flex items-center gap-2 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
              <Zap className="w-5 h-5 text-yellow-400" />
              <p className="text-sm text-neutral-300">
                Building scalable systems and creating meaningful digital
                products that make an impact.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: 2,
      title: "Skills & Expertise",
      content: (
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-2xl opacity-20 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-2xl border border-neutral-700/50 shadow-2xl">
            <p className="mb-6 text-sm md:text-base text-neutral-300 leading-relaxed">
              Full-stack expertise across modern frameworks, backend systems,
              cloud tools, and databases.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group relative p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-neutral-100 font-bold text-lg">Frontend</p>
                </div>
                <ul className="text-neutral-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    React.js
                  </li>
                  <li className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Redux / Context API
                  </li>
                  <li className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                    HTML, CSS, JS
                  </li>
                </ul>
              </div>

              <div className="group relative p-5 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-neutral-100 font-bold text-lg">Backend</p>
                </div>
                <ul className="text-neutral-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    ASP.NET Core MVC
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    .NET / C#
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Node.js + Express
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    Appwrite backend
                  </li>
                </ul>
              </div>

              <div className="group relative p-5 rounded-xl bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-neutral-100 font-bold text-lg">
                    Databases
                  </p>
                </div>
                <ul className="text-neutral-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    SQL Server
                  </li>
                  <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    MySQL
                  </li>
                  <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    MongoDB
                  </li>
                  <li className="flex items-center gap-2 hover:text-green-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    DBMS
                  </li>
                </ul>
              </div>

              <div className="group relative p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg group-hover:scale-110 transition-transform">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-neutral-100 font-bold text-lg">
                    Tools & Others
                  </p>
                </div>
                <ul className="text-neutral-400 space-y-2 text-sm">
                  <li className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    Git & GitHub
                  </li>
                  <li className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    Linux
                  </li>
                  <li className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    CI/CD
                  </li>
                  <li className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                    Power BI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: 3,
      title: "Technologies I Use",
      content: (
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl opacity-20 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 rounded-2xl border border-neutral-700/50 shadow-2xl">
            <p className="mb-6 text-sm md:text-base text-neutral-300 leading-relaxed">
              My daily toolkit for building modern, scalable, and efficient
              applications.
            </p>

           <div className="flex flex-wrap gap-3">
  {[
    { id: 1, name: "React", color: "from-cyan-400 to-blue-500" },
    { id: 2, name: "Redux", color: "from-purple-400 to-pink-500" },
    { id: 3, name: "Tailwind CSS", color: "from-sky-400 to-cyan-500" },
    { id: 4, name: "Next.js", color: "from-neutral-400 to-neutral-600" },
    { id: 5, name: "ASP.NET Core", color: "from-purple-500 to-indigo-600" },
    { id: 6, name: "C#", color: "from-violet-400 to-purple-600" },
    { id: 7, name: "Node.js", color: "from-green-500 to-emerald-600" },
    { id: 8, name: "Express", color: "from-gray-400 to-gray-600" },
    { id: 9, name: "MongoDB", color: "from-green-400 to-teal-600" },
    { id: 10, name: "SQL Server", color: "from-red-500 to-orange-600" },
    { id: 11, name: "Python", color: "from-blue-400 to-yellow-500" },
    { id: 12, name: "Java", color: "from-orange-500 to-red-600" },
    { id: 13, name: "Git", color: "from-orange-400 to-red-500" },
    { id: 14, name: "GitHub", color: "from-gray-700 to-neutral-900" },
    { id: 15, name: "Power BI", color: "from-yellow-400 to-orange-500" },
  ].map((tech) => (
    <span
      key={`tech-${tech.id}`}
      className="group relative px-5 py-2.5 text-xs md:text-sm bg-neutral-800 border border-neutral-700/50 rounded-full text-neutral-300 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg overflow-hidden"
    >
      <span
        className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      ></span>
      <span className="relative font-medium">{tech.name}</span>
    </span>
  ))}
</div>


            <div className="mt-8 p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
              <p className="text-sm text-neutral-300 text-center">
                ✨ <span className="font-semibold text-indigo-400">15+</span>{" "}
                technologies mastered and counting
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full h-auto overflow-clip bg-neutral-950 min-h-screen py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-neutral-950 to-neutral-950"></div>
      <Timeline data={data} />
    </div>
  );
}
