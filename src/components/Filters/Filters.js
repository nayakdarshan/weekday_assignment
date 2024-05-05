import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../redux/jobListingsSlice';
import './Filters.css';

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.jobListings.filters);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    dispatch(setFilters({ ...filters, [name]: value }));
  };

  const roleOptions = ['frontend', 'backend', 'fullstack', 'devops'];
  const employeesOptions = ['0-50', '51-200', '201-500', '501+'];
  const experienceOptions = ['0-2', '3-5', '6-8', '9+'];
  const remoteOptions = ['Yes', 'No'];
  const minBasePayOptions = ['$0-$50k', '$51k-$100k', '$101k-$150k', '$151k+'];

  return (
    <div className='filters'>
        <div className='col'>
          <select className="search-field" name="role" value={filters.role} onChange={handleFilterChange}>
            <option value="">Select Role</option>
            {roleOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className='col'>
          <select className="search-field" name="employees" value={filters.employees} onChange={handleFilterChange}>
            <option value="">Select Number of Employees</option>
            {employeesOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className='col'>
          <select className="search-field" name="experience" value={filters.experience} onChange={handleFilterChange}>
            <option value="">Select Experience</option>
            {experienceOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className='col'>
          <select className="search-field" name="remote" value={filters.remote} onChange={handleFilterChange}>
            <option value="">Select Remote Option</option>
            {remoteOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div className='col'>
          <select className="search-field" name="minBasePay" value={filters.minBasePay} onChange={handleFilterChange}>
            <option value="">Select Minimum Base Pay</option>
            {minBasePayOptions.map(option => (
              <option key={option} value={option}>{option}</option>
              ))}
          </select>
        </div>
        <div className='col'>
              <input
                type="text"
                className="search-field"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search by company name"
              />
        </div>
    </div>
  );
};

export default Filters;
