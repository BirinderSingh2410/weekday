import './App.css';
import JobsList from './Components/JobsList/JobsList';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <JobsList />
    </Provider>
  );
}

export default App;
