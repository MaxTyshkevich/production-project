import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { ArticleBlockText } from '../../modal/types/article';
import cls from './ArticleText.module.scss';

interface ArticleTextProps {
  block: ArticleBlockText;
  className?: string;
}

export const ArticleText = memo(({ block, className }: ArticleTextProps) => (

    <div className={classNames(cls.articletext, {}, [className])}>
        {block.title && (
            <Text title={block.title} className={cls.title} />
        )}
        {block.paragraphs.map((paragraph) => (
            <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
    </div>
));
