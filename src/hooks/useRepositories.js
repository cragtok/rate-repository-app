import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const [repositories, setRepositories] = useState();
    const [sortMethod, setSortMethod] = useState(1);

    const generateSortObj = (code) => {
        switch (code) {
            case 1:
                return { orderBy: "CREATED_AT", orderDirection: "DESC" };
            case 2:
                return { orderBy: "RATING_AVERAGE", orderDirection: "DESC" };
            case 3:
                return { orderBy: "RATING_AVERAGE", orderDirection: "ASC" };
            default:
                return { orderBy: "CREATED_AT", orderDirection: "DESC" };
        }
    };

    const { error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: "cache-and-network",
        variables: generateSortObj(sortMethod),
        onCompleted: (data) => {
            setRepositories(data.repositories);
        },
    });

    return { repositories, sortMethod, setSortMethod, loading, error };
};

export default useRepositories;
