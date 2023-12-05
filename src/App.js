import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaGithub, FaLinkedin} from 'react-icons/fa';


import MarkdownPost from './components/MarkdownPost';

import Projects from './pages/Projects';
import Profile from './pages/Profile';
import Home from './pages/Home';

function App() {
    const renderIconText = (IconComponent, label, route, isLink, href) => (
        isLink ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            
            <div className="icon-text">
              <IconComponent className={`icon ${label.toLowerCase()}-icon`} />
              <span className="hide">{label}</span>
            </div>
          </a>
        ) : (
          <div className="icon-text" onClick={() => window.location.href=route}>
            
            <IconComponent className={`icon ${label.toLowerCase()}-icon`} />
            <span className="hide">{label}</span>
          </div>
        )
      );
    
  return (
    <Router>
    <div className="App">
        <div className="sidebar">
            {renderIconText(FaHome, 'Home', '/')}
            {renderIconText(FaUser, 'Profile', '/profile')}
            {renderIconText(FaFolder, 'Projects', '/projects')}
            <div className="space"></div>
            {renderIconText(FaGithub, 'GitHub', '', true, 'https://github.com/Rajora0')}
            {renderIconText(FaLinkedin, 'LinkedIn', '', true, 'https://www.linkedin.com/in/rafael-rangel-841b2747/')}
        </div>
        <div className="main-content">
            <Switch>
                <Route exact path="/" component={Base} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/:id" component={MarkdownPost} />
            </Switch>
        </div>
    </div>
    </Router>
  );
}

const Base = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Load JSON file
    axios.get('https://raw.githubusercontent.com/Rajora0/site/main/public/articles.json')
      .then(response => {
        const data = response.data;
        const lastThreePosts = data.slice(Math.max(data.length - 3, 0)); // get last 3 posts
        setFiles(lastThreePosts);
      });
  }, []);

  return <Home files={files} />;
}

export default App;
