import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'

function App() {

  return (
    <Provider store={store}>
      <div>hiiii we are creating habit app</div>
    </Provider>
  )
}

export default App
