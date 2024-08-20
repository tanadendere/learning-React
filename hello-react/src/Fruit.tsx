import { ReactNode } from "react";

// interface OrangeProps {
//   fruit: string;
//   children?: ReactNode;
// }

// then replace the {} with OrangeProps inteface

const Fruit = ({
  fruit,
  children,
}: {
  fruit: string;
  children?: ReactNode;
}) => {
  const myStyle: React.CSSProperties = {
    backgroundColor: fruit.toLowerCase() === "apple" ? "darkred" : "darkorange",
    color: "whitesmoke",
  };

  return (
    <>
      <div style={myStyle}>Fruit: {fruit}</div>
      {children}
    </>
  );
};

export default Fruit;

// style property is bound to a object that is build-in to the App component.
// All JSX elements are components

// Orange = (props: {fruit:string} = {fruit: 'Orange'})
// Props has an attribute fruit that has a default value of Orange

// if you want to add children in the App - so not having a self-close tag.
// children is an attribute of props that you have to buy into in the parameters

// destructing the props object at the beginning instead. use the attributes you want to assign. No need to call props. each time
