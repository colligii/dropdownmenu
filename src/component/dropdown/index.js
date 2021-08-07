import { useState, useEffect } from 'react';
import DropDownMenu from '../dropdownMenu';

function DropDownButton() {
    
    const [ dropDown, setDropDown ] = useState(false);
    const [ justExec, setJustExec ] = useState(false);

    useEffect(() => {
        if(!dropDown) setJustExec(() => false);
    },[dropDown])

    function firstDoIt() {
        setJustExec(() => true);
    }

    return (
        <div id="dropdown-container">
            <div className="btn1" onClick={() => setDropDown(!dropDown)}>
                😎
            </div>
            <div>
                { dropDown ? <DropDownMenu justExec={justExec} fun={firstDoIt}/> : null }
            </div>
        </div>
    );
}

export default DropDownButton