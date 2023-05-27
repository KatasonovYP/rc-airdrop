import { Router } from './router/Router';
import './App.css';
import { AirdropHeader } from './components/airdrop-header';

function App() {
	return (
		<div className='min-h-screen'>
			<AirdropHeader />
			<Router />
		</div>
	);
}

export default App;
