import LogoutButton from "../_components/LogoutButton ";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 md:p-12 relative">
      <div className="absolute flex top-6 right-6">
        <Link className="bg-red-400 text-center py-2 px-4 rounded mr-2 hover:bg-red-500 animate-pulse" href="/"><button>Go to main page</button></Link>
        <LogoutButton />
      </div>
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
          Welcome to My Space 🚀
        </h1>
      </section>
      <section className="max-w-3xl mx-auto text-center py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-400">About Me</h2>
        <p className="text-gray-300 mt-4 leading-relaxed">
          Passionate about crafting beautiful web experiences and building
          secure applications. I specialize in{" "}
          <span className="text-white font-medium">React, Next.js, and Tailwind CSS</span>.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-16">
        <h2 className="text-4xl font-bold text-center text-blue-400">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {[1, 2].map((project) => (
            <div
              key={project}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white">
                Project {project}
              </h3>
              <p className="text-gray-400 mt-2">
                A brief description of your project.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
