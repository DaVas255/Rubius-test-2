import Textarea from '@mui/joy/Textarea'
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Projects } from '../app/mock'
import { IReport } from '../types'

export default function Form({
  handleAddReport
}: {
  handleAddReport: (data: Omit<IReport, 'id'>) => void
}) {
  const { register, handleSubmit, control } = useForm<IReport>({
    defaultValues: {
      date: null,
      project: Projects[0].name,
      comments: ''
    }
  })

  const onSubmit: SubmitHandler<IReport> = data => {
    const reportData = {
      ...data,
      id: Date.now()
    }
    handleAddReport(reportData)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='form'
    >
      <Controller
        name='date'
        control={control}
        rules={{ required: 'Дата обязательна' }}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label='Выберите дату'
            value={field.value}
            onChange={field.onChange}
            slotProps={{
              textField: {
                error: !!error,
                helperText: error?.message
              }
            }}
          />
        )}
      />

      <FormControl
        variant='standard'
        fullWidth
      >
        <InputLabel>Проект</InputLabel>
        <Select
          label='project'
          {...register('project', { required: true })}
          color='secondary'
          defaultValue={Projects[0].name}
        >
          {Projects.map(project => (
            <MenuItem
              key={project.id}
              value={project.name}
            >
              {project.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Textarea
        color='primary'
        disabled={false}
        minRows={2}
        placeholder='Комментарий'
        size='lg'
        variant='soft'
        {...register('comments', { required: true })}
      />

      <Button
        variant='contained'
        type='submit'
      >
        Добавить
      </Button>
    </form>
  )
}
