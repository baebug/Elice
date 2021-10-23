import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase, setDiff } from '../modules/counter';
import Counter from './Counter';

function CounterContainer() {
    /* store.getState() 같은거 */
    const { number, diff } = useSelector(state => ({
        number: state.number,
        diff: state.diff
    }))
    // console.log(number, diff);

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <div>
            <Counter 
                number={number}
                diff={diff}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
                onSetDiff={onSetDiff}
            />
        </div>
    )
}

export default CounterContainer
