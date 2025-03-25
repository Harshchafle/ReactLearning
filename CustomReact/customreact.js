
function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML =reactElement.children
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    // set domElement to the center of the page
    domElement.style.position = 'fixed';
    domElement.style.top = '50%';
    domElement.style.left = '50%';
    domElement.style.transform = 'translate(-50%, -50%)';
    domElement.style.zIndex = '1000';
    domElement.style.backgroundColor = 'rgba(0,0,0,0.8)';
    domElement.style.padding = '10px';
    domElement.style.borderRadius = '5px';
    domElement.style.color = 'white';
    domElement.style.cursor = 'pointer';    

    container.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://docs.anthropic.com/en/',
        target : '_blank',
    },
    children : 'Visit Anthropic API'
}

const mainContainer = document.querySelector('#root');
customRender(reactElement, mainContainer);



function showSideBar(){
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = 'flex';
}

function hideSideBar(){
    const sideBar = document.querySelector(".sidebar");
    sideBar.style.display = 'none';
}