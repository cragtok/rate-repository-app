import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);

    const createReview = async ({
        ownerName,
        repositoryName,
        rating,
        text,
    }) => {
        // call the mutate function here with the right arguments
        const { data } = await mutate({
            variables: {
                ownerName,
                repositoryName,
                rating: Number(rating),
                text,
            },
        });
        return data.createReview;
    };

    return [createReview, result];
};

export default useReview;
