import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useEffect } from 'react';
import { ReducersList, useAsyncStore } from 'shared/hooks/useAsyncStore';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { fetchProfileData, ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfile } from 'entities/Profile/model/selectors/getProfile';
import { useParams } from 'react-router-dom';
import { getUserAuthData, User } from 'entities/User';
import cls from './ProfilePage.module.scss';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    useAsyncStore({ initialReducers: reducers, removeAfterUnmount: true });
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const {
        form,
        error,
        isLoading,
        readonly,
    } = useSelector(getProfile);
    const user: User | undefined = useSelector(getUserAuthData);

    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    return (
        <div className={classNames(cls.profile, {}, [className])}>
            <ProfilePageHeader />
            <ProfileCard data={form} error={error} readonly={readonly} isLoading={isLoading} />
        </div>
    );
};

export default ProfilePage;
