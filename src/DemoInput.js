const DemoInput = (props = {}) => {
    const {
        placeholder = '',
        value = '',
        onChange = () => {},
        label = ''
    } = props;
    return (
        <div>
            <div>{label !== '' && <label>{label}</label>}</div>
            <input 
                placeholder={placeholder}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
            />
        </div>
    )
}

export default DemoInput;
