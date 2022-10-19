import styles from './Button.module.css';

const Button = props => {

    return (
        <button className={`${styles['btn-primary']}  ${props.inverse && styles['btn--inverse']}`} type={props.type || 'button'} onClick={props.onClick}>
            {props.children}
        </button>
    );

};

export default Button;