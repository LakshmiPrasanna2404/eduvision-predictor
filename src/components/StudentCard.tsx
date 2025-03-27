
import React from 'react';
import { Student } from '../utils/mockData';
import { ArrowUpRight, Clock, CheckCircle2, XCircle } from 'lucide-react';

interface StudentCardProps {
  student: Student;
  onClick?: () => void;
}

const StudentCard: React.FC<StudentCardProps> = ({ student, onClick }) => {
  // Calculate the completion rate
  const completionRate = Math.round((student.completedAssignments / student.totalAssignments) * 100);
  
  // Determine risk level color
  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low':
        return 'text-emerald-500 bg-emerald-50';
      case 'medium':
        return 'text-amber-500 bg-amber-50';
      case 'high':
        return 'text-rose-500 bg-rose-50';
      default:
        return 'text-slate-500 bg-slate-50';
    }
  };

  return (
    <div 
      className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">{student.name}</h3>
            <p className="text-sm text-slate-500">{student.course}</p>
          </div>
          <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${getRiskColor(student.riskLevel)}`}>
            {student.riskLevel.charAt(0).toUpperCase() + student.riskLevel.slice(1)} Risk
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-50 p-3 rounded-lg">
            <p className="text-xs text-slate-500 mb-1">Average Score</p>
            <p className="text-xl font-semibold">{student.averageScore}%</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg">
            <p className="text-xs text-slate-500 mb-1">Predicted</p>
            <p className="text-xl font-semibold">{student.predictedPerformance}%</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1.5">
            <p className="text-xs text-slate-500">Assignment Completion</p>
            <p className="text-xs font-medium">{completionRate}%</p>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div 
              className="h-2 rounded-full bg-primary" 
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5 text-slate-600">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{student.timeSpent}h spent</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-slate-400" />
            <span>{student.completedAssignments} completed</span>
          </div>
        </div>
      </div>
      
      <div 
        className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-sm font-medium text-primary flex justify-between items-center hover:bg-slate-100 transition-colors"
      >
        View Detailed Analysis
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  );
};

export default StudentCard;
