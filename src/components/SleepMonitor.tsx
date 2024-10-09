import React from 'react'
import { Moon, Sun } from 'lucide-react'

const SleepMonitor: React.FC = () => {
  // Mock data for demonstration
  const sleepData = [
    { date: '2023-03-20', duration: 7.5, quality: 'Good' },
    { date: '2023-03-21', duration: 6.8, quality: 'Fair' },
    { date: '2023-03-22', duration: 8.2, quality: 'Excellent' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sleep Monitor</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">Sleep Log</h3>
        <ul className="divide-y">
          {sleepData.map((night, index) => (
            <li key={index} className="py-3 flex items-center justify-between">
              <div className="flex items-center">
                <Moon className="mr-2 text-indigo-500" />
                <span>{night.date}</span>
              </div>
              <div className="flex items-center">
                <Sun className="mr-2 text-yellow-500" />
                <span>{night.duration} hours</span>
              </div>
              <span className={`text-sm ${night.quality === 'Excellent' ? 'text-green-500' : night.quality === 'Good' ? 'text-blue-500' : 'text-yellow-500'}`}>
                {night.quality}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SleepMonitor