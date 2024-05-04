import { useState } from 'react';
import './card.css'
const data = {
    "jdUid": "cfff362e-053c-11ef-83d3-06301d0a7178-92030",
    "jdLink": "https://weekday.works",
    "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
    "maxJdSalary": 83,
    "minJdSalary": 61,
    "salaryCurrencyCode": "USD",
    "location": "delhi ncr",
    "minExp": 6,
    "maxExp": 11,
    "jobRole": "frontend",
    "companyName": "Intel Corporation",
    "logoUrl": "https://logo.clearbit.com/intel.com"
}
const Card = () => {
    const maxContent = 500;
    const [showDescription, setShowDescription] = useState(false);
    const description = "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.";

    const handleToggleDescription = () => {
        setShowDescription((prevShow) => !prevShow);
    };
    return (
        <div className='card-container'>
            <div className='card-header'>
                <div className='logo'>
                    <img src='https://logo.clearbit.com/intel.com' alt='logo' />
                </div>
                <div className='card-header-detail'>
                    <p className='p1'>MindTickle</p>
                    <p className='p2'>SDE !! forntedn</p>
                    <p className='p3'>Banglore</p>
                </div>
            </div>
            <div className='card-salary'>
                <p>Estimated Salary: ₹12 - 16 LPA</p>
            </div>
            <div className='card-about'>
                <p className='title'>About Company:</p>
                <p className='description'>
                    {
                        description.length <= maxContent ? description : showDescription ? description : `${description.substring(0, maxContent)}...`
                    }
                </p>
                {description.length > maxContent && <div className={`toggle-btn-container ${!showDescription ? 'show' : ''}`}>
                    <div className='toggle-btn' onClick={handleToggleDescription}>
                        {showDescription ? 'Show less' : 'Show more'}
                    </div>
                </div>}
            </div>
            <div className='card-bottom'>
                <p className='p1'>Minium Experience</p>
                <p className='p2'>2 Years</p>
                <a href='https://logo.clearbit.com/intel.com'> ⚡ Easy Apply</a>
            </div>
        </div>
    )
}
export default Card;