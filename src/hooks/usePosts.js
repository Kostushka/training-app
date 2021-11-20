import { useMemo } from 'react';

const useSortedPosts = (posts, sort) => {
    const sortPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);
    return sortPosts;
};

export const usePosts = (posts, sort, search) => {
    const sortPosts = useSortedPosts(posts, sort);
    const searchedAndSortedPosts = useMemo(() => {
        return sortPosts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [sortPosts, search]);
    return searchedAndSortedPosts;
};
