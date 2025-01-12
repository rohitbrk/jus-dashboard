import DarkModeIcon from "../svg/DarkModeIcon";

export default function OrdersList({ toggleDarkMode }) {
  return (
    <div>
      <h1>OrderList</h1>
      <button onClick={toggleDarkMode}>
        <DarkModeIcon />
      </button>
    </div>
  );
}
