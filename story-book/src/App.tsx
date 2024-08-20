import Button from './components/atoms/Button.tsx'
import Card from './components/molecules/Card.tsx'
import SignUp from './components/molecules/SignUpForm.tsx'

function App() {

  return (
    <div className='p-10'>
      <Card focus='Image' imageLocation='End'>
        <Button scheme='Primary' shape='Pill' label="Review" fullWidth/>
        <Button scheme='Secondary' shape='Pill' label="Review" fullWidth/>
        <Button scheme='Outline' shape='Pill' label="Review" fullWidth/>
        <Button scheme='Text' shape='Pill' label="Review" fullWidth/>
      </Card>
      <SignUp/>
    </div>
  )
}

export default App
