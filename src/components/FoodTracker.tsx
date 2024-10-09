import React, { useState } from 'react'
import { Plus, Coffee, Utensils } from 'lucide-react'

interface Consumption {
  type: 'food' | 'drink'
  item: string
  amount: string
  time: string
}

const FoodTracker: React.FC = () => {
  const [consumptions, setConsumptions] = useState<Consumption[]>([])
  const [newConsumption, setNewConsumption] = useState<Consumption>({
    type: 'food',
    item: '',
    amount: '',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNewConsumption(prev => ({ ...prev, [name]: value }))
  }

  const addConsumption = (e: React.FormEvent) => {
    e.preventDefault()
    if (newConsumption.item && newConsumption.amount) {
      setConsumptions(prev => [newConsumption, ...prev])
      setNewConsumption({
        type: 'food',
        item: '',
        amount: '',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      })
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Food & Drink Tracker</h2>
      
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Log New Consumption</h3>
        <form onSubmit={addConsumption} className="space-y-4">
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
            <select
              id="type"
              name="type"
              value={newConsumption.type}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="food">Food</option>
              <option value="drink">Drink</option>
            </select>
          </div>
          <div>
            <label htmlFor="item" className="block text-sm font-medium text-gray-700">
              {newConsumption.type === 'food' ? 'Food Item' : 'Drink Item'}
            </label>
            <input
              type="text"
              id="item"
              name="item"
              value={newConsumption.item}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              placeholder={newConsumption.type === 'food' ? 'e.g., Apple, Sandwich' : 'e.g., Water, Coffee'}
            />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={newConsumption.amount}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
              placeholder="e.g., 1 piece, 200ml"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={newConsumption.time}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center"
          >
            <Plus className="mr-2" /> Add Item
          </button>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Today's Consumption</h3>
        <ul className="divide-y">
          {consumptions.map((consumption, index) => (
            <li key={index} className="py-3 flex items-center justify-between">
              <div className="flex items-center">
                {consumption.type === 'food' ? (
                  <Utensils className="mr-2 text-green-500" />
                ) : (
                  <Coffee className="mr-2 text-blue-500" />
                )}
                <span>{consumption.item}</span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="mr-2">{consumption.amount}</span>
                <span>{consumption.time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FoodTracker