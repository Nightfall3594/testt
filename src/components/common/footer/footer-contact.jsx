
function FooterContact({to="#", content=""}){
    return (
        <li>
            <a className="underline-on-hover" href={to}>{content}</a>
        </li>
    )
}

export default FooterContact;