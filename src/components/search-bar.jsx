import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="image">Image Search</label>
            <input className="prompt" type="text" name="image" />
{/*            <i class="search icon"></i>
*/}          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
