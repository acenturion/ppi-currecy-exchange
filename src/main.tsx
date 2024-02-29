import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@fontsource-variable/inter/slnt.css';
import {RatesProvider} from "./context/rates.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <RatesProvider>
      <App/>
    </RatesProvider>
  // </React.StrictMode>,
)
