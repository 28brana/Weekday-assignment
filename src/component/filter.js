import './filter.css';
import Select from 'react-select'

const Filter = ({ setFilter ,locationArr,roleArr}) => {
    console.log({
        locationArr,
        roleArr
    })
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
        { value: 'office', label: 'In-office' },
    ]

    const minPayOptions = [
        { value: 0, label: '0L' },
        { value: 10, label: '10L' },
        { value: 20, label: '20L' },
        { value: 30, label: '30L' },
        { value: 40, label: '40L' },
        { value: 50, label: '50L' },
        { value: 60, label: '60L' },
        { value: 70, label: '70L' },
    ]

    const locationOptions = locationArr.map((val)=>{
        return {
            value:val,
            label:val
        }
    })

    const roleOptions = roleArr.map((val)=>{
        return {
            value:val,
            label:val
        }
    })
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
            <input className='search' type='text' placeholder='Search Company Name' onChange={(val) => {
                handleChange('search', val.target.value)
            }}/>
            <Select options={ExperienceOptions} placeholder='Min. Experience' onChange={(val) => {
                handleChange('minExp', val.value)
            }} />
            <Select options={jobLocationOptions} placeholder='Job Mode' onChange={(val) => {
                handleChange('mode', val.value)
            }} />
            <Select options={minPayOptions} placeholder='Minimum Base Pay Salary' onChange={(val) => {
                handleChange('minPay', val.value)
            }} />
            <Select options={locationOptions} placeholder='Location' onChange={(val) => {
                handleChange('location', val.value)
            }} />
            <Select options={roleOptions} placeholder='Role' onChange={(val) => {
                handleChange('role', val.value)
            }} />

            
        </div>
    )
}
export default Filter;