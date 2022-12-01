
function SeriesList(props) {
    return(
        <div>
            <ul>
                {props.list.map(item => {
                    <li>
                        {item.show.name}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SeriesList