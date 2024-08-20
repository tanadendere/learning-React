export default function Button({
  callbackFunction,
}: {
  callbackFunction: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}) {
  return <button onClick={(event) => callbackFunction(event)}>Click me</button>;
}

// We want to pass the callback to App using props
