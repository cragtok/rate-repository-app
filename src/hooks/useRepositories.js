import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (variables) => {
    const [sortMethod, setSortMethod] = useState(1);
    const [searchKeyword, setSearchKeyword] = useState("");

    const generateSortObj = (code) => {
        switch (code) {
            case 1:
                return {
                    searchKeyword,
                    orderBy: "CREATED_AT",
                    orderDirection: "DESC",
                };
            case 2:
                return {
                    searchKeyword,
                    orderBy: "RATING_AVERAGE",
                    orderDirection: "DESC",
                };
            case 3:
                return {
                    searchKeyword,
                    orderBy: "RATING_AVERAGE",
                    orderDirection: "ASC",
                };
            default:
                return {
                    searchKeyword,
                    orderBy: "CREATED_AT",
                    orderDirection: "DESC",
                };
        }
    };

    const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
        variables: { ...generateSortObj(sortMethod), ...variables },
    });

    const handleFetchMore = () => {
        const canFetchMore =
            !loading && data?.repositories.pageInfo.hasNextPage;

        if (!canFetchMore) {
            return;
        }

        fetchMore({
            variables: {
                after: data.repositories.pageInfo.endCursor,
                ...variables,
            },
        });
    };

    return {
        repositories: data?.repositories,
        loading,
        error,
        fetchMore: handleFetchMore,
        sortMethod,
        setSortMethod,
        searchKeyword,
        setSearchKeyword,
    };
};

export default useRepositories;
