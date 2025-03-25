import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import System from '../components/System';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <System />
    </LocalizationProvider>
  );
}

export default App;
