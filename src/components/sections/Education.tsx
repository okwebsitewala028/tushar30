import { BookOpen, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ARTICLES = [
  {
    title: "Understanding GST Impact on Digital Services",
    date: "May 15, 2024",
    category: "GST Advisory",
    excerpt: "A deep dive into how recent GST amendments affect SaaS and digital service providers in India."
  },
  {
    title: "New Income Tax Disclosure Requirements for FY 24-25",
    date: "April 10, 2024",
    category: "Direct Tax",
    excerpt: "A comprehensive guide on the updated reporting standards for high-value transactions and foreign assets."
  },
  {
    title: "Internal Audit Best Practices for Growing Enterprises",
    date: "March 22, 2024",
    category: "Audit",
    excerpt: "Transitioning from simple bookkeeping to robust internal control mechanisms for better risk management."
  }
];

export default function Education() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-headline font-bold mb-4 text-primary">Educational Resources</h2>
            <p className="text-muted-foreground">
              Insights and updates on financial regulations, compliance, and accounting standards from our experts.
            </p>
          </div>
          <Button variant="link" className="text-accent hover:text-accent/80 p-0 text-lg group">
            View All Articles <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-border/50 hover:shadow-xl transition-all group flex flex-col">
              <div className="flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-wider mb-4">
                <BookOpen className="h-4 w-4" /> {article.category}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-4 border-t">
                <Calendar className="h-3 w-3" /> {article.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
