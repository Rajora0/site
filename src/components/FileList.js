import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FileList extends Component {
  render() {
    const { files } = this.props;

    return (
      <ul className='file-list' style={{ listStyleType: "none" }}>
        {files.map((file, index) => (
          <li key={index}>
            <img className='project-card-img' src={file.imgSrc} alt={file.title} />
            <h2><Link to={`/${file.name}`}>{file.title}</Link></h2>
            <p>{file.description}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default FileList;
