import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "AI Chat",
    description:
      "AI-powered conversational interface using Groq's lightning-fast LLM inference.",
    tech: ["Groq", "Next.js", "React", "TypeScript"],
      githubLink: 'https://github.com/mclima/generative-ai/tree/main/groq-chatbot',
      liveLink: 'https://chat.mariaclima.ai',
  },
  {
    title: "AI Image Generator",
    description:
      "Generate creative images using AI models with an intuitive interface.",
    tech: ["OpenAI", "Next.js", "React", "TypeScript"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/image-generator',
    liveLink: 'https://images.mariaclima.ai',
  },
  {
    title: "AI Task System",
    description:
      "Intelligent task management powered by AI to optimize productivity from LangChain Academy learning course.",
    tech: ["OpenAI","Python", "Docker"],
    githubLink: 'https://github.com/marialima/generative-ai/tree/main/task-maestro',
    liveLink: 'https://tasks.mariaclima.ai/docs',
  }
];

export default function Projects() {
  return (
    <section aria-labelledby="projects-title">
      <h2 id="projects-title">Generative AI Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
