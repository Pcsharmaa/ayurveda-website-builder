import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "benefits-of-panchakarma",
    title: "5 Life-Changing Benefits of Panchakarma Therapy",
    excerpt: "Discover how this ancient detoxification therapy can transform your health, boost immunity, and restore vitality naturally.",
    category: "Treatments",
    date: "Feb 10, 2026",
  },
  {
    slug: "ayurvedic-winter-tips",
    title: "Ayurvedic Tips to Stay Healthy This Winter",
    excerpt: "Learn how to balance your doshas during the cold season with warming foods, herbal teas, and Ayurvedic daily routines.",
    category: "Seasonal Health",
    date: "Jan 25, 2026",
  },
  {
    slug: "home-remedies-digestion",
    title: "10 Ayurvedic Home Remedies for Better Digestion",
    excerpt: "Simple, effective home remedies from the Ayurvedic tradition to improve your digestive health and eliminate toxins.",
    category: "Home Remedies",
    date: "Jan 15, 2026",
  },
  {
    slug: "understanding-doshas",
    title: "Understanding Your Dosha: Vata, Pitta & Kapha",
    excerpt: "A beginner's guide to identifying your Ayurvedic body type and how it influences your health, diet, and lifestyle.",
    category: "Lifestyle",
    date: "Jan 5, 2026",
  },
  {
    slug: "stress-relief-ayurveda",
    title: "Natural Stress Relief Through Ayurveda",
    excerpt: "Explore Ayurvedic techniques including Shirodhara, Abhyanga, and herbal supplements for managing stress and anxiety.",
    category: "Wellness",
    date: "Dec 20, 2025",
  },
  {
    slug: "turmeric-healing",
    title: "The Healing Power of Turmeric in Ayurveda",
    excerpt: "Why turmeric is considered the golden spice of Ayurveda and how to incorporate it into your daily wellness routine.",
    category: "Home Remedies",
    date: "Dec 10, 2025",
  },
];

const Blog = () => (
  <>
    <title>Ayurvedic Blog | Health Tips & Natural Remedies</title>

    <section className="bg-hero-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-accent font-medium text-sm uppercase tracking-widest">Knowledge Hub</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
            Ayurvedic Insights & Tips
          </h1>
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Card className="h-full hover:shadow-elevated transition-shadow bg-background group">
                <CardContent className="p-6 flex flex-col h-full">
                  <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                    {post.category}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-foreground mt-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                    <span className="text-sm font-medium text-primary flex items-center gap-1">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
