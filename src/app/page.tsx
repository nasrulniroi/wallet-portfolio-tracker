"use client"
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'

export default function Dashboard() {
  const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
  const chartData = Array.from({length: 30}, () => Math.random() * 1000 + 500)
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Wallet Portfolio Tracker</h1>
        <p className="text-[var(--muted)] mt-1">Multi-chain wallet portfolio tracking across Ethereum, Polygon, Arbitrum, Optimism, BSC, Solana, and</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total Value" value="$12.4M" change={5.2} icon="💰" />
        <StatsCard label="Active Items" value="24" icon="📊" />
        <StatsCard label="24h Change" value="+2.3%" change={2.3} icon="📈" />
        <StatsCard label="Alerts" value="7" icon="🔔" />
      </div>
      <Chart data={chartData} labels={labels} label="Performance Overview" />
      <DataTable columns={["Item", "Value", "Change", "Status", "Updated"]} data={[
        ["Item A", "$1,234", "+5.2%", "Active", "2m ago"],
        ["Item B", "$5,678", "-1.3%", "Active", "5m ago"],
        ["Item C", "$9,012", "+8.7%", "Pending", "10m ago"],
        ["Item D", "$3,456", "+2.1%", "Active", "15m ago"],
        ["Item E", "$7,890", "-0.5%", "Inactive", "30m ago"],
      ]} />
    </div>
  )
}