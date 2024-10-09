import React, { useState } from 'react'
import { Brain, BookOpen, AlertCircle } from 'lucide-react'

interface MeditationLog {
  date: string
  duration: number
  type: string
}

interface StressLog {
  date: string
  level: number
}

const MentalHealth: React.FC = () => {
  const [meditationLogs, setMeditationLogs] = useState<MeditationLog[]>([])
  const [stressLogs, setStressLogs] = useState<StressLog[]>([])
  const [newMeditation, setNewMeditation] = useState<MeditationLog>({
    date: new Date().toISOString().split('T')[0],
    duration: 0,
    type: ''
  })
  const [newStressLevel, setNewStressLevel] = useState<StressLog>({
    date: new Date().toISOString().split('T')[0],
    level: 1
  })

  const handleMeditationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewMeditation(prev => ({ ...prev, [name]: name === 'duration' ? parseInt(value) : value }))
  }

  const handleStressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewStressLevel(prev => ({ ...prev, [name]: name === 'level' ? parseInt(value) : value }))
  }

  const addMeditationLog = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMeditation.duration > 0 && newMeditation.type) {
      setMeditationLogs(prev => [newMeditation, ...prev])
      setNewMeditation({
        date: new Date().toISOString().split('T')[0],
        duration: 0,
        type: ''
      })
    }
  }

  const addStressLog = (e: React.FormEvent) => {
    e.preventDefault()
    setStressLogs(prev => [newStressLevel, ...prev])
    setNewStressLevel({
      date: new Date().toISOString().split('T')[0],
      level: 1
    })
  }

  const getStressManagementTip = (level: number) => {
    if (level <= 3) return "Great job managing your stress! Keep up your current practices."
    if (level <= 6) return "Try some deep breathing exercises or a short walk to reduce stress."
    return "Consider practicing meditation or talking to a friend about what's causing your stress."
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Mental Health</h2>
      
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Meditation Log</h3>
        <form onSubmit={addMeditationLog} className="space-y-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newMeditation.date}
              onChange={handleMeditationChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={newMeditation.duration}
              onChange={handleMeditationChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              min="1"
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
            <select
              id="type"
              name="type"
              value={newMeditation.type}
              onChange={handleMeditationChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="">Select type</option>
              <option value="Mindfulness">Mindfulness</option>
              <option value="Guided">Guided</option>
              <option value="Transcendental">Transcendental</option>
              <option value="Yoga">Yoga</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Log Meditation
          </button>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Stress Level Log</h3>
        <form onSubmit={addStressLog} className="space-y-4">
          <div>
            <label htmlFor="stressDate" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="stressDate"
              name="date"
              value={newStressLevel.date}
              onChange={handleStressChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">Stress Level (1-10)</label>
            <input
              type="number"
              id="level"
              name="level"
              value={newStressLevel.level}
              onChange={handleStressChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              min="1"
              max="10"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Log Stress Level
          </button>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Recent Logs</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Meditation Logs</h4>
            <ul className="divide-y">
              {meditationLogs.map((log, index) => (
                <li key={index} className="py-2 flex justify-between items-center">
                  <div className="flex items-center">
                    <Brain className="mr-2 text-blue-500" />
                    <span>{log.type}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="mr-2">{log.date}</span>
                    <span>{log.duration} min</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Stress Logs</h4>
            <ul className="divide-y">
              {stressLogs.map((log, index) => (
                <li key={index} className="py-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <AlertCircle className="mr-2 text-yellow-500" />
                      <span>Level: {log.level}</span>
                    </div>
                    <span className="text-sm text-gray-500">{log.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    <BookOpen className="inline mr-1" />
                    Tip: {getStressManagementTip(log.level)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentalHealth