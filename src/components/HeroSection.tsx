import React from 'react';
import { ArrowRight, BarChart2, Brain, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-background pt-20 pb-16 sm:pt-32 sm:pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent/10 opacity-70 blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 rounded-full bg-primary/10 opacity-70 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 rounded-full bg-secondary/10 opacity-50 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="flex flex-col space-y-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div>
              <span className="inline-flex items-center px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                AI-Powered Learning Analytics
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              <span className="block">Enhance student</span>
              <span className="block text-primary">performance with AI</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Our advanced prediction system analyzes learning patterns, identifies at-risk students, and provides personalized recommendations for improving educational outcomes.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link 
                to="/dashboard"
                className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow flex items-center gap-2 group"
              >
                Explore Dashboard
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/prediction"
                className="px-6 py-3 bg-white text-slate-800 rounded-md font-medium hover:bg-slate-50 transition-all duration-300 border border-slate-200 shadow-sm hover:shadow"
              >
                Try Prediction
              </Link>
            </div>
          </div>

          {/* Hero image/visualization */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative mx-auto max-w-[500px]">
              {/* Glass card */}
              <div className="glass rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden p-6 transform transition-all hover:scale-[1.01] duration-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-800">Student Performance Overview</h3>
                  <span className="text-xs text-slate-500">Updated today</span>
                </div>
                
                {/* Mock chart */}
                <div className="h-48 bg-slate-50 rounded-lg mb-6 overflow-hidden">
                  <div className="w-full h-full flex items-end justify-between px-4 pb-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-primary/80 h-[60%] rounded-t-md"></div>
                      <span className="text-xs mt-2 text-slate-500">Week 1</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-primary/80 h-[45%] rounded-t-md"></div>
                      <span className="text-xs mt-2 text-slate-500">Week 2</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-primary/80 h-[70%] rounded-t-md"></div>
                      <span className="text-xs mt-2 text-slate-500">Week 3</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-primary/80 h-[50%] rounded-t-md"></div>
                      <span className="text-xs mt-2 text-slate-500">Week 4</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-primary/80 h-[85%] rounded-t-md"></div>
                      <span className="text-xs mt-2 text-slate-500">Week 5</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 bg-primary/80 h-[65%] rounded-t-md"></div>
                      <span className="text-xs mt-2 text-slate-500">Week 6</span>
                    </div>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-xs font-medium text-slate-500">Students</span>
                    </div>
                    <p className="text-2xl font-semibold">1,248</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart2 className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-medium text-slate-500">Avg. Score</span>
                    </div>
                    <p className="text-2xl font-semibold">78.5%</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-medium text-slate-500">At Risk</span>
                    </div>
                    <p className="text-2xl font-semibold">12%</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-5 -right-10 w-20 h-20 rounded-full bg-accent/30 filter blur-xl animate-float opacity-70"></div>
              <div className="absolute -bottom-5 -left-10 w-20 h-20 rounded-full bg-primary/20 filter blur-xl opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Features overview */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow hover:border-primary/20">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
              <BarChart2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
            <p className="text-slate-600">Comprehensive dashboards visualizing student engagement, performance trends, and learning patterns.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow hover:border-primary/20">
            <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-5">
              <Brain className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Predictive AI</h3>
            <p className="text-slate-600">Machine learning algorithms that predict student outcomes and identify those who may need additional support.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 transition-all hover:shadow hover:border-primary/20">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-5">
              <Users className="w-6 h-6 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Insights</h3>
            <p className="text-slate-600">Tailored recommendations for each student based on their unique learning style and performance data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
