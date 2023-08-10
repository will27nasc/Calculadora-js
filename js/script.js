let calculator = 
        [
            seletores = {
                select: (el) => document.querySelector(el)
            },

            functionPress = {
                buttonPress: document.querySelectorAll('.charKey').forEach( charKeyBtn => {
                    charKeyBtn.addEventListener('click', _ => {
                        const value = charKeyBtn.dataset.value;
                        calculator.find(name=>name === seletores).select('#input').value +=  value;
                    })
                })
            },

            functionDelete = {
                deleteNumber: document.getElementById('clear').addEventListener('click', _ => {
                    calculator.find(name=>name === seletores).select('#input').value = '';
                    calculator.find(name=>name === seletores).select('#input').value.focus();
                })
            },

            functionShowScreen = {
                screenNumb: document.getElementById('input').addEventListener('keydown', event => {
                    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];
                
                    event.preventDefault();
                    if(allowedKeys.includes(event.key)) {
                        calculator.find(name=>name === seletores).select('#input').value += event.key;
                        return;
                    }
                
                    if(event.key === 'Backspace') {
                        calculator.find(name=>name === seletores).select('#input').value = calculator.find((name)=>name === seletores).select('#input').value.slice(0,-1);
                    }
                
                    if(event.key === 'Enter') {
                        calculator.functions.find(name=>name === functionCalculate).calculate();
                    }
                })
            },

            functionCalculate = {
                calculate: _ => {
                    calculator.find(name=>name === seletores).select('#result').value = 'ERROR';
                    calculator.find(name=>name === seletores).select('#result').classList.add('error');
                    let result = eval(calculator.find(name=>name === seletores).select('#input').value);
                    calculator.find(name=>name === seletores).select('#result').value = result;
                    calculator.find(name=>name === seletores).select('#result').classList.remove('error');
                },
            },

            functionCopyResult = {
                copy: document.getElementById('copyToClipboard').addEventListener('click', event => {
                    const button = event.currentTarget;
                
                    if(button.innerText === 'Copy') {
                        button.innerText = 'Copied';
                        button.classList.add('success');
                        navigator.clipboard.writeText(calculator.find(name=>name === seletores).select('#result').value);
                    } else {
                        button.innerText = 'Copy';
                        button.classList.remove('success');
                    }
                })
            },

            functionChangeTheme = {
                changeTheme: document.getElementById('themeSwitcher').addEventListener('click', _ => {        
                    if(calculator.find((name)=>name === seletores).select('main').dataset.theme === 'dark') {
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--bg-color', '#f6fff8');
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--border-color', '#aaa');
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--font-color', '#212529');
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--primary-color', '#3f37c9');
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--second-color', '#4361ee');
                        calculator.find((name)=>name === seletores).select('main').dataset.theme = 'light';
                    } else {
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--bg-color', '#0a0908');
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--border-color', '#33415c');
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--font-color', '#fefee3');
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--primary-color', '#4361ee');
                        calculator.find((name)=>name === seletores).select(':root').style.setProperty('--second-color', '#3f37c9');
                        calculator.find((name)=>name === seletores).select('main').dataset.theme = 'dark';
                    }
                })
            }
        ]

document.getElementById('equal').addEventListener('click', calculator.find((name)=>name === functionCalculate).calculate);