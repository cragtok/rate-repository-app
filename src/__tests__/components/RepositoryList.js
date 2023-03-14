import { RepositoryListContainer } from "../../components/RepositoryList";
import { render, screen, within } from "@testing-library/react-native";
import { renderThousandsNumber } from "../../utils/renderThousandsNumber";

describe("RepositoryList", () => {
    describe("RepositoryListContainer", () => {
        it("renders repository information correctly", () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                    hasNextPage: true,
                    endCursor:
                        "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
                    startCursor:
                        "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
                },
                edges: [
                    {
                        node: {
                            id: "jaredpalmer.formik",
                            fullName: "jaredpalmer/formik",
                            description:
                                "Build forms in React, without the tears",
                            language: "TypeScript",
                            forksCount: 1619,
                            stargazersCount: 21856,
                            ratingAverage: 88,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                "https://avatars2.githubusercontent.com/u/4060187?v=4",
                        },
                        cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
                    },
                    {
                        node: {
                            id: "async-library.react-async",
                            fullName: "async-library/react-async",
                            description:
                                "Flexible promise-based React data loader",
                            language: "JavaScript",
                            forksCount: 69,
                            stargazersCount: 1760,
                            ratingAverage: 72,
                            reviewCount: 3,
                            ownerAvatarUrl:
                                "https://avatars1.githubusercontent.com/u/54310907?v=4",
                        },
                        cursor: "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
                    },
                ],
            };

            // Add your test code here

            render(
                <RepositoryListContainer
                    repositories={repositories}
                    loading={false}
                    error={null}
                />
            );
            screen.debug();

            const repositoryItems = screen.getAllByTestId("repositoryItem");
            repositoryItems.forEach((item, idx) => {
                const {
                    fullName,
                    description,
                    language,
                    forksCount,
                    stargazersCount,
                    ratingAverage,
                    reviewCount,
                } = repositories.edges[idx].node;
                expect(
                    within(item).getByTestId("repositoryFullName")
                ).toHaveTextContent(fullName);
                expect(
                    within(item).getByTestId("repositoryDescription")
                ).toHaveTextContent(description);
                expect(
                    within(item).getByTestId("repositoryLanguage")
                ).toHaveTextContent(language);
                expect(
                    within(item).getByTestId("repositoryForksCount")
                ).toHaveTextContent(renderThousandsNumber(forksCount));
                expect(
                    within(item).getByTestId("repositoryStargazersCount")
                ).toHaveTextContent(renderThousandsNumber(stargazersCount));
                expect(
                    within(item).getByTestId("repositoryRatingAverage")
                ).toHaveTextContent(renderThousandsNumber(ratingAverage));
                expect(
                    within(item).getByTestId("repositoryReviewCount")
                ).toHaveTextContent(renderThousandsNumber(reviewCount));
            });

            expect(true).toBe(true);
        });
    });
});
