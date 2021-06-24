import React from 'react';
import SearchBar from './search-bar';

class App extends React.Component {
  handleSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
