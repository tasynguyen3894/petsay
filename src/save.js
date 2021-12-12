const Save = ({ attributes }) => {
    return (
        <div>
            <b>{attributes.pet}:</b> "<i>{ attributes.message }</i>"
        </div>
    )
}

export default Save;