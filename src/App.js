import React,{useState} from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';
import 'h8k-components';

const title = "Hacker Dormitory";
function App() {
  const [residents,setResidents] = useState([])
  const [isVerified,setIsVerified] = useState({studentName:'',studentVerified:true,studentValidity:true})
  const [studentName, setStudentName] = useState('');
  const [joiningDate, setJoiningDate] = useState('');

  return (
    <div className="App">s
        <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search joiningDate={joiningDate} studentName={studentName} residents={residents} setResidents={setResidents} setIsVerified={setIsVerified} setJoiningDate={setJoiningDate} setStudentName={setStudentName} setResident={setResidents} />
        <Error isVerified={isVerified}/>
        <ResidentsList residents={residents}/>
      </div>
    </div>
  );
}

export default App;
