import { WithHeader } from './components/with-header';
import { Routing } from './pages/routing';

function App() {
	return (
		<div className='min-h-screen'>
			<WithHeader />
			<Routing />
		</div>
	);
}

export default App;
