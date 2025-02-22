import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold">Hey, I'm [Harsh Chaudhary]</h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4">Frontend Developer | Cybersecurity Enthusiast</p>
      </section>
      
      {/* About Section */}
      <section className="max-w-3xl mx-auto text-center py-10">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-gray-400 mt-4">
          Passionate about crafting beautiful web experiences and building secure applications.
          I specialize in React, Next.js, and Tailwind CSS.
        </p>
      </section>
      
      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-400 mt-2">A brief description of your project.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-400 mt-2">A brief description of your project.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
