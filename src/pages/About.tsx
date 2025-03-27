import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import NavBar from '@/components/NavBar';
import { BookOpen, Users, LineChart, GraduationCap, Share2, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">About EduVision</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
              Empowering educators and students through data-driven insights and predictive analytics for enhanced online learning experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/dashboard">
                <Button 
                  size="lg" 
                  className="gap-2"
                >
                  <LineChart size={20} />
                  Explore Dashboard
                </Button>
              </Link>
              <Link to="/prediction">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2"
                >
                  <GraduationCap size={20} />
                  Try Prediction
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Mission</h2>
              <p className="text-lg text-slate-600">
                At EduVision, we're dedicated to transforming online education through advanced analytics and predictive modeling. Our mission is to provide timely insights that help educators identify at-risk students, personalize learning paths, and improve overall educational outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl text-center shadow-sm border border-slate-100">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Data-Driven Insights</h3>
                <p className="text-slate-600">
                  Transform raw educational data into actionable insights to inform teaching strategies and interventions.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl text-center shadow-sm border border-slate-100">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Student-Centered Approach</h3>
                <p className="text-slate-600">
                  Put students at the center of the learning experience with personalized support and early interventions.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-xl text-center shadow-sm border border-slate-100">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Share2 className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">Collaborative Growth</h3>
                <p className="text-slate-600">
                  Foster collaboration between students, educators, and institutions to create a supportive learning ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Our Approach</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We combine educational expertise with advanced technology to deliver predictive insights that make a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-full mt-1">
                  <Lightbulb className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Predictive Analytics</h3>
                  <p className="text-slate-600">
                    Our advanced algorithms analyze student engagement, assignment completion, and performance metrics to predict future outcomes and identify at-risk students before they fall behind.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-full mt-1">
                  <Lightbulb className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Data Visualization</h3>
                  <p className="text-slate-600">
                    Transform complex data into intuitive visualizations that help educators quickly understand trends, patterns, and areas requiring attention.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-full mt-1">
                  <Lightbulb className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Early Intervention</h3>
                  <p className="text-slate-600">
                    Timely alerts and recommendations enable educators to provide targeted support exactly when students need it most, preventing academic challenges from escalating.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent/10 p-2 rounded-full mt-1">
                  <Lightbulb className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">Continuous Improvement</h3>
                  <p className="text-slate-600">
                    Our system continuously learns and adapts from new data, ensuring increasingly accurate predictions and recommendations over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to enhance your educational outcomes?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Join thousands of educators and institutions already using EduVision to transform their online learning experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg">
                  Get Started Today
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Log In
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
