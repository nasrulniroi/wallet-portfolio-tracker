"use client"
import Chart from '@/components/Chart'
import StatsCard from '@/components/StatsCard'

export default function Analytics() {
  const data = Array.from({length: 30}, () => Math.random() * 1000 + 500)
  const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard label="Period" value="30 Days" icon="📅" />
        <StatsCard label="Avg Daily" value="$4,120" change={3.1} icon="📊" />
        <StatsCard label="Peak" value="$18,234" icon="🔝" />
      </div>
      <Chart data={data} labels={labels} label="30-Day Trend" />
    </div>
  )
}