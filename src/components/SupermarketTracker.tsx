import React, { useState } from 'react'
import { Plus, Barcode } from 'lucide-react'

const SupermarketTracker: React.FC = () => {
  const [items, setItems] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem])
      setNewItem('')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Supermarket Tracker</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter item"
          className="border p-2 mr-2 rounded flex-grow"
        />
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center mr-2"
        >
          <Plus className="mr-2" /> Add Item
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
          <Barcode className="mr-2" /> Scan Barcode
        </button>
      </div>
      <ul className="bg-white shadow rounded-lg divide-y">
        {items.map((item, index) => (
          <li key={index} className="p-4 flex justify-between items-center">
            <span>{item}</span>
            <span className="text-sm text-gray-500">Expires in 7 days</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SupermarketTracker