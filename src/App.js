import './App.css';

import { Provider } from 'react-redux';
import store from './Redux/Store';

import TaskList from './Components/TaskList/TaskList';
import Sidebar from './Components/SideBar/Sidebar';
import Filter from './Components/TaskList/Filters';
import TaskForm from './Components/TaskList/TaskForm';


function App() {


  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-lg-9 col-md-8 col-sm-12">
            <Filter />
            <TaskList />
            <TaskForm />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
