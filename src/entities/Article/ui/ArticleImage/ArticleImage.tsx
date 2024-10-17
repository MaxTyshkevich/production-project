import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
import { ArticleBlockImage } from 'entities/Article/modal/types/article';
import { TextAlign, Text } from 'shared/ui/Text/Text';
import cls from './ArticleImage.module.scss';

interface ArticleImageProps {
  block: ArticleBlockImage;
  className?: string;
}

export const ArticleImage = memo(({ className, block }:ArticleImageProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.articleimage, {}, [className])}>
        <img src={block.src} alt={block.title} className={cls.img} />
        {block.title && (
            <Text text={block.title} align={TextAlign.CENTER} />
        )}
    </div>
));
