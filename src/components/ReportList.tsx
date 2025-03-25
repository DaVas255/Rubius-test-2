import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from '@mui/material'

import { IReport } from '../types'

export default function ReportList({
  handleDeleteReport,
  reports
}: {
  handleDeleteReport: (id: number) => void
  reports: IReport[]
}) {
  return (
    <ul className='report-list'>
      {reports.map((report: IReport) => (
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
  )
}
