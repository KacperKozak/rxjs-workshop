import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './appActions';

class App extends Component {
    handleSearch = event => {
        this.props.search(event.target.value);
    };
    render() {
        const { list, query } = this.props;
        return (
            <div className="app">
                <div className="search">
                    <input
                        type="search"
                        value={query}
                        onChange={this.handleSearch}
                        placeholder="Search…"
                    />
                </div>
                <ul className="results">
                    {list.map(item => (
                        <li key={item.id} className="results-item">
                            <img src={item.image_url} alt="" />
                            <strong>{item.name}</strong>
                            <br />
                            <span>IBU: {item.ibu}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(state => state, actions)(App);
