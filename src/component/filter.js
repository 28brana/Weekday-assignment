import './filter.css';
import Select from 'react-select'

const Filter = ({ setFilter }) => {
    const ExperienceOptions = [
        { value: '1', label: '1 Year' },
        { value: '2', label: '2 Year' },
        { value: '3', label: '3 Year' },
        { value: '4', label: '4 Year' },
        { value: '5', label: '5 Year' },
        { value: '6', label: '6 Year' },
        { value: '7', label: '7 Year' },
        { value: '8', label: '8 Year' },
        { value: '9', label: '9 Year' },
        { value: '10', label: '10 Year' },
    ]

    const jobLocationOptions = [
        { value: 'Remote', label: 'Remote' },
        { value: '1', label: '1' },
        { value: '1', label: '1' },

    ]

    const handleChange = (key, value) => {
        setFilter((prev) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    return (
        <div className='filter-container'>
            <Select options={ExperienceOptions} placeholder='Min. Experience' onChange={(val) => {
                handleChange('minExp', val.value)
            }} />
            <Select options={jobLocationOptions} placeholder='Remote' />

        </div>
    )
}
export default Filter;