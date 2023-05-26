import react from 'react';
import { Router } from './router/Router';
import { WithHeader } from './components/with-header';
import './App.css';

function App() {
	return (
		<div className='min-h-screen'>
			<WithHeader />
			<Router />
		</div>
	);
}

export default App;
