import React, { Component } from 'react';
import PropTypes from 'prop-types';

import View from './LiveInputSearch.view.jsx';

export default class LiveInputSearch extends Component {
    constructor() {
        super();

        this.state = {
            results: [],
            isFetching: false,
            inputValue: null,
        };

        this.searchResults = this.searchResults.bind(this);
        this.getHighlightedItem = this.getHighlightedItem.bind(this);
    }

    isResultsEmpty() {
        return this.state.results.length > 0;
    }

    getHighlightedItem(value, item) {
        const year = `<span>${this.props.translations.from} ${item.Year}</span>`;
        let title = item.Title;
        const regex = new RegExp(`\\b${value}\\b`, 'i');
        const matches = title.match(regex);

        if (matches) {
            matches.forEach(m => (title = title.replace(m, `<em class="position">${m}</em>`)));
        }

        return `${title} ${year}`;
    }

    searchResults(value) {
        this.setState({
            results: [],
            inputValue: '',
        })

        if(value !== '' && value.length > 2) {
            this.setState({
                isFetching: true,
            });

            const DATA_SERVICE_URL = `http://www.omdbapi.com/?apikey=b36c7394&s=${value}`;

            fetch(DATA_SERVICE_URL)
                .then(response => response.json())
                .then(result => {
                    this.setState({
                        results: result.Search ? result.Search : [],
                        isFetching: false,
                        inputValue: value,
                    })
                    console.log('*** result ***');
                    console.log(result);
                })
                .catch(e => {
                    console.log(e);
                    this.setState({
                        isFetching: false
                    });
                });
        }
    }

    render() {
        return (
            <View
                {...this.props}
                {...this.state}
                displayResults={!!this.isResultsEmpty()}
                searchResults={this.searchResults}
                getHighlightedItem={this.getHighlightedItem}
            />
        );
    }
}

LiveInputSearch.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    translations: PropTypes.object,
};

LiveInputSearch.defaultProps = {
    label: '',
    placeholder: '',
    translations: {},
};
