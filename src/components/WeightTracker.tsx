import React, { useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

const WeightTracker: React.FC = () => {
  const [weight, setWeight] = useState('')
  const [weightLog, setWeightLog] = useState<{ date: string; weight: number }[]>([
    { date: '2023-03-20', weight: 70.5 },
    { date: '2023-03-21', weight: 70.2 },
    { date: '2023-03-22', weight: 70.0 },
  ])

  const addWeight = () => {
    if (weight && !isNaN(parseFloat(weight))) {
      const newEntry = { date: new Date().toISOString().split('T')[0], weight: parseFloat(weight) }
      setWeightLog([newEntry, ...weightLog])
      setWeight('')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Weight Tracker</h2>
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold mb-2">Log Your Weight</h3>
        <div className="flex">
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
            className="border p-2 mr-2 rounded flex-grow"
          />
          <button
            onClick={addWeight}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Weight
          </button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Weight Log</h3>
        <ul className="divide-y">
          {weightLog.map((entry, index) => (
            <li key={index} className="py-3 flex items-center justify-between">
              <span>{entry.date}</span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">{entry.weight} kg</span>
                {index < weightLog.length - 1 && (
                  entry.weight < weightLog[index + 1].weight ? (
                    <TrendingDown className="text-green-500" />
                  ) : (
                    <TrendingUp className="text-red-500" />
                  )
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WeightTracker