
function IconButton ({className="", Icon, text, onClick}) {
    return (
        <button
            className={"bottom-nav__button " + className}
            onClick={onClick || (() => {})}
        >
            {Icon && <Icon/>}
            <span>{text}</span>
        </button>
    )
}

export default IconButton