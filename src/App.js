import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import JobList from './components/JobList/JobList';
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className='header-container'>
         <p className='header-text'>Search Jobs</p>
        </div>
        <JobList />
      </div>
    </Provider>
  );
}

export default App;
