function DropDownItem(props) {
    return (
        <div className="dropdown-item" onClick={() => {
            if('goTo' in props) {
                props.setMenu(props.goTo);
            }
        }}>
            <div className="btn1">
                {props.icon}
            </div>
            <span>{props.text}</span>
        </div>
    );
}

export default DropDownItem;