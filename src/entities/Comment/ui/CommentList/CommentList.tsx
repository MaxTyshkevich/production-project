import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { IComment } from '../../modal/types/comment';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList = memo(({ className, isLoading, comments }:CommentListProps) => {
    const { t } = useTranslation('article');

    if (isLoading) {
        return (
            <div className={classNames(cls.commentlist, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }
    return (
        <div className={classNames(cls.commentlist, {}, [className])}>
            {comments
                ? comments.map((comment) => <CommentCard key={comment.id} comment={comment} isLoading />)
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
});
