import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './appActions';

class App extends Component {
    handleSearch = event => {
        this.props.search(event.target.value);
    };
    render() {
        const { list, query, isLoading } = this.props;
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
                {isLoading && (
                    <img
                        src="https://icongr.am/material/loading.svg?color=ffffff&size=50"
                        className="loading"
                        alt=""
                    />
                )}
                <ul className="results">
                    {query &&
                        list.map(item => (
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
