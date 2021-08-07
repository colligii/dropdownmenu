import { useEffect, useRef, useState } from "react";

function CSSTransition(props) {

    if(props.in) {
        const [ className, setClassName ] = useState(props.execOnly ? '-start' : '-end');
        const anim = useRef(null);

        useEffect(() => {
            if('execOnStart' in props) {
                if(typeof props.execOnStart === "function") {
                    props.execOnStart();
                }
            }
        },[])

        useEffect(() => {
            if(anim !== null) {
                props.onElemStarted(anim.current);
            }
        },[
            anim
        ])

        useEffect(() => {
            setTimeout(() => {
                if(className !== "-end") setClassName('-end');
            },props.time)
        },[
            props.resetOnChange
        ])

        return (
            <div ref={anim} className={'className' in props ? `${props.className}${className}` : undefined}>
                {props.children}
            </div>
        );
    }
    return null;
}

export default CSSTransition;