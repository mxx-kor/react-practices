import React, { useReducer } from 'react';
import CalBtn from '../components/CalBtn';
import OperationBtn from '../components/OperationBtn';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CalculatorTemplate = styled.div`
  width: 512px;
  height: 510px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

  margin: 0 auto;

  margin-top: 30px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

const CalculatorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 8rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 4.5rem);

  .span-two {
    grid-column: span 2;
  }
  button {
    cursor: pointer;
    font-size: 2rem;
    border: 1px solid white;
  }
  button:hover,
  button:focus {
    background-color: rgba(255, 255, 255, 0.75);
  }
  .accent-color {
    background-color: #20c997;
    color: white;
    font-weight: bold;
  }
  .accent-color:hover,
  .accent-color:focus {
    background-color: #63e6be;
  }
`;

const Output = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  padding: 0.75rem;
  word-wrap: break-word;
  word-break: break-all;
  min-height: 150px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  .previous-operand {
    color: rgba(225, 225, 225, 0.75);
    font-size: 1.5rem;
  }
  .current-operand {
    color: white;
    font-size: 2.5rem;
  }
`;

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state;
      }
      if (payload.digit === '.' && state.currentOperand.includes('.')) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null,
        };
      }

      if (state.currentOperand == null) return state;
      if (state.currentOperand.length === 1) {
        return { ...state, currentOperand: null };
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
    default:
      console.log('wrong command!');
  }
  throw Error('Unknown action: ' + type);
};

const evaluate = ({ currentOperand, previousOperand, operation }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return '';
  let computation = '';
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '÷':
      computation = prev / current;
      break;
    default:
      console.log('wrong command!');
  }

  return computation.toString();
};

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});
const formatOperand = (operand) => {
  if (operand == null) return;
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return INTEGER_FORMATTER.format(integer);
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
};

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  // dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1 }})

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.95 }}
      exit={{ display: 'none' }}>
      <CalculatorTemplate>
        <CalculatorGrid>
          <Output>
            <div className="previous-operand">
              {formatOperand(previousOperand)} {operation}
            </div>
            <div className="current-operand">
              {formatOperand(currentOperand)}
            </div>
          </Output>
          <button
            className="span-two accent-color"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}>
            AC
          </button>
          <button
            className="accent-color"
            onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>
            DEL
          </button>
          <OperationBtn operation="÷" dispatch={dispatch} />
          <CalBtn digit="1" dispatch={dispatch} />
          <CalBtn digit="2" dispatch={dispatch} />
          <CalBtn digit="3" dispatch={dispatch} />
          <OperationBtn operation="*" dispatch={dispatch} />
          <CalBtn digit="4" dispatch={dispatch} />
          <CalBtn digit="5" dispatch={dispatch} />
          <CalBtn digit="6" dispatch={dispatch} />
          <OperationBtn operation="+" dispatch={dispatch} />
          <CalBtn digit="7" dispatch={dispatch} />
          <CalBtn digit="8" dispatch={dispatch} />
          <CalBtn digit="9" dispatch={dispatch} />
          <OperationBtn
            className="accent-color"
            operation="-"
            dispatch={dispatch}
          />
          <CalBtn digit="." dispatch={dispatch} />
          <CalBtn digit="0" dispatch={dispatch} />
          <button
            className="span-two accent-color"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>
            =
          </button>
        </CalculatorGrid>
      </CalculatorTemplate>
    </motion.div>
  );
};

export default Calculator;
