import React, { useState } from 'react'
import { Plus, Brain, Tag } from 'lucide-react'

interface Thought {
  id: number
  content: string
  category: string
  timestamp: string
}

const ThoughtTracker: React.FC = () => {
  const [thoughts, setThoughts] = useState<Thought[]>([])
  const [newThought, setNewThought] = useState<Omit<Thought, 'id' | 'timestamp'>>({
    content: '',
    category: '',
  })

  const categories = ['Work', 'Personal', 'Health', 'Relationships', 'Goals', 'Other']

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewThought(prev => ({ ...prev, [name]: value }))
  }

  const addThought = (e: React.FormEvent) => {
    e.preventDefault()
    if (newThought.content && newThought.category) {
      const timestamp = new Date().toISOString()
      setThoughts(prev => [{ ...newThought, id: Date.now(), timestamp }, ...prev])
      setNewThought({ content: '', category: '' })
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Thought Tracker</h2>
      
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Log a New Thought</h3>
        <form onSubmit={addThought} className="space-y-4">
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Thought</label>
            <textarea
              id="content"
              name="content"
              value={newThought.content}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={3}
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select
              id="category"
              name="category"
              value={newThought.category}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <Plus className="mr-2" /> Log Thought
          </button>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Your Thoughts</h3>
        <ul className="divide-y">
          {thoughts.map((thought) => (
            <li key={thought.id} className="py-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium flex items-center">
                  <Brain className="mr-2" />
                  {thought.content}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(thought.timestamp).toLocaleString()}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Tag className="mr-1" />
                {thought.category}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ThoughtTracker