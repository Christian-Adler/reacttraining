import "./Button.css";

const Button = (props) => {
  return (
    <div className="button round" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Button;
