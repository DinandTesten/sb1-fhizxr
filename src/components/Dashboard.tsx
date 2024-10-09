import React from 'react'
import { BarChart2, Activity, Utensils, Moon } from 'lucide-react'
import HealthReports from './HealthReports'

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard title="Calories" icon={<Utensils />} value="1,800" unit="kcal" />
        <DashboardCard title="Exercise" icon={<Activity />} value="45" unit="min" />
        <DashboardCard title="Sleep" icon={<Moon />} value="7.5" unit="hours" />
        <DashboardCard title="Weight" icon={<BarChart2 />} value="70" unit="kg" />
      </div>
      <HealthReports />
    </div>
  )
}

interface DashboardCardProps {
  title: string
  icon: React.ReactNode
  value: string
  unit: string
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon, value, unit }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {icon}
      </div>
      <p className="text-2xl font-bold">
        {value} <span className="text-sm text-gray-500">{unit}</span>
      </p>
    </div>
  )
}

export default Dashboard