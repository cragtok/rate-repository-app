import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
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

    const { error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
        variables: generateSortObj(sortMethod),
        onCompleted: (data) => {
            setRepositories(data.repositories);
        },
    });

    return {
        repositories,
        sortMethod,
        setSortMethod,
        searchKeyword,
        setSearchKeyword,
        loading,
        error,
    };
};

export default useRepositories;
