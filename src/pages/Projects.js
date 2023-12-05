import React from 'react';
import axios from 'axios';
import Search from './../components/Search'; // Certifique-se de ajustar o caminho do componente Search
import FileList from './../components/FileList'; // Certifique-se de ajustar o caminho do componente FileList

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articlesData: [],
      searchResults: [],
      otherArticles: [],
    };
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/Rajora0/site/master/public/articles.json')
      .then(response => {
        this.setState({
          articlesData: response.data,
          otherArticles: response.data,
        });
      });
  }

  search = searchValue => {
    const { articlesData } = this.state;
    const lowercasedValue = searchValue.toLowerCase().trim();

    if (lowercasedValue === '') {
      this.setState({
        searchResults: [],
        otherArticles: articlesData,
      });
    } else {
      const filtered = articlesData.filter(item =>
        Object.keys(item).some(key => item[key].toString().toLowerCase().includes(lowercasedValue))
      );

      const remainder = articlesData.filter(item =>
        !Object.keys(item).some(key => item[key].toString().toLowerCase().includes(lowercasedValue))
      );

      this.setState({
        searchResults: filtered,
        otherArticles: remainder,
      });
    }
  };

  render() {
    const { searchResults, otherArticles } = this.state;

    return (
      <div className='projects-page'>
        <div className='search'>
          <Search search={this.search} />
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
}

export default Projects;
