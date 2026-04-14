import { Briefcase, Calendar, MapPin, MessageSquare } from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-4">
            Why Students Love It
          </h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-6">
            Designed for the modern Hawassa student.
          </p>
          <p className="text-lg text-slate-600">
            We built HU Story to solve the fragmentation of campus life. No more
            missing out on what's happening around you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={MessageSquare}
            title="Rants"
            description="Speak your mind anonymously or publicly. The safe space for campus feedback."
            color="bg-orange-500"
          />
          <FeatureCard
            icon={MapPin}
            title="Spots"
            description="Discover the best study corners, chill zones, and hidden gems on campus."
            color="bg-brand-500"
          />
          <FeatureCard
            icon={Calendar}
            title="Events"
            description="Never miss a club meeting, sports match, or workshop again."
            color="bg-blue-500"
          />
          <FeatureCard
            icon={Briefcase}
            title="Projects"
            description="Find teammates for your next big idea or academic assignment."
            color="bg-purple-500"
          />
        </div>
      </div>
    </section>
  );
}
