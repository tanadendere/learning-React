import "./App.css";
import Button from "./Button";
import Fruit from "./Fruit";

function App(props: { name: string; surname: string }) {
  const fruits = ["apple", "orange", "tomato", "cucumber", "orange", "banana"];

  function doWeRenderCount(fruitCount: number) {
    if (fruitCount > 4) {
      return <p>The number of fruits is: {fruitCount}</p>;
    }
  }

  /* event handler for the button in app 
  which will pass in as a value for the callback attribute for Button 
  or any other component with an event listener*/
  function callBackButton(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    // event.stopPropagation();
    alert("You clicked me");
  }

  return (
    <>
      <div>
        <h1>Hello</h1>
        <p>
          {props.name} {props.surname}
        </p>
      </div>
      <div>This is a second div</div>
      {/* <Fruit fruit={"Fruit"}>
        <Fruit fruit={"Baby Fruit"} />
      </Fruit>
      <Fruit fruit={"Apple"} /> */}
      {/* looping over an array */}
      {fruits.map((fruit) => (
        <Fruit key={fruit} fruit={fruit} />
      ))}
      {/* conditional rendering */}
      {/* short circut - (conditional) && JSX */}
      {fruits.length > 4 && <p>The number of fruits is: {fruits.length}</p>}

      {fruits.length > 4 ? (
        <p>The number of fruits is: {fruits.length}</p>
      ) : (
        <p>The number of fruits is less than or equal to four</p>
      )}

      {doWeRenderCount(fruits.length)}

      <div onClick={() => alert("Div Clicked")}>
        {/* passing the event handler using props of button*/}
        <Button callbackFunction={callBackButton}></Button>
      </div>
    </>
  );
}

export default App;

/* 
// naming conventions
Component needs to be a capital letter and the same name as the file

Only work in App - pretty much never touch main.tsx. Just the initial boostrapping and walk away

Whats in the return is what will be rendered onto the HTML ('App' tag in main.tsx will not be rendered out)

Can run any Javascript in the curly braces

//ATTRIBUTES AND PROPS
props is already a default object within the app - anything that is put into it, becomes an attribute within the App tag
(More in Fruit.tsx)

ANY FUNCTIONALITY must RETURN JSX
RETURN - JSX return must only have one parent element
Use React.Fragment as a parent dom to wrap multiple things at the top most level shorthand: <></>

React can only control things in .tsx files

// looping over an aray
map always transforms
For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
Usually, a key should be coming from your data, such as a database ID. Not an index
React uses your keys to know what happened if you later insert, delete, or reorder the items.
Keeps track of each item - so it does not need to re-render the whole list

//conditional rendering
using a short circuit, a tenary or a og if statement
could also extract the conditioning to a function but it must return JSX
if the functionality becomes too long/big extract it to be a component and bring it in using props


With React the most important thing to control is your rendering


// RESPONDING TO EVENTS

Add event listeners 

Event handlers:
Passed as a prop to the element.Pass a callback function without the brackets at the end - passing the function as a reference.
If you pass with brackets - the function will run immediately. 
When you then handle the event, nothing will happen, unless that function returns a function.
Remember a high-order function takes another function as a parameter and/or returns another function.

Call an inline (arrow) function within the {}

Passing a function YES. Calling a function NO


// Stopping event propagation

*/
