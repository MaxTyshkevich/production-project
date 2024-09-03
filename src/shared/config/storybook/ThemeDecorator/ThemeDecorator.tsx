import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    document.documentElement.className = theme;
    return (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
};
