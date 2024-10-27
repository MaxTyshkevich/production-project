import { useEffect, useRef, RefObject } from 'react';

interface UseInfinityScrollOption {
    wrapperRef: RefObject<HTMLElement | null>;
    triggerRef: RefObject<HTMLElement | null>;
    callback?: () => void;
}

export const useInfinityScroll = ({ wrapperRef, triggerRef, callback }: UseInfinityScrollOption) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (!!callback && wrapperElement && triggerElement) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }

        return () => {
            if (observer.current && triggerElement) {
                observer.current.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
