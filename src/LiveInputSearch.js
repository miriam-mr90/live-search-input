import React, { Component } from 'react';

import View from './LiveInputSearch.view.jsx';

export default class LiveInputSearch extends Component {
    constructor(props) {
        super();

        this.state = {
            results: [],
            isFetching: false,
        };

        this.searchResults = this.searchResults.bind(this);
    }

    isResultsEmpty() {
        return this.state.results.length > 0;
    }

    isValueIncludeInText(value, text) {
        return text ? text.toLowerCase().indexOf(value.toLowerCase()) !== -1 : false;
    }

    searchResults(value) {
        this.setState({
            isFetching: true,
        });

        let resultsToDisplay = [];

        if(value !== '' && value.length > 1) {
            const availableResults = this.props.services;

            resultsToDisplay = availableResults.filter( item => (
                this.isValueIncludeInText(value, item.name) || this.isValueIncludeInText(value, item.parent_name)
            ));
        };

        this.setState({
            results: resultsToDisplay,
            isFetching: false,
        });
    }

    render() {
        return (
            <View
                {...this.props}
                {...this.state}
                displayResults={!!this.isResultsEmpty()}
                searchResults={this.searchResults}
            />
        );
    }
}
