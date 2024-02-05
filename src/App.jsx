import './App.css'
import WeatherCard from './component/WeatherCard'
import { Provider } from 'react-redux'
import store from './utils/store'

function App() {

  return (
    <Provider store={store}>
    <div  className='w-screen h-screen bg-blue-300 flex   items-center  gap-32 justify-center'>
      <WeatherCard />
    </div>
    </Provider>
  )
}

export default App
