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
                <input type="search" value={query} onChange={this.handleSearch} />
                <ul className="results">
                    {list.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        );
    }
}

export default connect(state => state, actions)(App);
