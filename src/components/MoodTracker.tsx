import React, { useState } from 'react'
import { Smile, Meh, Frown } from 'lucide-react'

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const moods = [
    { icon: <Smile className="w-12 h-12" />, label: 'Happy' },
    { icon: <Meh className="w-12 h-12" />, label: 'Neutral' },
    { icon: <Frown className="w-12 h-12" />, label: 'Sad' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Mood Tracker</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">How are you feeling today?</h3>
        <div className="flex justify-around">
          {moods.map((mood, index) => (
            <button
              key={index}
              onClick={() => setSelectedMood(mood.label)}
              className={`flex flex-col items-center p-4 rounded-lg transition-colors ${
                selectedMood === mood.label ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
            >
              {mood.icon}
              <span className="mt-2">{mood.label}</span>
            </button>
          ))}
        </div>
        {selectedMood && (
          <p className="mt-4 text-center">
            You're feeling <strong>{selectedMood}</strong> today.
          </p>
        )}
      </div>
    </div>
  )
}

export default MoodTracker