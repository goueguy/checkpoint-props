import './App.css';
import Profile from './profile/Profile';
import logo from './assets/icon.png';


function App() {
  return (
    <div className="App">
      <Profile fullName="GOUEGUY JEAN-LOUIS ALEXIS" bio="Ivoirien" profession="Informaticien Développeur web et mobile">
       {logo}
      </Profile>
    </div>
  );
}

export default App;
