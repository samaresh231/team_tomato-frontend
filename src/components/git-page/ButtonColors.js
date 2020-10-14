import gitInfo from './GithubInfo';

var colors = [];

Object.keys(gitInfo).forEach(() =>{
    let red = Math.random()*255;
    let green = Math.random()*255;
    let blue = Math.random()*255;
    let color = `rgba(${red}, ${green}, ${blue}, 0.3)`;
    colors.push(color);
});

export default colors;