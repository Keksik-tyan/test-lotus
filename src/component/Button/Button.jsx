import "./button.css";

const Button = ({children, variant, ...props}) => {
    return(
            <button {...props} className={variant}>{children}</button>
    );
};

export default Button;