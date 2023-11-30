import React, { FC, memo } from "react";
import search from "../../images/search.svg";
import "./Search.scss";
interface SearchProps {
    resultsQuantity: number;
    searchValue: string;
    onSearch: (value: string) => void;
}

const Search: FC<SearchProps> = memo(({ resultsQuantity = 0, searchValue, onSearch }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e?.target.value);
    };

    return (
        <section className="search">
            <div className="search__icon">
                <img src={search} alt="Search Icon" />
            </div>
            <input
                aria-label="Test search input"
                className="search__input"
                type="search"
                value={searchValue}
                onChange={handleChange}
                placeholder="What test are you looking for?"
            />
            <p className="search__quantity">{`${resultsQuantity} tests`}</p>
        </section>
    );
});

export default Search;
