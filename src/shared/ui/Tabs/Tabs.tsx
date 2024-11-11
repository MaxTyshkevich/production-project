import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';

import { ArticleType } from 'entities/Article';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
  value: ArticleType;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: ArticleType;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props:TabsProps) => {
    const {
        className, tabs, onTabClick, value,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    key={tab.value}
                    className={cls.tab}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
