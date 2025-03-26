import {
  Button,
  Card,
  CardActions,
  CardContent,
  Pagination,
  Typography
} from '@mui/material'
import { useState } from 'react'

import { IReport } from '../types'

const ITEMS_PER_PAGE = 5

export default function ReportList({
  handleDeleteReport,
  reports
}: {
  handleDeleteReport: (id: number) => void
  reports: IReport[]
}) {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(reports.length / ITEMS_PER_PAGE)
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const paginatedReports = reports.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  return (
    <>
      <ul className='report-list'>
        {paginatedReports.map((report: IReport) => (
          <li key={report.id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{
                    color: 'text.secondary',
                    mb: 1.5,
                    textAlign: 'left',
                    fontSize: '12px'
                  }}
                >
                  {report.date?.format('DD.MM.YYYY')}
                </Typography>
                <Typography variant='body2'>{report.project}</Typography>
                <Typography variant='body2'>{report.comments}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleDeleteReport(report.id)}>
                  Удалить
                </Button>
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
        />
      )}
    </>
  )
}
