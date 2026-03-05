import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border mt-32">
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-start justify-between gap-8">
      <div className="flex items-center gap-2 text-muted-foreground">
        <div className="w-4 h-4 bg-foreground rounded-sm" />
        <div className="w-4 h-4 bg-foreground rounded-full" />
        <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-foreground" />
      </div>
      <div className="flex gap-16 text-sm">
        <div>
          <p className="font-heading font-semibold mb-3 text-foreground">Site</p>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-accent hover:underline">Home</Link>
            <Link to="/projects" className="text-accent hover:underline">Projects</Link>
            <Link to="/about" className="text-accent hover:underline">About</Link>
          </div>
        </div>
        <div>
          <p className="font-heading font-semibold mb-3 text-foreground">Connect</p>
          <div className="flex flex-col gap-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-accent hover:underline">Twitter</a>
            <a href="mailto:hello@augustinetwoli.com" className="text-accent hover:underline">Email</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
