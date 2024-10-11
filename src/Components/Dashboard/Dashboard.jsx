import React from 'react'
import QuickAccess from './QuickAccess'
import RecentExpenses from './RecentExpenses'

export default function Dashboard() {
  return (
    <div>
        <QuickAccess />
        <RecentExpenses />
    </div>
  )
}
