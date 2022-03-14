import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  cloneDeep as _cloneDeep
} from 'lodash';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../redux/counter/counterSlice';
import styles from './Counter.css';
import {
  setElement,
  setAnswer, 
  setElementAnswer
} from '../redux/input/inputSlice';
import InputText from './text-input.component';
import { randomString } from '../utils/form.utils';

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const elements = useSelector((state) => state.form.elements)
  const [overrideWith, setoverrideWith] = useState('');
  const [overrideOn, setOverrideOn] = useState('');
  const dispatch = useDispatch();

  const _handleCounterChange = (ops) => {
    let elems = _cloneDeep(elements);
    if(ops === '+'){
      let e = {
        id: count + 1,
        default: randomString(15),
        overrideWith: ''
      }
      elems.push(e);
      dispatch(increment());
      dispatch(setElement(elems));
    } else {
      dispatch(decrement());
    }
  }

  
  const _handleChangeAnswer = () => {
    let elems = _cloneDeep(elements);
    let oObj = elems.map(obj => {
      if (obj.id === overrideOn){
        return {...obj, overrideWith: overrideWith };
      }

      return obj;
    });
    //console.log(oObj);

    dispatch(setElement(oObj));
  }
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => _handleCounterChange('+')}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() =>_handleCounterChange('-')}
        >
          -
        </button>
      </div>

      {elements && elements.map((ele, i) => (
        <InputText 
          key={i} 
          {...ele}
        />
      ))}

      <div>
        <input 
          type='number'
          max={elements.length}
          placeholder='Override on'
          value={overrideOn} 
          onChange={(e) => setOverrideOn(+e.target.value)} 
        />
        <input 
          placeholder='Override with'
          value={overrideWith} 
          onChange={(e) => setoverrideWith(e.target.value)} 
        />
        <button onClick={_handleChangeAnswer}>Change</button>
      </div>
    </div>
  )
}
