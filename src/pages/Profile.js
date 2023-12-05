import React, { Component } from 'react';

class Profile extends Component {
render() {
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
}

export default Profile;