function Content(props) {
  const content = props.text;

  return <p className="content">{content.slice(0, props.length) + "..."}</p>;
}

export default Content;
