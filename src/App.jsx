import RootRouter from './routers/RootRouter'
import store from './store/store'
import './index.css'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  )
}
