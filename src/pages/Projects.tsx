import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import laptopDashboard from "@/assets/laptop-dashboard.png";
import pesaplanMockup from "@/assets/pesaplan-mockup.png";
import investmentMockup from "@/assets/investment-mockup.png";
import facepayMockup from "@/assets/facepay-mockup.png";

const projects = [
  {
    title: "ChamaPlus platform",
    description: "A full web application for managing chamas (investment groups) with flexible contributions, automated reports, and M-Pesa integration. I led both UI/UX design and product management, building a scalable design system and coordinating developer handoff.",
    roles: "Lead UI/UX Designer & Product Manager",
    timeline: "6 months",
    status: "Development",
    image: laptopDashboard,
    link: "/projects/chamaplus",
    reverse: false,
  },
  {
    title: "PesaPlan",
    description: "A spending and budgeting tool with real-time expense tracking, budget creation, bill reminders, and income allocation. Designed to help users understand their financial habits and make informed decisions.",
    roles: "UI/UX Designer & Product Manager",
    timeline: "4 months",
    status: "Concept / MVP",
    image: pesaplanMockup,
    reverse: true,
  },
  {
    title: "Investment & Payment App",
    description: "Designed investment dashboards and payment interfaces for multiple fintech clients. Focused on simplifying complex financial data and creating consistent, trustworthy experiences across web and mobile.",
    roles: "UI/UX Designer",
    status: "Live in the Market",
    image: investmentMockup,
    reverse: false,
  },
  {
    title: "Face Pay",
    description: "A security-focused payment concept using facial verification for transactions. Explores the intersection of biometric security and seamless user experience, with a focus on trust and privacy.",
    roles: "Product Designer",
    timeline: "3 months",
    status: "Concept Design",
    image: facepayMockup,
    reverse: true,
  },
];

const Projects = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16 md:py-24 text-center">
      <AnimatedSection>
        <h1 className="font-heading text-3xl md:text-4xl font-bold">Case Studies.</h1>
        <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
          A collection of fintech products I've designed and managed, from concept to development.
        </p>
        <Link to="/projects/chamaplus">
          <Button className="mt-6 rounded-full" size="sm">View Featured</Button>
        </Link>
      </AnimatedSection>
    </section>

    <AnimatedSection className="container mx-auto px-6 text-center mb-20">
      <h2 className="font-heading text-2xl md:text-3xl font-bold max-w-md mx-auto">
        Solving real fintech challenges with strategy and design.
      </h2>
      <p className="text-muted-foreground mt-2">See how I deliver value across multiple product journeys.</p>
    </AnimatedSection>

    <div className="container mx-auto px-6 space-y-28 mb-32">
      {projects.map((project, i) => (
        <AnimatedSection key={project.title} className={`flex flex-col ${project.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10`}>
          <div className="md:w-1/2">
            <img src={project.image} alt={project.title} className="rounded-lg w-full max-w-md mx-auto" />
          </div>
          <div className="md:w-1/2 max-w-md">
            <h3 className="font-heading text-2xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{project.description}</p>
            <div className="mt-4 space-y-1 text-sm">
              <p><span className="font-semibold">Roles:</span> <span className="text-muted-foreground">{project.roles}</span></p>
              {project.timeline && <p><span className="font-semibold">Timeline:</span> <span className="text-muted-foreground">{project.timeline}</span></p>}
              <p><span className="font-semibold">Status:</span> <span className="text-muted-foreground">{project.status}</span></p>
            </div>
            {project.link && (
              <Link to={project.link}>
                <Button className="mt-4 rounded-full" size="sm" variant="outline">View Case Study</Button>
              </Link>
            )}
          </div>
        </AnimatedSection>
      ))}
    </div>

    {/* CTA */}
    <AnimatedSection className="container mx-auto px-6 text-center py-20 border-t border-border">
      <h2 className="font-heading text-2xl md:text-3xl font-bold">Let's collaborate.</h2>
      <p className="text-muted-foreground mt-2">Ready to build your next big fintech solution?</p>
      <Link to="/contact">
        <Button className="mt-6 rounded-full" size="sm">Contact Me</Button>
      </Link>
    </AnimatedSection>
  </Layout>
);

export default Projects;
