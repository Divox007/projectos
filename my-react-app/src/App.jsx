import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header'
import Section from './Section'
import Main from './main'

function App() {
  return (
    <div>
    <Header />
    <Main />
    <Section />
    </div>
    
  );
}

createRoot(document.getElementById('root')).render(<App />
)