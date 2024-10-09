import React, { useEffect } from 'react'

const Notifications: React.FC = () => {
  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification")
    } else {
      Notification.requestPermission()
    }
  }, [])

  const scheduleNotification = (title: string, body: string, delay: number) => {
    setTimeout(() => {
      if (Notification.permission === "granted") {
        new Notification(title, { body })
      }
    }, delay)
  }

  // Example usage:
  useEffect(() => {
    scheduleNotification("Meal Reminder", "Don't forget to log your lunch!", 4 * 60 * 60 * 1000) // 4 hours
    scheduleNotification("Workout Reminder", "Time for your daily exercise!", 8 * 60 * 60 * 1000) // 8 hours
    scheduleNotification("Water Intake", "Stay hydrated! Log your water intake.", 2 * 60 * 60 * 1000) // 2 hours
  }, [])

  return null // This component doesn't render anything
}

export default Notifications