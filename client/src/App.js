
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Heading from './Components/Box/Heading';
import SmallBox from './Components/SmallBox/SmallBox';
import BreadCrum from './Components/BreadCrum/BreadCrum';
import Card from './Components/Card/Card';
import Rdeal from './Components/Rdeal/Rdeal';
import { Footer } from './Components/Footer/Footer';
import Scompo from './Components/Scompo/Scompo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Heading/>
        <SmallBox/>
        <BreadCrum/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Rdeal/>
        <Scompo/>
        <Footer/>
      </header>

    </div>
  );
}

export default App;
