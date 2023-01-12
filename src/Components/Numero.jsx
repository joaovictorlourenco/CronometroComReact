import { Digits, LastDigits } from '../Style/Numero'
import React from 'react';

const Numero = (props) => {
    return (
        <div>
            <Digits>
            {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </Digits>
            <Digits>
            {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </Digits>
            <LastDigits>
            {("0" + ((props.time / 10) % 100)).slice(-2)}
            </LastDigits>
      </div>
    );
}

export default Numero;
