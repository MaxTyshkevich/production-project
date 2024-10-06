import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Code } from 'shared/ui/Code/Code';
import { ArticleBlockCode } from 'entities/Article/modal/types/article';
import cls from './ArticleCodeBlock.module.scss';

interface ArticleCodeBlockProps {
  block: ArticleBlockCode;
  className?: string;
}

export const ArticleCodeBlock = memo(({ className, block }:ArticleCodeBlockProps) => (
    <div className={classNames(cls.articlecodeblock, {}, [className])}>
        <Code text={block.code} />
    </div>
));
