import './customBtnStyles.scss';

function CustomBtn({children, isGoogleSignBtn, ...otherProps}){
    return <button className={`${isGoogleSignBtn ? 'google-SignIn-Btn' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
}
export default CustomBtn;