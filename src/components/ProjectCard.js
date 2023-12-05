import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link se estiver usando rotas

function ProjectCard({ file }) {
    const [isHovering, setIsHovering] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleMouseHover = () => setIsHovering(!isHovering);
    const handleReadMoreClick = () => setExpanded(!expanded);

    return (
        <div>
            <img className='project-card-img' src={file.imgSrc} alt={file.title} />
            <h2>
                <Link to={`/${file.name}`}>
                    {file.title}
                </Link>
            </h2> 
            <p className={`project-card-description ${expanded ? 'expanded' : ''}`}>
                {file.description}
            </p>  
            <div 
                className="read-more" 
                onClick={handleReadMoreClick} 
                onMouseEnter={handleMouseHover}
                onMouseLeave={handleMouseHover}
            >
                {isHovering && (expanded ? 'Read Less' : 'Read More')}
            </div>
        </div>
    );
}

export default ProjectCard;
