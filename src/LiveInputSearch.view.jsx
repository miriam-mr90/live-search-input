import React from 'react';

import {ReactComponent as SearchIcon} from './assets/icons/search.svg';
import Spinner from './Spinner.jsx';

import {
    Icon,
    Input,
    InputWrapper,
    Label,
    Results,
    Wrapper
} from './LiveInputSearch.styles.jsx';

const View = ({
    displayResults,
    label,
    placeholder,
    results,
    searchResults,
    translations,
    isFetching,
}) => (
    <Wrapper>
        <Label>{label}</Label>
        <InputWrapper>
            <Input
                type='text'
                placeholder={placeholder}
                onChange={(event) => searchResults(event.target.value)}
            />

            <Icon as={ isFetching ? Spinner : SearchIcon }/>
            {displayResults && ( <Results>
                {results.map((item, index) => (
                    <li key={index}>
                        {item.name}
                        {item.parent_name !== null && (
                            <span>{`${translations.in} ${item.parent_name}`}</span>
                        )}
                    </li>
                ))}
            </Results>)}
        </InputWrapper>
    </Wrapper>
);

export default View;