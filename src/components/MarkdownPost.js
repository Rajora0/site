import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Markdown from 'react-markdown';

const MarkdownPost = ({ match }) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://raw.githubusercontent.com/Rajora0/site/main/public/markdown/${match.params.id}.md`);
        setPost(response.data);
      } catch (error) {
        console.error('Erro ao buscar o post:', error);
      }
    };

    fetchPost();
  }, [match]);

  return (
    <div className="home-content">
        <div className="artigos">
            <Markdown>{post}</Markdown>
        </div>
    </div>
  );
};

export default MarkdownPost;
