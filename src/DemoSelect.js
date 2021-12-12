const Select = (props = {}) => {
    const {
        options = [],
        value = '',
        onChange = () => {},
        label = ''
    } = props;
    return (
        <div>
            <div>{label !== '' && <label>{label}</label>}</div>
            <select
                value={value}
                onChange={(e) => {
                    onChange(e.target.value)
                }}
            >
                {options.map(option => {
                    return (
                        <option value={option.value}>{option.label}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select;