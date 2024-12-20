import "./button.css";

export const Button = ({label, onclick}) => {
    return (
        <button className="btn" onClick={onclick}>
        {label}
        </button>
    )
}   