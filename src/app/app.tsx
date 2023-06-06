import { Router } from './providers/router/ui/router.tsx';
import { AirdropHeader } from 'widgets/header';

function App() {
	return (
		<div className='min-h-screen'>
			<AirdropHeader />
			<Router />
		</div>
	);
}

export default App;
