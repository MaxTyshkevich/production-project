import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { componentRender } from 'shared/lib/tests/renderFullWrapper';
import { screen } from '@testing-library/dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import userEvent from '@testing-library/user-event';
import { $api } from 'shared/api/api';
import { profileReducer } from '../../model/slices/profileSlice';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 232,
    city: 'Moscov',
    currency: Currency.RUB,
    country: Country.Kazakhstan,
    username: 'admin123',
};

// jest.mock('shared/lib/hooks/useAppDispatch/useAppDispatch', () => ({
//     useAppDispatch: jest.fn(),
// }));
// jest.mock('../../model/services/fetchProfileData/fetchProfileData');

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin' },
        },
    },

    asyncReducers: {
        profile: profileReducer,
    },
};

describe('feature/EditableProfileCard', () => {
    // test('readonly button', async () => {
    //     const dispatch = jest.fn();
    //     (useAppDispatch as jest.Mock).mockReturnValue(dispatch);
    //     componentRender(<EditableProfileCard id="1" />, options);

    //     await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

    //     expect(dispatch).toHaveBeenCalledWith(fetchProfileData('1'));
    //     expect(fetchProfileData).toHaveBeenCalledWith('1');
    //       expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    // });

    test('Режим рид онли должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(await screen.findByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });

    test('При отмене значений форма дожна обнулятся', async () => {
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'firstname');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'lastname');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('firstname');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('lastname');

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
        /*  screen.debug(screen.getByTestId('ProfileCard.firstname')); */
    });

    test('Сохранение невалидное значение', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
        /* screen.debug(await screen.findByTestId('EditableProfileCard.Error.Paragraph')); */
    });

    test('Успешное обновление формы, put запрос ', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'firstname');

        expect(mockPutReq).toHaveBeenCalled();
    });
});
