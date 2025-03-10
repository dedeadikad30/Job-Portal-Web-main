import React from 'react'
import {Link} from 'react-router-dom';
import {FiMaPin} from "react-icons/fi"

const Card = ({data}) => {
    const{companyName, jobTitle, companyLogo, maxPrice, salaryType, jobLoaction, employmentType, postingDate,
    desciption} = data;

  return (

    <section className='card'>
        <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
            <img src={companyLogo} alt="" />
            <div>
                <h4 className='text-primary mb-1'>{companyName}</h4>
                <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

                <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
                    <span className='flex items-center gap-2'><FiMaPin/>{jobLoaction}</span>
                    <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>
                    <span className='flex items-center gap-2'><FiMDollarSign/>{minPrice}-{maxPrice}k</span>
                    <span className='flex items-center gap-2'><FiCalender/>{postingDate}</span>
                </div>

                <p className='text-base text-primary/70'>{desciption}</p>
            </div>
        </Link>
    </section>    
  )
}

export default Card