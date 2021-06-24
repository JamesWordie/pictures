import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './search-bar';
import ImageList from './image-list';

class App extends React.Component {
  state = { images: [] }

  handleSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
