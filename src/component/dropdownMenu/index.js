import { useState } from 'react'
import DropDownItem from "../dropdownItem";
import CSSTransition from '../CSSTransition';

function DropDownMenu(props) {

    const [ menu, setMenu ] = useState('main');
    const [ divHeight, setHeight ] = useState('');
    
    function calcHeight(el) {
        const height = el.offsetHeight;
        setHeight(height);
    }

    return (
        <div id="dropdown-menu" style={{ height: divHeight }}>
            <CSSTransition 
                in={menu === 'main'}
                execOnly={props.justExec}
                execOnStart={props.fun}
                time={20}
                resetOnChange={menu}
                className="first-menu"
                onElemStarted={calcHeight}
            >
                <DropDownItem icon="😎" text="My Profile" setMenu={setMenu}/>
                <DropDownItem icon="⚙" text="Settings"  goTo="settings" setMenu={setMenu}/>
            </CSSTransition>
            <CSSTransition
                in={menu === 'settings'}
                execOnly={props.justExec}
                execOnStart={props.fun}
                time={20}
                resetOnChange={menu}
                className="second-menu"
                onElemStarted={calcHeight}
            >

                <DropDownItem icon="🔙" text="Go Back" goTo="main" setMenu={setMenu}/>
                <DropDownItem icon="😎" text="My Profile" setMenu={setMenu}/>
                <DropDownItem icon="😎" text="My Profile" setMenu={setMenu}/>
                <DropDownItem icon="😎" text="My Profile" setMenu={setMenu}/>

            </CSSTransition>
        </div>
    );
}

export default DropDownMenu;