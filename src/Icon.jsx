import { useState } from "react";

function Icon(props) {
  const [active, setActive] = useState(props.important);
  const type = props.type;
  const [important, setImportant] = useState(props.important);

  const handleClick = (event) => {
    event.stopPropagation();

    if (props.activeSrc) {
      setActive(!active);
      if (type === "arrow") {
        setImportant(!important);
      }
    } else {
      alert(props.type);
    }
  };

  return (
    <img
      src={important ? props.activeSrc : active ? props.activeSrc : props.src}
      alt="icon"
      className="icon"
      onClick={handleClick}
    />
  );
}

export default Icon;
