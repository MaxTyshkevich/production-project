/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from '../modal/slice/counterSlice';
import { getCounterValue } from '../modal/selector/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
    const dispath = useDispatch();
    const countervalue = useSelector(getCounterValue);
    const incriment = () => {
        dispath(counterAction.increment());
    };
    const decriment = () => {
        dispath(counterAction.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">{countervalue}</h1>
            <button data-testid="increment-btn" type="button" onClick={() => incriment()}>
                incriment
            </button>
            <button data-testid="decrement-btn" type="button" onClick={() => decriment()}>
                decriment
            </button>
        </div>
    );
};
