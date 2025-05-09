import { Container, Typography } from '@mui/material'
import { Provider } from 'react-redux'
import './App.css'
import AddHabitForm from './components/add-habit-form'
import store from './store/store'

function App() {

  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Typography component="h1" variant='h2' align='center'> Habit Tracket </Typography>
        <AddHabitForm/>
      </Container>
    </Provider>
  )
}

export default App
