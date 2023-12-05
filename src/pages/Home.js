import React from 'react';
import ProjectCard from './../components/ProjectCard'; // Certifique-se de fornecer o caminho correto para o componente ProjectCard
import Contact from './../components/Contact'; // Certifique-se de fornecer o caminho correto para o componente Contact

const Home = ({ files }) => {
  return (
    <div className="home-content">
      <div className="blog-title">
        <h1>Welcome to the Awesome Blog!</h1>
        <p>Here you will find the final destination for physics lovers, programming, and the wonders of the cosmos. Join us on a stellar discovery journey as we explore the subtleties of the universe through the lenses of science and programming language. Live long and prosper!</p>
      </div>

      <div className="blog-description">
        <h2>About our Blog</h2>
        <p>Our blog is the home of curiosity - a universe where science, programming, and Artificial Intelligence meet. We explore general science issues, delve into coding, and discuss the most impressive nuances of AI. This is your one-stop shop to feed your mind with glimpses of distant galaxies and the profound vastness of the digital universe.</p>
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
        <p>Graduated in Physics from UNIFEI and postgraduated in Data Science and Big Data at PUC Minas, the author is currently studying for a Master's degree in Astrophysics with a focus on Data Science. His work as a data scientist at ZENVIA provides him with the opportunity to explore advanced techniques of Machine Learning, Deep Learning, among other areas related to Data Science. His process involves extensive use of Python, with libraries like NumPy, Pandas, Scikit-learn, TensorFlow, and Keras.</p>
        <p>His experience includes the use of Machine Learning tools for cloud environments such as Databricks, Google Vertex AI, and Amazon SageMaker, and he is skilled in code versioning with Git and Machine Learning project management with MLflow. His main interests are Machine Learning, Deep Learning, Data Science, Astrophysics, and Python.</p>
      </div>

      <div className="contact">
        <h2>Contact Us</h2>
        <Contact /> {/* Chame o componente Contact aqui */}
      </div>
    </div>
  );
};

export default Home;
