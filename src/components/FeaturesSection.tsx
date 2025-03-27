
import React from 'react';
import { 
  LineChart, 
  TrendingUp, 
  AlertCircle, 
  FileText, 
  Clock, 
  BarChartHorizontal,
  UserCog,
  Zap
} from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 opacity-70 blur-3xl"></div>
        <div className="absolute top-40 right-0 w-60 h-60 rounded-full bg-accent/5 opacity-70 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features to Enhance Learning</h2>
          <p className="text-lg text-slate-600">
            Our platform combines analytics, AI, and educational insights to create a comprehensive 
            learning experience that benefits both students and educators.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {/* Feature 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-5">
              <LineChart className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
            <p className="text-slate-600">
              Monitor student progress with interactive dashboards showing real-time performance metrics and historical trends.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
            <p className="text-slate-600">
              Leverage machine learning algorithms to forecast student outcomes and identify areas for improvement early.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center mb-5">
              <AlertCircle className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Early Risk Detection</h3>
            <p className="text-slate-600">
              Identify at-risk students before they fall behind with our advanced early warning system.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-5">
              <FileText className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comprehensive Reports</h3>
            <p className="text-slate-600">
              Generate detailed reports on individual students, classes, or entire courses to inform teaching strategies.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-5">
              <Clock className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Engagement Metrics</h3>
            <p className="text-slate-600">
              Track student engagement through detailed analytics on time spent, resource utilization, and participation.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100">
            <div className="w-12 h-12 bg-violet-50 rounded-lg flex items-center justify-center mb-5">
              <BarChartHorizontal className="w-6 h-6 text-violet-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Comparative Analysis</h3>
            <p className="text-slate-600">
              Compare performance across different courses, cohorts, and time periods to identify patterns and trends.
            </p>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 bg-gradient-to-r from-primary/90 to-primary rounded-2xl shadow-lg animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-10 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-3">Transform Your Educational Approach</h3>
              <p className="text-white/90">
                Join thousands of educators using our platform to enhance student outcomes through data-driven insights.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <button className="px-6 py-3 bg-white text-primary hover:bg-white/90 rounded-md font-medium transition-all duration-300 shadow flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
