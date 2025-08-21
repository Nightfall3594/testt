
function NavButton({className = "", Icon, onClick = () => {}}) {

    if(!Icon) throw new Error("An icon is required");

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