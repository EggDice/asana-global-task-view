import ReactDOM from 'react-dom'
import './scss/main.scss'
import container from './container'

const App = container.get('App')

ReactDOM.render(
  App,
  document.getElementById('app')
)
