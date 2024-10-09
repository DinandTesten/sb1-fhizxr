import React, { useState } from 'react'
import { Target, Check, X, Calendar } from 'lucide-react'

interface Goal {
  id: number
  description: string
  target: number
  unit: string
  currentValue: number
  completed: boolean
  deadline: string
}

const GoalSetting: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, description: 'Daily steps', target: 10000, unit: 'steps', currentValue: 8000, completed: false, deadline: '2023-12-31' },
    { id: 2, description: 'Weight loss', target: 5, unit: 'kg', currentValue: 2, completed: false, deadline: '2023-06-30' },
  ])

  const [newGoal, setNewGoal] = useState<Omit<Goal, 'id' | 'completed'>>({
    description: '',
    target: 0,
    unit: '',
    currentValue: 0,
    deadline: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewGoal(prev => ({ ...prev, [name]: name === 'target' || name === 'currentValue' ? parseFloat(value) : value }))
  }

  const addGoal = (e: React.FormEvent) => {
    e.preventDefault()
    if (newGoal.description && newGoal.target > 0 && newGoal.deadline) {
      setGoals(prev => [...prev, { ...newGoal, id: Date.now(), completed: false }])
      setNewGoal({ description: '', target: 0, unit: '', currentValue: 0, deadline: '' })
    }
  }

  const updateGoalProgress = (id: number, newValue: number) => {
    setGoals(prev => prev.map(goal => 
      goal.id === id 
        ? { ...goal, currentValue: newValue, completed: newValue >= goal.target }
        : goal
    ))
  }

  const isDeadlinePassed = (deadline: string) => {
    return new Date(deadline) < new Date()
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Goal Setting</h2>
      
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Set New Goal</h3>
        <form onSubmit={addGoal} className="space-y-4">
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Goal Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={newGoal.description}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="target" className="block text-sm font-medium text-gray-700">Target Value</label>
            <input
              type="number"
              id="target"
              name="target"
              value={newGoal.target}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              min="0"
            />
          </div>
          <div>
            <label htmlFor="unit" className="block text-sm font-medium text-gray-700">Unit</label>
            <input
              type="text"
              id="unit"
              name="unit"
              value={newGoal.unit}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={newGoal.deadline}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <Target className="mr-2" /> Set Goal
          </button>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Your Goals</h3>
        <ul className="divide-y">
          {goals.map((goal) => (
            <li key={goal.id} className="py-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{goal.description}</span>
                <div className="flex items-center">
                  <span className={`text-sm mr-2 ${goal.completed ? 'text-green-500' : isDeadlinePassed(goal.deadline) ? 'text-red-500' : 'text-yellow-500'}`}>
                    {goal.completed ? <Check className="inline mr-1" /> : isDeadlinePassed(goal.deadline) ? <X className="inline mr-1" /> : <Target className="inline mr-1" />}
                    {goal.completed ? 'Completed' : isDeadlinePassed(goal.deadline) ? 'Overdue' : 'In Progress'}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="inline mr-1" /> {goal.deadline}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="range"
                  min="0"
                  max={goal.target}
                  value={goal.currentValue}
                  onChange={(e) => updateGoalProgress(goal.id, parseFloat(e.target.value))}
                  className="w-full mr-4"
                />
                <span className="text-sm text-gray-600">
                  {goal.currentValue} / {goal.target} {goal.unit}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GoalSetting