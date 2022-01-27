import React from "react";
import Title from "@/components/reusable/Title";

const SearchResults = ({ results = [], searchedKeyword }) => {
    return (
        <div className="w-full flex flex-col items-center">
            {results.length > 0 ? (
                <>
                    <Title>
                        {results.length} result{results.length > 1 && "s"} for "
                        {searchedKeyword}"
                    </Title>
                    <p className="text-base text-center">
                        We have found {results.length} match
                        {results.length > 1 && "es"} with the word you searched
                        "{searchedKeyword}".
                    </p>
                </>
            ) : (
                <>
                    <Title>0 results for "{searchedKeyword}"</Title>
                    <p className="text-base text-center">
                        There is nothing found that matches your search
                        criteria. Try different keywords.
                    </p>
                </>
            )}
        </div>
    );
};

export default SearchResults;
