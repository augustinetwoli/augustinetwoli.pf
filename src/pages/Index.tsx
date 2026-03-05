import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid3X3, Search, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.png";
import laptopDashboard from "@/assets/laptop-dashboard.png";
import phoneMockup from "@/assets/phone-mockup.png";
import workspaceMockup from "@/assets/workspace-mockup.png";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="container mx-auto px-6 py-20 md:py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-6"
      >
        <div className="flex items-center gap-4">
          <div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">Augustine Twoli</h1>
            <p className="text-muted-foreground text-sm md:text-base mt-1">
              UI/UX Designer, Product Designer & Product Manager
            </p>
          </div>
          <img src={profilePhoto} alt="Augustine Twoli" className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-border" />
        </div>
        <p className="max-w-xl text-muted-foreground leading-relaxed">
          I design fintech products that simplify complex financial workflows and improve usability, transparency, and user trust.
        </p>
      </motion.div>
    </section>

    {/* Featured */}
    <AnimatedSection className="container mx-auto px-6 text-center mb-24">
      <h2 className="font-heading text-2xl md:text-3xl font-bold">Featured: ChamaPlus.</h2>
      <p className="text-muted-foreground mt-1">Digitizing Kenyan Investment Groups</p>
      <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto">
        I design fintech products that turn complex financial workflows into trusted, intuitive experiences.
      </p>
      <Link to="/projects/chamaplus">
        <Button className="mt-6 rounded-full" size="sm">View Case Study</Button>
      </Link>
    </AnimatedSection>

    {/* Role statement */}
    <AnimatedSection className="container mx-auto px-6 text-center mb-32">
      <h2 className="font-heading text-2xl md:text-3xl font-bold max-w-lg mx-auto">
        UI/UX Designer & Product Manager focused on fintech innovation.
      </h2>
      <p className="text-muted-foreground mt-3 max-w-md mx-auto">
        I design trusted, intuitive products for complex financial workflows.
      </p>
    </AnimatedSection>

    {/* Skills grid */}
    <div className="container mx-auto px-6 space-y-24 mb-32">
      {/* Design Systems */}
      <AnimatedSection className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h3 className="font-heading text-2xl font-bold">Design Systems for Scale.</h3>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed max-w-sm">
            I build consistent, reusable components that speed up development and ensure a cohesive user experience across web and mobile.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={laptopDashboard} alt="Dashboard mockup" className="rounded-lg w-full max-w-md mx-auto" />
        </div>
      </AnimatedSection>

      {/* Research */}
      <AnimatedSection className="flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="md:w-1/2">
          <h3 className="font-heading text-2xl font-bold">Research-Backed Decisions.</h3>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed max-w-sm">
            Every feature starts with understanding real user needs—through interviews, usability testing, and continuous feedback loops.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={phoneMockup} alt="Phone mockup" className="w-48 md:w-56" />
        </div>
      </AnimatedSection>

      {/* Strategy */}
      <AnimatedSection className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h3 className="font-heading text-2xl font-bold">Strategy to Execution.</h3>
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed max-w-sm">
            I bridge the gap between product goals and delivered work, managing roadmaps and collaborating with developers to bring ideas to life.
          </p>
        </div>
        <div className="md:w-1/2 flex gap-6 justify-center">
          <Grid3X3 size={48} className="text-foreground" />
          <Search size={48} className="text-foreground" />
          <TrendingUp size={48} className="text-accent" />
        </div>
      </AnimatedSection>
    </div>

    {/* ChamaPlus showcase */}
    <AnimatedSection className="container mx-auto px-6 mb-24">
      <div className="flex justify-center">
        <img src={workspaceMockup} alt="ChamaPlus workspace" className="rounded-lg w-full max-w-2xl" />
      </div>
      <div className="mt-10 max-w-md">
        <h3 className="font-heading text-lg font-bold">ChamaPlus: The Digital Chama Solution</h3>
        <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
          ChamaPlus reimagines group savings, loans, and member finance for the Kenyan market. As Lead Product Manager and Designer, I shaped the end-to-end experience from user research and product strategy to high-fidelity UI and design system, enabling seamless digital collaboration for financial groups.
        </p>
        <Link to="/projects/chamaplus">
          <Button className="mt-6 rounded-full" size="sm">View Case Study</Button>
        </Link>
      </div>
    </AnimatedSection>

    {/* CTA */}
    <AnimatedSection className="container mx-auto px-6 text-center py-20 border-t border-border">
      <h2 className="font-heading text-2xl md:text-3xl font-bold">Ready to transform fintech?</h2>
      <p className="text-muted-foreground mt-3 max-w-md mx-auto">
        I'm currently available for freelance projects or full-time opportunities. Let's discuss your next product challenge.
      </p>
      <Link to="/contact">
        <Button className="mt-6 rounded-full" size="sm">Let's work together</Button>
      </Link>
    </AnimatedSection>
  </Layout>
);

export default Index;
