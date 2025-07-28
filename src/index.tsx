import ReactDOM from "react-dom/client";
// import Parent from './props/Parent';
// import GuestList from './state/GuestList';
// import UsersList from './state/UsersList';
// import EventComponent from './events/EventComponent';
import UserSearch from './refs/UserSearch';


const el = document.getElementById("root");
// document.querySelector('#root');

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <UserSearch />
    </div>
  );
};

root.render(<App />);
