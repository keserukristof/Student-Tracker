function ClassCard(props) {
    return (
        <ul class="list-group col-2 m-4">
            <li class="list-group-item active" aria-current="true">{props.nameOfClass}</li>
            {props.studentsForClass.map(({ firstName, lastName }) => {
                return (
                    <li class="list-group-item">{`${firstName} ${lastName}`}</li>
                );
            })}
        </ul>
    );
}

export default ClassCard;