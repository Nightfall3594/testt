
function NavButton({className = "", Icon, onClick = () => {}}) {
    return (
        <button
            className={"navbar__icon " + className}
            onClick={onClick}
        >
            <Icon/>
        </button>
    )
}

export default NavButton