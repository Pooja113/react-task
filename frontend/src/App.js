import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import JobsList from "./components/JobsList/JobsList";
import JobForm from "./components/JobForm/JobForm";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';


function App() {
  const [,dispatch] = useStateValue();
  
  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user:null
        })
      }
    })
  },[dispatch])
 

  return (
    <Router>
      <Routes>
        <Route exact path="/"  element={
          <React.Fragment> 
            <Header />
            <JobForm />
            <JobsList />
            <Footer />

          </React.Fragment>
        } />

      </Routes>    
  </Router>
  );
}

export default App;
