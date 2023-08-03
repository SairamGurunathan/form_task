import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './Components/TableData';
import { useState } from 'react';
import Billing from './Billing';


function App() {

  const [isTable, setIsTable] = useState(false);
  const [userData, setUserData] = useState([]);
  const formClick = () => {
    setIsTable(true)
  }
  const fetchData = (inputData) => {
    setUserData([...userData,inputData])
  }
  const hide = () => {
    setIsTable(false)
  }
  return (
    <div className="App">
    
    {isTable ? (<Billing fetchData = {fetchData} hide = {hide} />) : (<><TableData
    userData={userData}/> <div className='text-center mt-5'><button type="button" className="btn px-5 fs-3 btn-outline-light" onClick={formClick}>Add</button></div></>)}
   
    </div>
  );
}

export default App;
