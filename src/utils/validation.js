export function validateInputText(inputValue) {
return inputValue && !/^[A-Z]+$/gi.test(inputValue) ? 'Invalid input' : '';
}


export function validateInputNumber(inputValue) {
    return inputValue && !/^[0-9]+$/gi.test(inputValue) ? 'Invalid input' : '';
    }
    
