import example from './images/example.png';
// import example from './images/example.svg'
import './styles/main.scss';
import './fonts/fonts.scss';

console.log('Как интересно!');

const heading = document.createElement('h1');
heading.textContent = 'Как интересно!';

const root = document.querySelector('#root');
root.append(heading);
