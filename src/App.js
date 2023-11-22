import './App.css';
import axios from 'axios';
import Markdown from 'react-markdown';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { FaHome, FaUser, FaFolder, FaGithub, FaLinkedin, FaSearch} from 'react-icons/fa';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'; // importando os ícones para e-mail e telefone


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
            {renderIconText(FaHome, 'Home', '/site/')}
            {renderIconText(FaUser, 'Profile', '/site/profile')}
            {renderIconText(FaFolder, 'Projects', '/site/projects')}
            <div className="space"></div>
            {renderIconText(FaGithub, 'GitHub', '', true, 'https://github.com/Rajora0')}
            {renderIconText(FaLinkedin, 'LinkedIn', '', true, 'https://www.linkedin.com/in/rafael-rangel-841b2747/')}
        </div>
        <div className="main-content">
            <Switch>
                <Route exact path="/site/" component={Base} />
                <Route exact path="/site/profile" component={Profile} />
                <Route exact path="/site/projects" component={Projects} />
                <Route exact path="/site/:id" component={MarkdownPost} />
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
    axios.get('https://raw.githubusercontent.com/Rajora0/site/master/public/articles.json')
      .then(response => {
        const data = response.data;
        const lastThreePosts = data.slice(Math.max(data.length - 3, 0)); // get last 3 posts
        setFiles(lastThreePosts);
      });
  }, []);

  return <Home files={files} />;
}

const Home = ({ files }) => {

  return (
    <div className="home-content">

    <div className="blog-title">
        <h1>Welcome to the Awesome Blog!</h1>
        <p>Here you will find the final destination for physics lovers, programming, and the wonders of the cosmos. Join us on a stellar discovery journey as we explore the subtleties of the universe through the lenses of science and programming language. Live long and prosper!</p>
    </div>

    <div className="blog-description">
        <h2>About our Blog</h2>
        <p>Our blog is the home of curiosity - a universe where science, programming, and Artificial Intelligence meet. We explore general science issues, delve into coding and discuss the most impressive nuances of AI. This is your one-stop shop to feed your mind with glimpses of distant galaxies and the profound vastness of the digital universe.</p>
    </div>

    <h2>Recent Posts</h2>

    <div className="recent-posts">
            {files.map((file, index) => (
              <ProjectCard key={index} file={file} />
            ))}
    </div>

    <div className="about-author">
        <h2>About the Author</h2>
        <h3>Rafael Rangel</h3>
        <p>Graduated in Physics from UNIFEI and postgraduated in Data Science and Big Data at PUC Minas, the author is currently studying for a Master's degree in Astrophysics with a focus on Data Science. His work as a data scientist at ZENVIA provides him with the opportunity to explore advanced techniques of Machine Learning, Deep Learning, among other areas related to Data Science. His process involves extensive use of Python, with libraries like NumPy, Pandas, Scikit-learn, TensorFlow, and Keras.

        His experience includes the use of Machine Learning tools for cloud environments such as Databricks, Google Vertex AI, and Amazon SageMaker, and he is skilled in code versioning with Git and Machine Learning project management with MLflow. His main interests are Machine Learning, Deep Learning, Data Science, Astrophysics, and Python.
        </p>
    </div>


    <div className="contact">
        <h2>Contact Us</h2>
        <Contact /> {/* Chame o componente Contact aqui */}
    </div>

    </div>
  );
};

const Contact = () => {
  return (
      <div className="contact-container">
          <div className="contact-item">
              <AiOutlineMail className="contact-icon" /> {/* ícone para email */}
              <a href="mailto:example@example.com">rafaelj492@gmail.com</a> {/* substitua pelo seu e-mail */}
          </div>
          <div className="contact-item">
              <AiOutlinePhone className="contact-icon" /> {/* ícone para telefone */}
              <a href="tel:+12345678901">+55 35 99123 9449</a> {/* substitua pelo seu telefone */}
          </div>
      </div>
  );
};


const Profile = () => {
  return (
  <div style={{marginLeft: "100px", marginRight: "100px" }}>
      <div className="profile-content" style={{marginBottom: "50px"}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "start"}}>
              <div>
                  <img 
                    src={'https://avatars.githubusercontent.com/u/48283855?v=4'}
                    alt='Profile' 
                    style={{marginTop: "50px", width: "200px", height: "200px", borderRadius: "50%"}}
                  />
              </div>
              
              <div style={{marginLeft: "20px"}}>
                  <h1>Rafael Rangel</h1>
                  <p>Data Scientist | Developer | Python | Physicist</p>
                  <p>Phone: +5535991239449</p>
                  <p>Email: <a href="mailto:rafaelj492@gmail.com" target="_blank" rel="noopener noreferrer">rafaelj492@gmail.com</a></p>
              </div>
              
          </div>

          

          <h2>About</h2>
          <p>I have a degree in Physics from UNIFEI and recently completed a postgraduate program in Data Science and Big Data at PUC Minas. Currently, I am pursuing a master's degree in Astrophysics, with a focus on Data Science. I work as a Data Scientist at ZENVIA, where I have the opportunity to explore advanced techniques in Machine Learning, Deep Learning, and other areas related to Data Science, applied to various complex and challenging problems. I primarily use the Python language to develop my analyses and models, along with specific libraries and tools such as NumPy, Pandas, Scikit-learn, TensorFlow, and Keras.</p>
          
          <h2>Main Skills</h2>
          <ul>
              <li>🤖Machine Learning</li>
              <li>🧠Deep Learning</li>
              <li>📈Data Science</li>
              <li>🌌Astrophysics</li>
              <li>🐍Python</li>
              <li><a href="https://cloud.google.com/vertex-ai">🪐Google Vertex AI</a></li>
              <li><a href="https://aws.amazon.com/sagemaker/">🧪Amazon SageMaker</a></li>
              <li>🔍Git</li>
              <li><a href="https://mlflow.org/">📦MLflow</a></li>
          </ul>
          
          <h2>Education</h2>
          <ul>
              <li>
                  <h3>Universidade Federal de Itajubá</h3>
                  <p>Master's Degree in Physics, Astrophysics (2022 - 2024)</p>
                  <p>Work in Progress: GALAXY CLASSIFICATION USING NEURAL NETWORKS AND PRE-TRAINED MODELS</p>
                  <p>This ongoing work addresses the classification of galaxies through the application of neural network techniques and pre-trained models.</p>
              </li>
              <li>
                  <h3>Pontifícia Universidade Católica de Minas Gerais</h3>
                  <p>Postgraduate Program in Data Science and Big Data Analytics, Data Processing and Data Processing Technology (2022 - 2023)</p>
                  <p>Final Project: NEURAL NETWORKS FOR RAPID DIAGNOSIS OF MEDICAL IMAGES</p>
                  <p>The study proposes the use of Neural Networks for the detection and classification of medical images in order to assist in the rapid and accurate diagnosis of diseases. This approach is applied to various datasets, including resonance images for Alzheimer's diagnosis, digital mammography images for breast cancer diagnosis, and X-ray images of lungs for COVID-19 detection.</p>
              </li>
              <li>
                  <h3>Universidade Federal de Itajubá</h3>
                  <p>Bachelor's Degree in Physics, Physics (2016 - 2021)</p>
                  <p>Undergraduate Thesis: MACHINE LEARNING IN GALAXY CLASSIFICATION</p>
                  <p>Galaxy classification is often a complicated process as it is mostly based on visual morphological type, which implies a time-consuming visual classification process due to the large number of galaxies. In order to facilitate this classification, we aim to teach a machine capable of labeling these objects, enabling quick and direct analysis.</p>
              </li>
          </ul>
          
          <h2>Experience</h2>
          <ul>
              <li>
                  <h3>ZENVIA</h3>
                  <p>Data Scientist (Nov 2021 - Present)</p>
                  <p>I am part of the data engineering team, focusing on data intelligence. I have experience in collecting, preprocessing, and storing data from various sources. Additionally, I apply statistical and data modeling techniques to perform analysis, create reports, and build dashboards.</p>
              </li>
              <li>
                  <h3>Instituto Nacional de Telecomunicações - Inatel</h3>
                  <p>Professor (May 2021 - Nov 2021)</p>
                  <p>As a Information Technology professor, I had the opportunity to teach classes and develop teaching materials aligned with the pre-established content. Additionally, I aimed to promote a dynamic learning experience by conducting classroom activities and promptly addressing students' doubts.</p>
              </li>
              <li>
                  <h3>CNPq</h3>
                  <p>Undergraduate Research Scholar Pibic/CNPq (Oct 2020 - Apr 2021)</p>
                  <p>As part of this undergraduate research project, I used machine learning techniques to create a neural network-based classifier for more accurate classification of open star clusters.</p>
              </li>
              <li>
                  <h3>CNPq</h3>
                  <p>Undergraduate Research Scholar Pibic/CNPq (Jun 2019 - Oct 2020)</p>
                  <p>As part of this undergraduate research project, my main objective was to develop a morphological classifier for galaxies using machine learning techniques.</p>
              </li>
          </ul>
          
          <h2>Licenses and Certifications</h2>
          <ul>
              <li>Databricks Lakehouse Fundamentals</li>
              <li>Data Mesh: Data as a Product</li>
              <li>Data Mesh: A Distributed Approach to Data</li>
              <li>Certified Docker DCA</li>
              <li>Advanced Machine Learning Training</li>
              <li>Google Cloud Fundamentals: Core Infrastructure</li>
              <li>Machine Learning for Digital Business Training</li>
              <li>Natural Language Processing Techniques Training</li>
              <li>Foundations: Data, Data, Everywhere</li>
              <li>Python Training</li>
              <li>Artificial Intelligence and Applications in Physics Course</li>
          </ul>
          
          <h2>Languages</h2>
          <ul>
              <li>English: Basic to Intermediate</li>
              <li>Portuguese: Fluent or Native</li>

          </ul>
      </div>
  </div>
  )
}

const Projects = () => {
  const [articlesData, setArticlesData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [otherArticles, setOtherArticles] = useState([]);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/Rajora0/site/master/public/articles.json')
      .then(response => {
        setArticlesData(response.data);
        setOtherArticles(response.data);
      });
  }, []);

  const search = searchValue => {
    const lowercasedValue = searchValue.toLowerCase().trim();
    if (lowercasedValue === '') {
      setSearchResults([]);
      setOtherArticles(articlesData);
    } else {
      const filtered = articlesData.filter(item =>
        Object.keys(item).some(key => item[key].toString().toLowerCase().includes(lowercasedValue))
      );
      const remainder = articlesData.filter(item =>
        !Object.keys(item).some(key => item[key].toString().toLowerCase().includes(lowercasedValue))
      );
      setSearchResults(filtered);
      setOtherArticles(remainder);
    }
  };

  return (
    <div className='projects-page'>
      <div className='search'>
        <Search search={search} />
      </div>
      <div className='projects-list-search'>
        <FileList files={searchResults} />
      </div>
      <div className='projects-list-other'>
        <FileList files={otherArticles} />
      </div>
    </div>
  );
}


const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("");
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  }

  return (
    <form className="search">
      <input
        type="text"
        value={searchValue}
        onChange={handleSearchInputChanges}
      />
      <button onClick={callSearchFunction} type="submit">
        <FaSearch /> {/* Incluindo o ícone de busca no botão. */}
      </button>
    </form>
  );
}

const FileList = ({ files }) => {
  return (
    <ul className='file-list' style={{ listStyleType: "none" }}>
      {files.map((file, index) => (
        <li key={index}>
          <img className='project-card-img' src={file.imgSrc} alt={file.title} />
          <h2><Link to={`/site/${file.name}`}>{file.title}</Link></h2>
          <p>{file.description}</p>
        </li>
      ))}
    </ul>
  );
};

const ProjectCard = ({file}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleMouseHover = () => setIsHovering(!isHovering);
  const handleReadMoreClick = () => setExpanded(!expanded);

  return (
      <div>
          <img className='project-card-img' src={file.imgSrc} alt={file.title} />
          <h2>
              <Link to={`/site/${file.name}`}>
                  {file.title}
              </Link>
          </h2> 
          <p className={"project-card-description" + (expanded ? " expanded" : "")}>
              {file.description}
          </p>  
          <div 
              className="read-more" 
              onClick={handleReadMoreClick} 
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseHover}
          >
          {isHovering && (expanded ? "Read Less" : "Read More")}
          </div>
      </div>
  )
}

const MarkdownPost = ({ match }) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/Rajora0/site/gh-pages/markdown/${match.params.id}.md`)
      .then(res => setPost(res.data));
  }, [match]);

  return (
    <div className="artigos">
        <Markdown>{post}</Markdown>
    </div>
  );
}


export default App;