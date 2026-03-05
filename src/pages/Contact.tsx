import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 md:py-32 text-center">
        <AnimatedSection>
          <h1 className="font-heading text-3xl md:text-4xl font-bold">Get in touch.</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Let's work together to build user-focused fintech products.
          </p>
          <Button className="mt-6 rounded-full" size="sm" asChild>
            <a href="mailto:hello@augustinetwoli.com">Contact Augustine</a>
          </Button>
        </AnimatedSection>
      </section>

      <AnimatedSection className="container mx-auto px-6 max-w-xl mb-32">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold max-w-lg mx-auto">
            Interested in collaborating, learning more, or discussing a project?
          </h2>
          <p className="text-muted-foreground mt-3">
            I'm always open to meaningful conversations about UX/UI and product strategy in fintech.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Name</label>
              <Input
                placeholder="Jane Smith"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground px-0"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Email</label>
              <Input
                type="email"
                placeholder="jane@framer.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground px-0"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">Message</label>
            <Textarea
              placeholder="Your message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-foreground px-0 resize-none"
            />
          </div>
          <Button type="submit" className="w-full rounded-lg" size="lg">Submit</Button>
        </form>
      </AnimatedSection>
    </Layout>
  );
};

export default Contact;
