import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobListings } from '../../services/jobService';
import JobCard from '../JobCard/JobCard';
import Filters from '../Filters/Filters';
import Loader from './../Loader/Loader';
import './JobList.css'
import { setListings, selectListings, selectFilters } from '../../redux/jobListingsSlice';

const JobList = () => {
  const dispatch = useDispatch();
  const listings = useSelector(selectListings);
  const filters = useSelector(selectFilters);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const page = useRef(1);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await fetchJobListings(page.current);
      if (data && data.jdList.length > 0) {
        dispatch(setListings(listings.concat(data.jdList)));
        page.current++;
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching job listings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (!isLoading && hasMore) {
      const bottom = Math.ceil(window.innerHeight + document.documentElement.scrollTop) === document.documentElement.offsetHeight;
      if (bottom) {
        fetchData();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, hasMore]);

  useEffect(() => {
    fetchData();
  }, []);

  const filteredListings = listings.filter(job => {
    if (filters.role && job.jobRole !== filters.role) return false;
    if (filters.employees && job.location !== filters.employees) return false;
    if (filters.experience && (job.minExp < parseInt(filters.experience.split('-')[0]) || job.maxExp > parseInt(filters.experience.split('-')[1]))) return false;
    if (filters.remote && (filters.remote === 'Yes' && job.location !== 'Remote')) return false;
    if (filters.minBasePay && (job.minJdSalary < parseInt(filters.minBasePay.split('-')[0].replace('$', '')) || job.maxJdSalary > parseInt(filters.minBasePay.split('-')[1].replace('$', '')))) return false;
    if (filters.search && !job.companyName.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });
  

  return (
    <div>
    <div className="container">
      <Filters />
      {filteredListings.length > 0 ? (
        <div className="row" style={{ marginTop: '30px' }}>
          {filteredListings.map(job => (
            <JobCard key={job.jdUid} job={job} />
          ))}
          {isLoading && <Loader />}
        </div>
      ) : (
        <div className="no-results-message">No jobs found matching your criteria.</div>
      )}
    </div>
  </div>
  );
};

export default JobList;
