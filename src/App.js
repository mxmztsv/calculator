import React, {useState, useEffect} from "react";
import './App.css';
import {DigitButton} from './components/DigitButton'
import {OperationButton} from './components/OperationButton'
import {ModButton} from './components/ModButton'
import './services/Calculator'
import {Calculator} from "./services/Calculator";

function App() {

    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);
    const [currentOperation, setCurrentOperation] = useState(null);
    const [numberInput, setNumberInput] = useState(true);

    const keyboardHandler = (e) => {
        console.log(e.code)
        switch (e.code) {
            case 'Numpad1':
                numberHandler(1)
                break
            case 'Digit1':
                numberHandler(1)
                break
            case 'Numpad2':
                numberHandler(2)
                break
            case 'Digit2':
                numberHandler(2)
                break
            case 'Numpad3':
                numberHandler(3)
                break
            case 'Digit3':
                numberHandler(3)
                break
            case 'Numpad4':
                numberHandler(4)
                break
            case 'Digit4':
                numberHandler(4)
                break
            case 'Numpad5':
                numberHandler(5)
                break
            case 'Digit5':
                numberHandler(5)
                break
            case 'Numpad6':
                numberHandler(6)
                break
            case 'Digit6':
                numberHandler(6)
                break
            case 'Numpad7':
                numberHandler(7)
                break
            case 'Digit7':
                numberHandler(7)
                break
            case 'Numpad8':
                numberHandler(8)
                break
            case 'Digit8':
                numberHandler(8)
                break
            case 'Numpad9':
                numberHandler(9)
                break
            case 'Digit9':
                numberHandler(9)
                break
            case 'Numpad0':
                numberHandler(0)
                break
            case 'Digit0':
                numberHandler(0)
                break
            case 'Period':
                numberHandler('.')
                break
            case 'NumpadDecimal':
                numberHandler('.')
                break
            case 'NumpadAdd':
                calculate('+')
                break
            case 'NumpadSubtract':
                calculate('-')
                break
            case 'NumpadMultiply':
                calculate('*')
                break
            case 'NumpadDivide':
                calculate('/')
                break
            case 'KeyE':
                calculate('^')
                break
            case 'KeyR':
                calculate('=')
                break
            case 'Equal':
                calculate('=')
                break
            case 'KeyQ':
                eraseHandler()
                break
            case 'KeyW':
                clearHandler()
                break
        }
    }

    const clearHandler = () => {
        setInput("")
        setCurrentOperation(null)
        setResult(0)
    }

    const eraseHandler = () => {
        if (input === 'Infinity' || input === 'NaN') {
            clearHandler()
        } else {
            setInput(input.substr(0, input.length - 1))
        }
    }

    const numberHandler = (value) => {
        const ni = numberInput
        if (ni) {
            console.log('norm')

            setInput(input + value);
        } else {
            console.log('opa')
            setInput(value);
            setNumberInput(true)
        }

    }

    const calculate = (value) => {
        const co = currentOperation
        let res = result
        console.log('co', co)
        const ni = numberInput
        if (ni) {
            switch (currentOperation) {
                case '+':
                    res = Calculator.addition(res, Number(input))
                    setResult(res)
                    setInput(res.toString())
                    break
                case '-':
                    res = Calculator.subtraction(res, Number(input))
                    setResult(res)
                    setInput(res.toString())
                    break
                case '*':
                    res = Calculator.multiplying(res, Number(input))
                    setResult(res)
                    setInput(res.toString())
                    break
                case '/':
                    res = Calculator.dividing(res, Number(input))
                    setResult(res)
                    setInput(res.toString())
                    break
                case '^':
                    res = Calculator.power(res, Number(input))
                    setResult(res)
                    setInput(res.toString())
                    break
                case null:
                    setResult(Number(input))
                    break
            }
        }

        console.log('res', res)
        if (value !== '=') {
            setCurrentOperation(value)
        } else {
            setCurrentOperation(null)
        }
        setNumberInput(false)
    }

    useEffect(() => {
        document.addEventListener("keypress", keyboardHandler);
        return () => {
            document.removeEventListener('keypress', keyboardHandler);
        };
    }, [numberHandler])

    return (
        <div className="wrapper">
            <div className="show-input">{input}</div>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={7}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={8}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={9}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={4}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={5}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={6}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={1}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={2}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={3}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                numberHandler(value)
            }} text={0}/>

            <DigitButton handler={(e) => {
                const value = e.target.innerHTML
                setInput(input + value);
                // numberHandler(value)
            }} text={'.'}/>

            <OperationButton handler={(e) => {
                const value = e.target.innerHTML
                calculate(value)
            }} text={'^'}/>

            <div className="modifiers subgrid">

                <ModButton handler={eraseHandler} text={'<='}/>

                <ModButton handler={clearHandler} text={'Clear'}/>

            </div>
            <div className="operations subgrid">

                <OperationButton handler={(e) => {
                    const value = e.target.innerHTML
                    console.log('value', value)
                    calculate(value)

                }} text={'+'}/>

                <OperationButton handler={(e) => {
                    const value = e.target.innerHTML
                    calculate(value)
                }} text={'-'}/>

                <OperationButton handler={(e) => {
                    const value = e.target.innerHTML
                    calculate(value)
                }} text={'*'}/>

                <OperationButton handler={(e) => {
                    const value = e.target.innerHTML
                    calculate(value)
                }} text={'/'}/>

                <OperationButton handler={(e) => {
                    const value = e.target.innerHTML
                    calculate(value)
                }} text={'='}/>
            </div>
        </div>
    );
}

export default App;
