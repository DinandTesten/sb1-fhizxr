import React, { useState } from 'react'
import { Activity, Plus } from 'lucide-react'

interface Exercise {
  type: string
  date: string
  duration: number
  calories: number
}

const ExerciseTracker: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([
    { type: 'Running', date: '2023-03-22', duration: 30, calories: 300 },
    { type: 'Cycling', date: '2023-03-21', duration: 45, calories: 400 },
    { type: 'Swimming', date: '2023-03-20', duration: 60, calories: 500 },
  ])

  const [newExercise, setNewExercise] = useState<Exercise>({
    type: '',
    date: new Date().toISOString().split('T')[0],
    duration: 0,
    calories: 0,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewExercise(prev => ({ ...prev, [name]: value }))
  }

  const addExercise = (e: React.FormEvent) => {
    e.preventDefault()
    if (newExercise.type && newExercise.duration > 0) {
      setExercises(prev => [newExercise, ...prev])
      setNewExercise({
        type: '',
        date: new Date().toISOString().split('T')[0],
        duration: 0,
        calories: 0,
      })
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Exercise Tracker</h2>
      
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Log New Exercise</h3>
        <form onSubmit={addExercise} className="space-y-4">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Exercise Type</label>
            <input
              type="text"
              id="type"
              name="type"
              value={newExercise.type}
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
              value={newExercise.date}
              onChange={handleInputChange}
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
              value={newExercise.duration}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              min="1"
            />
          </div>
          <div>
            <label htmlFor="calories" className="block text-sm font-medium text-gray-700">Calories Burned (optional)</label>
            <input
              type="number"
              id="calories"
              name="calories"
              value={newExercise.calories}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              min="0"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <Plus className="mr-2" /> Add Exercise
          </button>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Recent Workouts</h3>
        <ul className="divide-y">
          {exercises.map((exercise, index) => (
            <li key={index} className="py-3 flex items-center justify-between">
              <div className="flex items-center">
                <Activity className="mr-2 text-blue-500" />
                <span>{exercise.type}</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="mr-2">{exercise.date}</span>
                <span className="mr-2">{exercise.duration} min</span>
                <span>{exercise.calories} kcal</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ExerciseTracker