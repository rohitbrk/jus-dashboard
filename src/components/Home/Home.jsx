import DarkModeIcon from "../svg/DarkModeIcon";

export default function Home({ toggleDarkMode }) {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={toggleDarkMode}>
        <DarkModeIcon />
      </button>
    </div>
  );
}
