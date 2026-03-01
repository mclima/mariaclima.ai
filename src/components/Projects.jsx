import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "US Stock Assistant",
    description:
      "AI-powered stock dashboard demonstrating complete end-to-end Model Context Protocol (MCP) integration - the 'USB-C for AI' universal standard. Implements 11 MCP tools across 3 servers using official FastMCP framework (server-side) and MCP Python SDK (client-side), solving the M×N integration problem with automatic tool discovery and schema introspection. Features FinBERT (ProsusAI/finbert) for 70-90%+ sentiment confidence on financial news, GPT-4o-mini for AI analysis, real-time WebSocket price streaming, Redis caching, and interactive portfolio tracking. Showcases production-ready MCP deployment on Railway with HTTP/SSE transport, demonstrating interoperability with any MCP-compatible AI client.",
    tech: ['MCP Protocol', 'FastMCP', 'MCP Python SDK', 'Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'OpenAI GPT-4o-mini', 'LangChain', 'FinBERT', 'Redis', 'PostgreSQL', 'WebSocket', 'Polygon.io', 'Docker', 'Railway', 'Vercel'],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/us-stock-assistant',
    liveLink: 'https://stock-agent.mariaclima.ai',
  },
  {
    title: "Tech Job Board",
    description:
      "AI-powered tech job board with intelligent resume matching and personalized insights. Aggregates remote US tech jobs, stores them in PostgreSQL with pre-computed embeddings for fast matching (~15-20 seconds). Resume upload enables personalized job rankings using a hybrid ML algorithm: 40% skills overlap, 35% semantic similarity (Sentence Transformers), and 25% title alignment. Top 5 matches (80%+ scores) receive AI-generated explanations via GPT-4o-mini highlighting aligned skills and growth opportunities.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Sentence Transformers", "OpenAI GPT-4o-mini", "LangChain", "scikit-learn", "Python", "TypeScript", "Tailwind CSS", "Railway", "Vercel", "GitHub Actions"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/tech-job-board',
    liveLink: 'https://tech-job-board.mariaclima.ai',
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
    title: "Business Assistant",
    description:
      "AI-powered business intelligence assistant leveraging RAG (Retrieval-Augmented Generation) to analyze business data and generate actionable insights. Features interactive visualizations, conversational AI interface, PDF document retrieval with FAISS vector store, and LangSmith-powered model evaluation. Built with modern LLMOps best practices.",
    tech: ["Streamlit", "LangChain", "OpenAI GPT-3.5", "FAISS", "LangSmith", "Plotly", "Pandas", "Python", "RAG", "Railway"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/business-assistant',
    liveLink: 'https://business-assistant.mariaclima.ai',
  },
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
    title: "AI Chat Assistant",
    description:
      "AI-powered conversational chatbot leveraging Groq's ultra-fast LLM inference with Llama 4 Scout for near-instantaneous responses. Features conversation memory for context-aware interactions, Serper API integration for real-time web search capabilities, and a clean, responsive interface. Optimized for speed and user experience with streaming responses and minimal latency.",
    tech: ["Groq with Llama 4 Scout", "Serper API", "Next.js", "Tailwind", "React", "TypeScript", "Vercel"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/groq-chatbot',
    liveLink: 'https://chat.mariaclima.ai',
  },
  {
    title: "VisionAssist",
    description:
      "Real-time object detection web app designed to assist visually impaired users. Detects 90 common objects using COCO-SSD model with audio announcements. Features privacy-first architecture with all processing happening client-side in the browser, achieving 50-60 FPS on M3 Pro. Includes smart audio feedback that announces detected objects on change or every 5 seconds.",
    tech: ["Next.js", "React", "TypeScript", "TensorFlow.js", "COCO-SSD", "Tailwind CSS", "shadcn/ui", "WebGL", "Web Speech API", "Vercel"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/vision-assist',
    liveLink: 'https://vision-assist.mariaclima.ai',
  },
  {
    title: "Image Generator",
    description:
      "AI-powered image generation tool using OpenAI's DALL-E 2 to create custom posters, banners, and visual content from text prompts. Features an intuitive interface for prompt engineering, real-time image generation, and high-quality output suitable for marketing materials and creative projects. Built with responsive design for seamless creation across devices.",
    tech: ["OpenAI DALL-E 2", "Next.js", "Tailwind", "React", "TypeScript", "Vercel"],
    githubLink: 'https://github.com/mclima/generative-ai/tree/main/image-generator',
    liveLink: 'https://images.mariaclima.ai',
  },
  // {
  //   title: "Task System",
  //   description:
  //     "Intelligent task management powered by AI with long-term memory to optimize productivity.  Code from LangChain Academy learning course.",
  //   tech: ["OpenAI","LangGraph", "LangChain", "Python", "Docker", "Trustcall", "Pydantic"],
  //   githubLink: 'https://github.com/mclima/generative-ai/tree/main/task-maestro',
  // }
];

export default function Projects() {
  return (
    <section aria-labelledby="projects-title">
      <h2 id="projects-title">AI Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
