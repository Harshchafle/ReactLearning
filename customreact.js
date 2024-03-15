
function customRender(reactElement,container){                         // function to render and create new element
    /*const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;                      // adding HTML inside element
    domElement.setAttribute('href',reactElement.props.href);           // adding attributes
    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement)                                  // appendChild method
    */

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // for (const prop in reactElement.props) {
    //     if(prop ==='children') continue;
    //     domElement.setAttribute(prop,reactElement.props[prop])
    //     container.appendChild(domElement)
    // }   
}

// const anotherElement  = (
//     <a href="https://google.com" target="'_blank">Visit Google</a>
// )

const reactElement = React.createElement(
    'a',
    {hef:"https://google.com", target:"_blank" },
    'click me to visit Google'
)

reactDOM.createRoot(document.getElementById('root')).render(reactElement)

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https:/google.com',
//         target: '_blank'
//     },
//     children : "click me to visit google"
// }


// const mainContainer = document.getElementById('#root');

// customRender(reactElement,mainContainer);

