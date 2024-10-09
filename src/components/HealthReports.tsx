import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

// Mock data for demonstration
const weeklyData = [
  { day: 'Mon', calories: 2100, exercise: 30, mood: 7 },
  { day: 'Tue', calories: 2300, exercise: 45, mood: 8 },
  { day: 'Wed', calories: 1900, exercise: 60, mood: 6 },
  { day: 'Thu', calories: 2200, exercise: 30, mood: 7 },
  { day: 'Fri', calories: 2400, exercise: 45, mood: 9 },
  { day: 'Sat', calories: 2600, exercise: 90, mood: 8 },
  { day: 'Sun', calories: 2000, exercise: 60, mood: 7 },
]

const monthlyData = [
  { week: 'Week 1', avgCalories: 2200, avgExercise: 45, avgMood: 7.5 },
  { week: 'Week 2', avgCalories: 2100, avgExercise: 50, avgMood: 7.0 },
  { week: 'Week 3', avgCalories: 2300, avgExercise: 55, avgMood: 8.0 },
  { week: 'Week 4', avgCalories: 2150, avgExercise: 60, avgMood: 7.5 },
]

const HealthReports: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Weekly Health Summary</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="calories" fill="#8884d8" name="Calories" />
            <Bar yAxisId="right" dataKey="exercise" fill="#82ca9d" name="Exercise (min)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Monthly Health Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="avgCalories" stroke="#8884d8" name="Avg Calories" />
            <Line yAxisId="right" type="monotone" dataKey="avgExercise" stroke="#82ca9d" name="Avg Exercise (min)" />
            <Line yAxisId="right" type="monotone" dataKey="avgMood" stroke="#ffc658" name="Avg Mood" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Monthly Health Progress</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Average Daily Calories</h3>
            <p className="text-3xl font-bold text-blue-600">2,188</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Average Daily Exercise</h3>
            <p className="text-3xl font-bold text-green-600">52 min</p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Average Mood</h3>
            <p className="text-3xl font-bold text-yellow-600">7.5 / 10</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HealthReports