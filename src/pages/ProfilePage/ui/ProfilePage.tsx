import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useParams } from 'react-router-dom';
import { VStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';
import { Text } from 'shared/ui/Text/Text';
import { EditableProfileCard } from 'features/editableProfileCard';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: FC<ProfilePageProps> = ({ className }) => {
    const { t } = useTranslation('profile');
    const { id } = useParams();
    const dispatch = useAppDispatch();

    if (!id) {
        return <Text text={t('Профиль не найден')} />;
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max className={classNames(cls.profile, {}, [className])}>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
