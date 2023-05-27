import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { WalletConnectorWrapper } from './components/concordium-provider';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<WalletConnectorWrapper>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</WalletConnectorWrapper>,
);
