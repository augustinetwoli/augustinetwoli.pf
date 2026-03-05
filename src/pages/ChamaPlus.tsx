import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import chamaplusScreens from "@/assets/chamaplus-screens.png";

const sections = [
  {
    title: "1. Meta Info Block",
    content: (
      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
        <li>Role: UI/UX Designer & Product Manager</li>
        <li>Timeline: 2025</li>
        <li>Platform: Web Application</li>
        <li>Tools: Figma, Framer, Notion</li>
        <li>Focus: Fintech, Financial Management, Goal-based Design</li>
      </ul>
    ),
  },
  {
    title: "2. Overview",
    content: (
      <div className="text-muted-foreground text-sm space-y-3 leading-relaxed">
        <p>ChamaPlus is a fintech platform redesigned to help investment groups manage their contributions, track finances, and improve financial transparency.</p>
        <p>Investment groups in Kenya have been traditionally using manual methods like spreadsheets or messaging apps, which create inefficiencies and increase the risk of errors.</p>
        <p>ChamaPlus provides a centralized digital platform that simplifies contribution tracking, improves accountability, and empowers more efficient financial management.</p>
      </div>
    ),
  },
  {
    title: "3. Problem",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>Many investment groups struggle with inefficient and unreliable financial management systems.</p>
        <p className="font-medium text-foreground">Based on research and interviews, I identified these challenges:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Poor record-keeping and inconsistent tracking of contributions</li>
          <li>Difficulty in creating clear, auditable financial reports</li>
          <li>A growing gap between the growing digital expectations and archaic processes</li>
          <li>Lack of automated payment reminders and tracking features</li>
          <li>Trust transparency and accountability challenges among members</li>
        </ul>
      </div>
    ),
  },
  {
    title: "4. Goal",
    content: (
      <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
        <li>Simplify contribution tracking</li>
        <li>Improve financial visibility for all members</li>
        <li>Reduce errors through automation</li>
        <li>Provide clear and auditable financial reports</li>
        <li>Create an intuitive and accessible user interface</li>
      </ul>
    ),
  },
  {
    title: "5. My Role",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>I worked as the UI/UX Designer and Product Manager throughout this project.</p>
        <p className="font-medium text-foreground">My responsibilities included:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Defining product strategy, priority, and features</li>
          <li>Creating user flows and information architecture</li>
          <li>Designing wireframes and high-fidelity interfaces</li>
          <li>Building a consistent design system</li>
          <li>Prototyping to test concepts iteratively</li>
          <li>Collaborating with developers using Agile methods</li>
        </ul>
      </div>
    ),
  },
  {
    title: "6. Research & Insights",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>To understand the problem, I conducted user interviews, analyzed currently used tools, and identified key pain points.</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Most user groups rely on basic tools such as spreadsheets for tracking</li>
          <li>Members often cannot view a full history of their contributions</li>
          <li>Financial information is scattered across different apps and messaging apps</li>
          <li>Core issues of trust and transparency in group finances and reporting</li>
        </ul>
      </div>
    ),
  },
  {
    title: "7. Solution",
    content: (
      <div className="text-muted-foreground text-sm space-y-2">
        <p>I designed ChamaPlus as a centralized dashboard that enables both admin and members to monitor and manage group finances efficiently.</p>
        <p className="font-medium text-foreground">Key platform features include:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Automated contribution tracking and member management</li>
          <li>Monitoring dashboards for tracking individual contributions</li>
          <li>Centralized finance views with clear visual reports</li>
          <li>Clear UI structure for intuitive user navigation</li>
          <li>Streamlined multi-level admin / group member hierarchy</li>
        </ul>
      </div>
    ),
  },
  {
    title: "8. Design Process",
    content: (
      <div className="text-muted-foreground text-sm space-y-4">
        <div>
          <h4 className="font-semibold text-foreground">Step 1: User Flows</h4>
          <p className="mt-1">I mapped key user flows such as creating group setups, adding contributions, making payments, and inviting new members.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Step 2: Wireframes</h4>
          <p className="mt-1">I created low-fidelity wireframes to define layout structure, key screens, and navigation flow.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Step 3: UI Design</h4>
          <p className="mt-1">I designed high-fidelity screens featuring clean data-intensive dashboards, easy navigation, a cohesive design system, and an accessible and modern interface.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground">Step 4: Developer Handoff</h4>
          <p className="mt-1">I prepared the design for development by creating spec pages and design files in Figma, using modular patterns to facilitate easy implementation, and collaborating with developers using Agile methodology.</p>
        </div>
      </div>
    ),
  },
];

const ChamaPlus = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="font-heading text-3xl md:text-4xl font-bold">ChamaPlus</h1>
          <p className="text-muted-foreground mt-2">Digitizing Investment Groups in Kenya</p>
          <p className="text-muted-foreground text-sm mt-4 max-w-lg mx-auto">
            Designing a modern platform to help investment groups manage contributions, track finances, and improve transparency.
          </p>
        </div>
      </AnimatedSection>

      <div className="space-y-12">
        {sections.map((section, i) => (
          <AnimatedSection key={section.title} delay={i * 0.05}>
            <h3 className="font-heading text-xl font-bold mb-4">{section.title}</h3>
            {section.content}
          </AnimatedSection>
        ))}

        {/* Key Screens */}
        <AnimatedSection>
          <h3 className="font-heading text-xl font-bold mb-4">9. Key Screens</h3>
          <img src={chamaplusScreens} alt="ChamaPlus key screens" className="rounded-lg w-full" />
        </AnimatedSection>

        {/* Impact */}
        <AnimatedSection>
          <h3 className="font-heading text-xl font-bold mb-4">10. Impact</h3>
          <div className="text-muted-foreground text-sm space-y-2">
            <p>ChamaPlus significantly improves how investment groups manage their finances by:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Reducing manual contribution tracking efforts</li>
              <li>Improving transparency with detailed financial reports</li>
              <li>Making group data immediately accessible to all members</li>
              <li>Reducing errors through automated reporting and calculations</li>
            </ul>
          </div>
        </AnimatedSection>

        {/* What I Learned */}
        <AnimatedSection>
          <h3 className="font-heading text-xl font-bold mb-4">11. What I Learned</h3>
          <div className="text-muted-foreground text-sm space-y-2">
            <p>This project sharpened my ability to manage complex fintech features and communicate with a broader team. Key learnings:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Designing for both admin and member user roles</li>
              <li>Presenting financial data clearly and effectively</li>
              <li>Creating a reliable design system</li>
              <li>Working across different product stages and prod environments</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>

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

export default ChamaPlus;
