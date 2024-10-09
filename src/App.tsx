import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom'
import { Activity, ShoppingCart, Brain, User, Home } from 'lucide-react'
import { useAuth } from './context/AuthContext'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import FoodTracker from './components/FoodTracker'
import MoodTracker from './components/MoodTracker'
import MentalHealth from './components/MentalHealth'
import SleepMonitor from './components/SleepMonitor'
import WeightTracker from './components/WeightTracker'
import SymptomTracker from './components/SymptomTracker'
import ExerciseTracker from './components/ExerciseTracker'
import SupermarketTracker from './components/SupermarketTracker'
import GoalSetting from './components/GoalSetting'
import ThoughtTracker from './components/ThoughtTracker'
import Notifications from './components/Notifications'

const App: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <nav className="w-64 bg-white shadow-lg">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">Health Tracker</h1>
          </div>
          <ul className="mt-4">
            <li className="mb-4">
              <Link to="/" className="flex items-center text-gray-700 hover:text-blue-500">
                <Home className="mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/food" className="flex items-center text-gray-700 hover:text-blue-500">
                <Activity className="mr-2" />
                Food Tracker
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/mood" className="flex items-center text-gray-700 hover:text-blue-500">
                <Activity className="mr-2" />
                Mood Tracker
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/mental-health" className="flex items-center text-gray-700 hover:text-blue-500">
                <Activity className="mr-2" />
                Mental Health
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/sleep" className="flex items-center text-gray-700 hover:text-blue-500">
                <Activity className="mr-2" />
                Sleep Monitor
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/weight" className="flex items-center text-gray-700 hover:text-blue-500">
                <Activity className="mr-2" />
                Weight Tracker
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/symptoms" className="flex items-center text-gray-700 hover:text-blue-500">
                <Activity className="mr-2" />
                Symptom Tracker
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/exercise" className="flex items-center text-gray-700 hover:text-blue-500">
                <Activity className="mr-2" />
                Exercise Tracker
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/supermarket" className="flex items-center text-gray-700 hover:text-blue-500">
                <ShoppingCart className="mr-2" />
                Supermarket Tracker
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/goals" className="flex items-center text-gray-700 hover:text-blue-500">
                <Activity className="mr-2" />
                Goal Setting
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/thoughts" className="flex items-center text-gray-700 hover:text-blue-500">
                <Brain className="mr-2" />
                Thought Tracker
              </Link>
            </li>
          </ul>
          <div className="mt-auto p-4">
            <button
              onClick={logout}
              className="flex items-center text-gray-700 hover:text-blue-500"
            >
              <User className="mr-2" />
              Logout
            </button>
          </div>
        </nav>
        <main className="flex-1 p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/food" element={<FoodTracker />} />
            <Route path="/mood" element={<MoodTracker />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/sleep" element={<SleepMonitor />} />
            <Route path="/weight" element={<WeightTracker />} />
            <Route path="/symptoms" element={<SymptomTracker />} />
            <Route path="/exercise" element={<ExerciseTracker />} />
            <Route path="/supermarket" element={<SupermarketTracker />} />
            <Route path="/goals" element={<GoalSetting />} />
            <Route path="/thoughts" element={<ThoughtTracker />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
      <Notifications />
    </Router>
  )
}

export default App