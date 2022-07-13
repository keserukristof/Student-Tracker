function ClassCard(props) {
    return (
        <ul class="list-group col m-4">
            <li class="list-group-item active" aria-current="true">{props.class}</li>
            {props.studentsForClass.map(({ firstName, lastName }) => {
                console.log(firstName)
                return (
                    <li class="list-group-item">{`${firstName} ${lastName}`}</li>
                );
            })}
        </ul>
    );
}

export default ClassCard;