import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah K.",
    role: "Fitness Enthusiast",
    content: "Finally an app that doesn't overwhelm me. I've tried dozens of habit trackers, but One is the only one that stuck. 30 days streak and counting!",
    rating: 5
  },
  {
    name: "Michael R.",
    role: "Software Developer",
    content: "The focus on one habit at a time is genius. I've successfully built 3 habits over the past 6 months using this approach.",
    rating: 5
  },
  {
    name: "Emma T.",
    role: "Student",
    content: "Beautiful design and so simple to use. The gentle reminders actually work without being annoying. Highly recommend!",
    rating: 5
  }
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cal-sans text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loved by <span className="text-primary">Habit Builders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have transformed their lives, one habit at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-card p-8 rounded-2xl border border-border/50 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{review.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
