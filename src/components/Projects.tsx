import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Chatbot",
    description: "Developed a dynamic, context-aware chatbot using Python with natural language processing capabilities.",
    tags: ["Python", "NLTK", "AI"],
    link: "#",
  },
  {
    title: "Movie Shop Management",
    description: "Operated and managed a movie shop, implementing systems for inventory and customer management.",
    tags: ["Business", "Management", "Customer Service"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                  {project.title}
                  <a href={project.link} className="text-secondary hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;