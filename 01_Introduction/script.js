/**
 * <div id = "parent">
 *   <div id = "child">
 *     <h1> Hello World!!!</h1>
 *     <h2> Second Heading</h2>
 *
 *    </div>
 *
 * </div>
 *
 *
 *  */

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading' }, 'I am heading'),
    React.createElement('h2', { id: 'subheading' }, 'I am  second heading')
  ]),

  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', { id: 'heading' }, 'I am heading'),
    React.createElement('h2', { id: 'subheading' }, 'I am  second heading')
  ])
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
/* const heading = React.createElement('h1', {}, 'Hello World from React.Js');
const heading2 = React.createElement('h2', {}, 'This is second heading');

heading.render(heading2); */
root.render(parent);
// root.render(heading2)
