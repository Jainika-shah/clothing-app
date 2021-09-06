import './customBtnStyles.scss';

function CustomBtn({children, isGoogleSignBtn, inverted, ...otherProps}){
    return <button 
    className={`${inverted ? 'inverted' : '' }
    ${isGoogleSignBtn ? 'google-SignIn-Btn' : ''} 
    custom-button`}
     {...otherProps}>
        {children}
    </button>
}
export default CustomBtn;