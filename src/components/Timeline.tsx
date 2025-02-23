
import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "Present",
    title: "BYU-Idaho & KCA University",
    description: "Pursuing Software Development major at BYU-Idaho and Applied Computing degree at KCA University",
  },
  {
    year: "2022-2024",
    title: "Missionary Service",
    description: "Kenya Nairobi East Mission - District Leader, Trainer, and Office Elder",
  },
  {
    year: "2020",
    title: "High School Diploma",
    description: "Scored 75 points in Kenya's KCSE system",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Education & Experience</h2>
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6 mb-8"
            >
              <div className="w-24 flex-shrink-0 text-right">
                <span className="text-secondary font-semibold">{item.year}</span>
              </div>
              <div className="flex-grow border-l-2 border-secondary pl-6 pb-8 relative">
                <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[7px] top-2" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
