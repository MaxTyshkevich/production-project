import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

const getScrolls = (state: StateSchema) => state.scrollPages.scrolls;

export const getScrollByPath = createSelector(
    getScrolls,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
