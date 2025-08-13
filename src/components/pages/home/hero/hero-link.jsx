
function HeroLink({className, Icon, to}) {

    if (!Icon) throw new Error("An Icon is required");

    return (
        <a href={to}>
            <Icon className={`hero__icon ${className}`}/>
        </a>
    )
}

export default HeroLink