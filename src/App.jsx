import './index.css'
import NeuralBackground from './components/NeuralBackground';
import Home from './components/home';

function App() {
 
  return (
    <>  
      <div className="bg-bgDark text-textLight min-h-screen relative overflow-hidden">
      <NeuralBackground />
      <div className="relative z-10">
        <Home/>

      </div>
    </div>
    </>
  )
}

export default App
