import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Research Outline Generator",
    description:
      "Multi-agent AI system that automatically researches topics and generates comprehensive outlines with summaries by orchestrating specialized agents for search, web scraping, analysis, and synthesis.",
    tech: ["FastAPI", "LangGraph", "LangChain", "Streamlit", "OpenAI GPT-4o-mini", "Tavily API", "Railway"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/research-assistant',
    liveLink: 'https://research-assistant.mariaclima.ai',
  },
  {
    title: "Constitution Assistant",
    description:
      "AI-powered conversational chatbot that answers questions about the constitution using RAG (Retrieval-Augmented Generation) and featuring conversation memory.",
    tech: ["Next.js", "LangChain", "OpenAI GPT-4o-mini", "MemoryVectorStore", "pdf-parse", "Tailwind", "React", "JavaScript"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/constitution-assistant',
    liveLink: 'https://constitution-assistant.mariaclima.ai',
  },
  {
    title: "Generic Chatbot",
    description:
      "AI-powered conversational interface using Groq's lightning-fast LLM inference and featuring conversation memory.",
    tech: ["Groq with Llama 4 Scout", "Serper API", "Next.js", "Tailwind", "React", "TypeScript"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/groq-chatbot',
    liveLink: 'https://chat.mariaclima.ai',
  },
  {
    title: "Image Generator",
    description:
      "Generate creative posters and banners using AI models with an intuitive interface.",
    tech: ["OpenAI DALL-E 2", "Next.js", "Tailwind", "React", "TypeScript", "Vercel"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/image-generator',
    liveLink: 'https://images.mariaclima.ai',
  },
  {
    title: "Task System",
    description:
      "Intelligent task management powered by AI with long-term memory to optimize productivity.  Code from LangChain Academy learning course.",
    tech: ["OpenAI","LangGraph", "LangChain", "Python", "Docker", "Trustcall", "Pydantic"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/task-maestro',
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
