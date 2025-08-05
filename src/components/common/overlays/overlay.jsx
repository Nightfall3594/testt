import './overlay.css'

function Overlay({ className="", onClick, isVisible=true}) {
    return (
        isVisible &&
        <div className={"overlay " + className} onClick={onClick}/>
    )
}

export default Overlay