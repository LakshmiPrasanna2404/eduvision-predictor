
import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { ArrowUpRight, Users, BookOpen, AlertTriangle, Clock } from 'lucide-react';
import { mockStudents, mockCourseStatistics, mockPerformanceTrends } from '../utils/mockData';
import PerformanceChart from './PerformanceChart';
import StudentCard from './StudentCard';

const Dashboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('semester');
  
  // Calculate summary statistics
  const totalStudents = mockStudents.length;
  const averageScore = Math.round(
    mockStudents.reduce((sum, student) => sum + student.averageScore, 0) / totalStudents
  );
  const atRiskCount = mockStudents.filter(student => student.riskLevel === 'high').length;
  const atRiskPercentage = Math.round((atRiskCount / totalStudents) * 100);
  
  // Data for the risk distribution pie chart
  const riskData = [
    { name: 'Low Risk', value: mockStudents.filter(s => s.riskLevel === 'low').length },
    { name: 'Medium Risk', value: mockStudents.filter(s => s.riskLevel === 'medium').length },
    { name: 'High Risk', value: mockStudents.filter(s => s.riskLevel === 'high').length },
  ];
  
  const RISK_COLORS = ['#10b981', '#f59e0b', '#ef4444'];

  // Get 4 random students for the dashboard
  const featuredStudents = [...mockStudents]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Performance Dashboard</h1>
          <p className="text-slate-600">Monitor student progress and identify areas for improvement</p>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setSelectedTimeRange('month')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              selectedTimeRange === 'month' 
                ? 'bg-primary text-white' 
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            Month
          </button>
          <button 
            onClick={() => setSelectedTimeRange('semester')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              selectedTimeRange === 'semester' 
                ? 'bg-primary text-white' 
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            Semester
          </button>
          <button 
            onClick={() => setSelectedTimeRange('year')}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
              selectedTimeRange === 'year' 
                ? 'bg-primary text-white' 
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            Year
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Total Students</p>
              <h3 className="text-2xl font-bold">{totalStudents}</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Average Score</p>
              <h3 className="text-2xl font-bold">{averageScore}%</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-rose-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">At Risk Students</p>
              <h3 className="text-2xl font-bold">{atRiskPercentage}%</h3>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-slate-600">Avg. Time Spent</p>
              <h3 className="text-2xl font-bold">58h</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Trends Chart */}
      <div className="mb-8">
        <PerformanceChart data={mockPerformanceTrends} />
      </div>
      
      {/* Two column layout for additional charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Course Performance Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h3 className="text-lg font-semibold mb-4">Course Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mockCourseStatistics}
                margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis 
                  dataKey="courseName" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                  tick={{ fontSize: 12 }} 
                />
                <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }} 
                />
                <Legend />
                <Bar 
                  dataKey="averageScore" 
                  name="Average Score" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]} 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Student Risk Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h3 className="text-lg font-semibold mb-4">Risk Level Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={RISK_COLORS[index % RISK_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} students`, 'Count']}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Students Overview Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Students Overview</h3>
          <button className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
            View All Students
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStudents.map(student => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
