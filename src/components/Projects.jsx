import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "US Stock Analysis",
    description:
      "AI-powered US stock analysis dashboard with real-time data visualization and intelligent insights. Features OpenAI GPT-4o-mini integration for market analysis, LangChain for agent orchestration, and ChromaDB for RAG-based context retrieval. Includes interactive charts, news aggregation with sentiment analysis, and historical data analysis. Built with rate limiting, caching strategies, and free-tier API optimization.",
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'OpenAI GPT-4o-mini', 'LangChain', 'RAG', 'ChromaDB', 'Polygon.io API', 'Recharts', 'Axios', "Railway", "Vercel"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/stock-agent',
    liveLink: 'https://stock-agent.mariaclima.ai',
  },
//   {
//     title: "Agentic Tech Job Board",
//     description:
//       "AI-powered job aggregation platform using LangGraph multi-agent architecture to automatically collect, classify, and match tech jobs from multiple sources. Features intelligent resume matching with AI-powered skill extraction, role categorization, and personalized job recommendations. Built with parallel agent ingestion, PostgreSQL deduplication, and real-time job filtering.",
//     tech: ["LangGraph", "FastAPI", "Next.js", "PostgreSQL", "OpenAI GPT-4o-mini", "Python", "TypeScript", "TailwindCSS", "Railway", "Vercel"],
//     githubLink: 'https://github.com/mclima/generative-ai/tree/main/job-board',
//     liveLink: 'https://job-board.mariaclima.ai',
// },
  {
    title: "US Constitution Assistant",
    description:
      "AI-powered conversational chatbot that answers questions about the US Constitution using RAG (Retrieval-Augmented Generation). Features PDF document processing with automatic text chunking, OpenAI embeddings for vector representation, and MemoryVectorStore for similarity-based retrieval. Includes conversation memory for context-aware follow-up questions and accessible, responsive design.",
    tech: ["Next.js", "LangChain", "OpenAI GPT-4o-mini", "RAG", "MemoryVectorStore", "OpenAI Embeddings", "pdf-parse", "Tailwind", "React", "JavaScript", "Vercel"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/constitution-assistant',
    liveLink: 'https://constitution-assistant.mariaclima.ai',
  },
  {
    title: "NewsGenie",
    description:
      "AI-powered news and information assistant that combines real-time news updates with conversational AI. Features smart query classification, multi-source integration (GNews + Tavily), and LangGraph workflow orchestration for intelligent routing between news requests and general queries.",
    tech: ["LangGraph", "Streamlit", "OpenAI GPT-4o-mini", "GNews API", "Tavily", "Python", "Railway"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/newsgenie',
    liveLink: 'https://news-genie.mariaclima.ai',
  },
  {
    title: "Research Outline Generator",
    description:
      "Multi-agent AI research system that autonomously investigates topics and generates comprehensive outlines with detailed summaries. Features LangGraph orchestration of specialized agents: a search agent using Tavily API for web discovery, a scraping agent for content extraction, an analysis agent for information synthesis, and an outline generation agent. Built with sequential workflow architecture for reliable research pipeline execution and structured output generation.",
    tech: ["FastAPI", "LangGraph", "LangChain", "Streamlit", "OpenAI GPT-4o-mini", "Tavily API", "Railway"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/research-assistant',
    liveLink: 'https://research-assistant.mariaclima.ai',
  },
  {
    title: "Generic Chatbot",
    description:
      "AI-powered conversational chatbot leveraging Groq's ultra-fast LLM inference with Llama 4 Scout for near-instantaneous responses. Features conversation memory for context-aware interactions, Serper API integration for real-time web search capabilities, and a clean, responsive interface. Optimized for speed and user experience with streaming responses and minimal latency.",
    tech: ["Groq with Llama 4 Scout", "Serper API", "Next.js", "Tailwind", "React", "TypeScript", "Vercel"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/groq-chatbot',
    liveLink: 'https://chat.mariaclima.ai',
  },
  {
    title: "Image Generator",
    description:
      "AI-powered image generation tool using OpenAI's DALL-E 2 to create custom posters, banners, and visual content from text prompts. Features an intuitive interface for prompt engineering, real-time image generation, and high-quality output suitable for marketing materials and creative projects. Built with responsive design for seamless creation across devices.",
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
