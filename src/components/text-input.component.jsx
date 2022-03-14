import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  cloneDeep as _cloneDeep
} from 'lodash';
import styled from 'styled-components';

import {
  setElement,
  setAnswer, 
  setElementAnswer
} from '../redux/input/inputSlice';

const TextInput = (props) => {
  
  const _initValue = () => {
    let val = '';
    if(props.default.length > 0) {
      val = props.default;
    } 
    if(props.overrideWith.length > 0){
      val = props.overrideWith;
    }
    return val;
  }

  const dispatch = useDispatch();
  const [ color, setColor ] = useState(_initValue());
  useEffect(() => { setColor(_initValue()) }, [props])
  let timeOut;

  

  const _handleChange = (e) => {
    console.log(e.target.value);
    clearTimeout(timeOut);
    let color = e.target.value;
    setColor(color);
    timeOut = setTimeout(() => {
      dispatch(setElementAnswer({
        id: props.id,
        value: color  
      }));
    }, 200);
    
  }

  return (
    <div style={{
      maxWidth: '300px', 
      display: 'flex', 
      justifyContent: 'flex-start',
      alignItems: 'center',
      margin: '15px 0'}}
    >
      
      <ElementLabel>Color {props.id}</ElementLabel>
      <ElementInputContainer>
        <ElementInput
          id={props.id}
          value={color}
          onChange={_handleChange}
        />
      </ElementInputContainer>
    </div>
  )
}

export default TextInput

export const ElementInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ElementLabel = styled.label`
  margin-right: 5px;
`;
const ElementInput = styled.input`
  width: 95%;
  height: 25px;

  &:disabled {
    background-color: hsl(0, 0%, 95%);
    border-color: hsl(0, 0%, 90%);
  }
`;
