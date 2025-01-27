import { motion } from "framer-motion";
import { Phone, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <div className="space-y-6">
            <a
              href="tel:+254740724265"
              className="flex items-center justify-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+254 740 724 265</span>
            </a>
            <a
              href="mailto:millenmorn23@gmail.com"
              className="flex items-center justify-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>millenmorn23@gmail.com</span>
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;