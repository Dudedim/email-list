import Icon from "./Icon";
function HoverMenu() {
  const handleUnsubscribe = (event) => {
    event.stopPropagation();
    alert("Unsubscribed from this address.");
  };
  return (
    <div className="hovermenu-container">
      <button onClick={handleUnsubscribe}>Unsubscribe</button>

      <div className="icon-container">
        <button className="menu-btn">
          <Icon src="./assets/archive.svg" type="archive" />
        </button>
        <button className="menu-btn">
          <Icon src="./assets/delete.svg" type="delete" />
        </button>
        <button className="menu-btn">
          <Icon src="./assets/envelope-open.svg" type="read" />
        </button>
        <button className="menu-btn">
          <Icon src="./assets/clock.svg" type="snooze" />
        </button>
      </div>
    </div>
  );
}

export default HoverMenu;
