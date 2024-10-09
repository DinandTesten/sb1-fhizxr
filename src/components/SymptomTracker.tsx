import React, { useState } from 'react'
import { Plus, AlertCircle } from 'lucide-react'

interface Symptom {
  name: string
  severity: number
  time: string
  date: string
}

const SymptomTracker: React.FC = () => {
  const [symptoms, setSymptoms] = useState<Symptom[]>([])
  const [newSymptom, setNewSymptom] = useState<Symptom>({
    name: '',
    severity: 1,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toISOString().split('T')[0]
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewSymptom(prev => ({ ...prev, [name]: name === 'severity' ? parseInt(value) : value }))
  }

  const addSymptom = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSymptom.name) {
      setSymptoms(prev => [newSymptom, ...prev])
      setNewSymptom({
        name: '',
        severity: 1,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toISOString().split('T')[0]
      })
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Symptom Tracker</h2>
      
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Log New Symptom</h3>
        <form onSubmit={addSymptom} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Symptom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newSymptom.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              placeholder="e.g., Headache, Nausea"
            />
          </div>
          <div>
            <label htmlFor="severity" className="block text-sm font-medium text-gray-700">Severity (1-10)</label>
            <input
              type="number"
              id="severity"
              name="severity"
              value={newSymptom.severity}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              min="1"
              max="10"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={newSymptom.time}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={newSymptom.date}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <Plus className="mr-2" /> Add Symptom
          </button>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Recent Symptoms</h3>
        <ul className="divide-y">
          {symptoms.map((symptom, index) => (
            <li key={index} className="py-3 flex items-center justify-between">
              <div className="flex items-center">
                <AlertCircle className="mr-2 text-yellow-500" />
                <span>{symptom.name}</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="mr-2">Severity: {symptom.severity}</span>
                <span className="mr-2">{symptom.date}</span>
                <span>{symptom.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SymptomTracker