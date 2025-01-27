import { motion } from "framer-motion";
import { Code2, Shield, Terminal, Globe, Database, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming",
    description: "Python, HTML, CSS, JavaScript",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Security fundamentals, pursuing certification",
  },
  {
    icon: Terminal,
    title: "Development",
    description: "Software development, AI chatbots",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    description: "Frontend development basics",
  },
  {
    icon: Database,
    title: "Systems",
    description: "Basic system administration",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Team management, training",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <skill.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;