
// Mock data for the student performance prediction system

export interface Student {
  id: string;
  name: string;
  age: number;
  gender: string;
  course: string;
  totalAssignments: number;
  completedAssignments: number;
  averageScore: number;
  timeSpent: number; // in hours
  loginFrequency: number; // logins per week
  lastActive: string; // date string
  predictedPerformance: number; // 0-100 score
  riskLevel: 'low' | 'medium' | 'high';
}

export interface CourseStatistics {
  courseName: string;
  averageScore: number;
  completionRate: number;
  studentsEnrolled: number;
}

export interface PerformanceTrend {
  week: number;
  averageScore: number;
}

// Generate a realistic set of mock students
export const mockStudents: Student[] = [
  {
    id: "S1001",
    name: "Emma Johnson",
    age: 21,
    gender: "Female",
    course: "Data Science",
    totalAssignments: 45,
    completedAssignments: 42,
    averageScore: 87,
    timeSpent: 68,
    loginFrequency: 14,
    lastActive: "2023-09-15",
    predictedPerformance: 92,
    riskLevel: "low"
  },
  {
    id: "S1002",
    name: "Liam Chen",
    age: 22,
    gender: "Male",
    course: "Machine Learning",
    totalAssignments: 38,
    completedAssignments: 35,
    averageScore: 91,
    timeSpent: 75,
    loginFrequency: 18,
    lastActive: "2023-09-14",
    predictedPerformance: 94,
    riskLevel: "low"
  },
  {
    id: "S1003",
    name: "Sophia Martinez",
    age: 20,
    gender: "Female",
    course: "Computer Science",
    totalAssignments: 52,
    completedAssignments: 48,
    averageScore: 94,
    timeSpent: 82,
    loginFrequency: 21,
    lastActive: "2023-09-15",
    predictedPerformance: 96,
    riskLevel: "low"
  },
  {
    id: "S1004",
    name: "Noah Williams",
    age: 23,
    gender: "Male",
    course: "Web Development",
    totalAssignments: 60,
    completedAssignments: 42,
    averageScore: 76,
    timeSpent: 45,
    loginFrequency: 8,
    lastActive: "2023-09-10",
    predictedPerformance: 68,
    riskLevel: "medium"
  },
  {
    id: "S1005",
    name: "Olivia Brown",
    age: 21,
    gender: "Female",
    course: "UI/UX Design",
    totalAssignments: 32,
    completedAssignments: 30,
    averageScore: 88,
    timeSpent: 64,
    loginFrequency: 15,
    lastActive: "2023-09-15",
    predictedPerformance: 90,
    riskLevel: "low"
  },
  {
    id: "S1006",
    name: "Ethan Davis",
    age: 24,
    gender: "Male",
    course: "Cybersecurity",
    totalAssignments: 42,
    completedAssignments: 24,
    averageScore: 65,
    timeSpent: 38,
    loginFrequency: 6,
    lastActive: "2023-09-08",
    predictedPerformance: 58,
    riskLevel: "high"
  },
  {
    id: "S1007",
    name: "Ava Wilson",
    age: 22,
    gender: "Female",
    course: "Data Science",
    totalAssignments: 45,
    completedAssignments: 38,
    averageScore: 79,
    timeSpent: 56,
    loginFrequency: 12,
    lastActive: "2023-09-13",
    predictedPerformance: 76,
    riskLevel: "medium"
  },
  {
    id: "S1008",
    name: "Jackson Lee",
    age: 23,
    gender: "Male",
    course: "Machine Learning",
    totalAssignments: 38,
    completedAssignments: 19,
    averageScore: 62,
    timeSpent: 30,
    loginFrequency: 5,
    lastActive: "2023-09-05",
    predictedPerformance: 52,
    riskLevel: "high"
  }
];

// Mock course statistics
export const mockCourseStatistics: CourseStatistics[] = [
  {
    courseName: "Data Science",
    averageScore: 83,
    completionRate: 0.82,
    studentsEnrolled: 245
  },
  {
    courseName: "Machine Learning",
    averageScore: 78,
    completionRate: 0.74,
    studentsEnrolled: 189
  },
  {
    courseName: "Computer Science",
    averageScore: 86,
    completionRate: 0.88,
    studentsEnrolled: 310
  },
  {
    courseName: "Web Development",
    averageScore: 79,
    completionRate: 0.76,
    studentsEnrolled: 275
  },
  {
    courseName: "UI/UX Design",
    averageScore: 84,
    completionRate: 0.85,
    studentsEnrolled: 156
  },
  {
    courseName: "Cybersecurity",
    averageScore: 76,
    completionRate: 0.71,
    studentsEnrolled: 132
  }
];

// Mock performance trends over weeks
export const mockPerformanceTrends: PerformanceTrend[] = [
  { week: 1, averageScore: 72 },
  { week: 2, averageScore: 75 },
  { week: 3, averageScore: 74 },
  { week: 4, averageScore: 78 },
  { week: 5, averageScore: 80 },
  { week: 6, averageScore: 79 },
  { week: 7, averageScore: 82 },
  { week: 8, averageScore: 81 },
  { week: 9, averageScore: 83 },
  { week: 10, averageScore: 85 },
  { week: 11, averageScore: 84 },
  { week: 12, averageScore: 86 }
];

// Function to get a random subset of students
export const getRandomStudents = (count: number): Student[] => {
  const shuffled = [...mockStudents].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
