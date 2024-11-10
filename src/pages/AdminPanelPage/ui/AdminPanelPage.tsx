import React from 'react';
import { useTranslation } from 'react-i18next';

const AdminPanelPage = () => {
    const { t } = useTranslation('AdminPanel');

    return (
        <div>
            {t('Админ панель')}
        </div>
    );
};

export default AdminPanelPage;
