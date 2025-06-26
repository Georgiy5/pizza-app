import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {

	return (
		<>
			<Button onClick={() => console.log('ghbdtn')}>Привет</Button>
			<Button appearance='big' onClick={() => console.log('ghbdtn')}>Привет</Button>
			<Input placeholder='Ghbfaf'/>
		</>
	);
}

export default App;
