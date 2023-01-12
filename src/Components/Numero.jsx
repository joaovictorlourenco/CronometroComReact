import { digits } from '../Style/Numero'
import React from 'react';

const Numero = (props) => {
    return (
        <div>
            <digits>
            {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </digits>
            <digits>
            {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
            </digits>
            <digits>
            {("0" + ((props.time / 10) % 100)).slice(-2)}
            </digits>
      </div>
    );
}

export default Numero;
