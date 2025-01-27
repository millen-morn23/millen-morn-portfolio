import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-primary">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            I am a tech-savvy and hardworking individual with a strong passion for software development 
            and cybersecurity. With a foundation in administrative skills and coding, I aim to create 
            impactful technological solutions.
          </p>
          <p className="text-lg leading-relaxed">
            My professional journey includes completing BYU Pathway programs and pursuing a major in 
            Software Development at BYU-Idaho. Based in Nairobi, Kenya, I bring a unique perspective 
            and dedication to every project I undertake.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;