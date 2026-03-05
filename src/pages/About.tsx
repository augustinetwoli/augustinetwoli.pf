import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";

const skills = {
  Design: ["UI/UX Design", "Product Design", "Graphic Design", "Wireframing & Prototyping", "Interaction Design", "Design Systems", "User Research & Usability Testing"],
  Product: ["Product Strategy", "Product Roadmapping", "Feature Planning & Prioritization"],
  Tools: ["Figma", "Framer", "Notion", "Zeplin", "Adobe XD", "Adobe Illustrator"],
};

const About = () => (
  <Layout>
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-3xl">
      <AnimatedSection>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-10">About Me</h1>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-[15px]">
          <p>I'm Augustine Twoli, a UI/UX Designer, Product Designer and Product Manager focused on designing intuitive, user-centered digital products, with a strong interest in fintech and financial systems.</p>
          <p>My journey into product design started with a curiosity about how technology can simplify complex financial workflows and make digital tools more accessible to everyday users. With a background in Business Information Technology, I combine technical understanding with design thinking to create solutions that are both functional and meaningful.</p>
          <p>I specialize in transforming complex ideas into clear, usable interfaces. My process involves understanding user needs, identifying pain points, and designing solutions that improve usability, efficiency, and overall user experience.</p>
          <p>One of my key projects is ChamaPlus, a platform designed to digitize and modernize investment groups (chamas) in Kenya. Through this project, I worked on product strategy, user experience design, and product management, helping create a system that improves financial transparency and simplifies group management.</p>
          <p>I'm passionate about building products that solve real problems and create meaningful impact, especially in fintech and emerging digital ecosystems.</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="mt-16">
        <h2 className="font-heading text-2xl font-bold mb-6">Skills & Tools</h2>
        <div className="space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-heading font-semibold text-lg mb-3">{category}</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3} className="mt-16">
        <p className="text-muted-foreground leading-relaxed text-[15px]">
          My goal is to design impactful digital products that improve financial access, usability, and user trust, while continuously growing as a product designer and contributing to innovative teams.
        </p>
      </AnimatedSection>
    </section>
  </Layout>
);

export default About;
