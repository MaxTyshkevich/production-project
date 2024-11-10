/* eslint-disable react-hooks/exhaustive-deps */
import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, ReactNode, UIEvent, useEffect, useRef,
} from 'react';

import { useInfinityScroll } from 'shared/hooks/useInfinityScroll';
import { useSelector } from 'react-redux';
import { getScrollByPath } from 'features/ScrollPage/modal/selectors/getScrollPage';
import { StateSchema } from 'app/providers/StoreProvider';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollAction } from 'features/ScrollPage';
import { useLocation } from 'react-router-dom';
import { useThrottle } from 'shared/hooks/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state:StateSchema) => getScrollByPath(state, location.pathname));
    useInfinityScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, []);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
        dispatch(scrollAction.setScrollPosition({
            path: location.pathname,
            position: e.currentTarget.scrollTop,
        }));
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            id={PAGE_ID}
        >
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
        </main>
    );
});
