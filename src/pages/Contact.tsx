import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <main className="dark min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cal-sans text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            We'd love to hear from you. Get in touch with our team.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Email Support</h3>
              <p className="text-muted-foreground mb-4">
                For general inquiries and support questions.
              </p>
              <a 
                href="mailto:support@onehabit.app" 
                className="text-primary hover:underline"
              >
                support@onehabit.app
              </a>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Feedback</h3>
              <p className="text-muted-foreground mb-4">
                Share your ideas and help us improve One.
              </p>
              <a 
                href="mailto:feedback@onehabit.app" 
                className="text-primary hover:underline"
              >
                feedback@onehabit.app
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
