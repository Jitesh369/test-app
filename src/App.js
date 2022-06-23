import React from 'react';
import './App.css';
import Posts from "./components/Posts/Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Internship from './pages/Internship';
import Collapsible from './pages/InternshipCollapse';
import MyButton from "./components/MyButton";
import Ambassador from './pages/Ambassador';
import Vaani from './pages/Vaani';

const App = () => {
	return (
		<div className="app">
			<h1 className="main-heading" style={{color: "tomato"}}>
				&emsp;Student Programmes
			</h1>

			<Posts />
			
            <Router>
                <MyButton to="internship" />
                <MyButton to="ambassador" />
                <MyButton to="vaani" />
                <Routes>
                    <Route path="/internship" 
                        element={<><Internship /><Collapsible /></>} />
                    <Route path="/ambassador" 
						element={<Ambassador />} />
                    <Route path="/vaani" 
                        element={<Vaani />} />
                </Routes>
            </Router>
        </div>
	);
};

export default App;