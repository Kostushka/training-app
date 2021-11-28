import { useEffect, useRef } from 'react';

export const useObserver = (ref, isFetchingPosts, canLoad, callback) => {
    const observer = useRef();
    useEffect(() => {
        if (isFetchingPosts) return;
        if (observer.current) {
            observer.current.disconnect();
        }
        let cl = (entries, observer) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };

        observer.current = new IntersectionObserver(cl);
        observer.current.observe(ref.current);
    }, [isFetchingPosts]);
};
