import { useState } from 'react'

import { IReport } from '../types'

import Form from './Form'
import ReportList from './ReportList'

export default function System() {
  const [reports, setReport] = useState<IReport[]>([])

  function handleAddReport(newReport: Omit<IReport, 'id'>) {
    const reportWithId = { ...newReport, id: Date.now() }
    setReport([...reports, reportWithId])
  }

  function handleDeleteReport(id: number) {
    setReport(reports.filter(report => report.id !== id))
  }

  return (
    <>
      <Form handleAddReport={handleAddReport} />
      <ReportList
        reports={reports}
        handleDeleteReport={handleDeleteReport}
      />
    </>
  )
}
