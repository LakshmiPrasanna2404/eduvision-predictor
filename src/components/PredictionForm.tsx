
import React, { useState } from 'react';
import { 
  BarChart2, 
  BookOpen, 
  Clock, 
  User, 
  ArrowRightCircle, 
  Check, 
  Brain, 
  Award,
  ChevronDown
} from 'lucide-react';

interface FormData {
  assignmentsCompleted: number;
  totalAssignments: number;
  averageScore: number;
  studyTime: number;
  attendanceRate: number;
  resourcesAccessed: number;
  engagementScore: number;
  previousGPA: number;
}

const initialFormData: FormData = {
  assignmentsCompleted: 15,
  totalAssignments: 20,
  averageScore: 78,
  studyTime: 42,
  attendanceRate: 85,
  resourcesAccessed: 30,
  engagementScore: 72,
  previousGPA: 3.2,
};

const PredictionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [predictionResult, setPredictionResult] = useState<number | null>(null);
  const [riskLevel, setRiskLevel] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Simple prediction logic (for demo purposes)
      const completionRate = formData.assignmentsCompleted / formData.totalAssignments;
      const weightedScore = formData.averageScore * 0.4;
      const weightedStudyTime = Math.min(formData.studyTime / 100, 1) * 20;
      const weightedAttendance = formData.attendanceRate * 0.15;
      const weightedEngagement = formData.engagementScore * 0.15;
      const weightedGPA = (formData.previousGPA / 4) * 10;
      
      const predictedScore = 
        weightedScore + 
        (completionRate * 10) + 
        weightedStudyTime + 
        weightedAttendance + 
        weightedEngagement + 
        weightedGPA;
      
      const finalScore = Math.min(Math.round(predictedScore), 100);
      
      // Determine risk level
      let risk;
      if (finalScore >= 80) risk = 'low';
      else if (finalScore >= 60) risk = 'medium';
      else risk = 'high';
      
      setPredictionResult(finalScore);
      setRiskLevel(risk);
      setIsLoading(false);
    }, 1200);
  };
  
  const getRiskColor = (level: string | null) => {
    if (!level) return '';
    
    switch (level) {
      case 'low':
        return 'text-emerald-600 bg-emerald-50';
      case 'medium':
        return 'text-amber-600 bg-amber-50';
      case 'high':
        return 'text-rose-600 bg-rose-50';
      default:
        return '';
    }
  };
  
  const getRecommendations = () => {
    if (!riskLevel) return [];
    
    switch (riskLevel) {
      case 'low':
        return [
          'Continue with current study habits',
          'Consider peer mentoring opportunities',
          'Explore advanced topic materials'
        ];
      case 'medium':
        return [
          'Increase study time by 20%',
          'Schedule regular check-ins with instructor',
          'Focus on improving assignment completion rate'
        ];
      case 'high':
        return [
          'Schedule immediate academic advising',
          'Join study groups for collaborative learning',
          'Develop a structured daily study plan',
          'Complete remedial coursework exercises'
        ];
      default:
        return [];
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8 animate-fade-up">
        <h1 className="text-3xl font-bold mb-3">Student Performance Predictor</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Our AI model analyzes academic behaviors and predicts student performance outcomes
          to help identify areas for improvement.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 p-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Student Data Inputs
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Assignments Completed */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Assignments Completed
                </label>
                <input 
                  type="number"
                  name="assignmentsCompleted"
                  value={formData.assignmentsCompleted}
                  onChange={handleInputChange}
                  min="0"
                  max={formData.totalAssignments}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              
              {/* Total Assignments */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Total Assignments
                </label>
                <input 
                  type="number"
                  name="totalAssignments"
                  value={formData.totalAssignments}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              
              {/* Average Score */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Current Average Score (%)
                </label>
                <input 
                  type="number"
                  name="averageScore"
                  value={formData.averageScore}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              
              {/* Study Time */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Study Time (hours)
                </label>
                <input 
                  type="number"
                  name="studyTime"
                  value={formData.studyTime}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              
              {/* Attendance Rate */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Attendance Rate (%)
                </label>
                <input 
                  type="number"
                  name="attendanceRate"
                  value={formData.attendanceRate}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              
              {/* Resources Accessed */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Learning Resources Accessed
                </label>
                <input 
                  type="number"
                  name="resourcesAccessed"
                  value={formData.resourcesAccessed}
                  onChange={handleInputChange}
                  min="0"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              
              {/* Engagement Score */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Engagement Score (0-100)
                </label>
                <input 
                  type="number"
                  name="engagementScore"
                  value={formData.engagementScore}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              
              {/* Previous GPA */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Previous GPA (0-4.0)
                </label>
                <input 
                  type="number"
                  name="previousGPA"
                  value={formData.previousGPA}
                  onChange={handleInputChange}
                  min="0"
                  max="4"
                  step="0.1"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>
            
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  Generate Prediction
                  <ArrowRightCircle className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
        
        {/* Results Panel */}
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className={`
            h-full bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col
            ${predictionResult ? 'justify-start' : 'justify-center'}
          `}>
            {predictionResult ? (
              <>
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Prediction Results
                </h2>
                
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 mb-4">
                    <span className="text-4xl font-bold text-primary">{predictionResult}%</span>
                  </div>
                  <h3 className="text-lg font-semibold">Predicted Performance</h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">Risk Level:</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRiskColor(riskLevel)}`}>
                      {riskLevel && riskLevel.charAt(0).toUpperCase() + riskLevel.slice(1)}
                    </span>
                  </div>
                  
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        riskLevel === 'low' 
                          ? 'bg-emerald-500' 
                          : riskLevel === 'medium' 
                            ? 'bg-amber-500' 
                            : 'bg-rose-500'
                      }`}
                      style={{ width: `${predictionResult}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center justify-between w-full py-2 text-primary font-medium"
                  >
                    <span>Recommendations</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${showDetails ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {showDetails && (
                  <div className="animate-fade-up">
                    <ul className="space-y-2 mb-6">
                      {getRecommendations().map((rec, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <button 
                    onClick={() => {
                      setPredictionResult(null);
                      setRiskLevel(null);
                    }}
                    className="w-full py-2.5 border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-all"
                  >
                    Reset Prediction
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-slate-800">Prediction Results</h3>
                <p className="text-slate-600">
                  Fill in the student data and generate a prediction to see the results here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionForm;
