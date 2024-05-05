import React, { useState } from 'react';
import { Card, Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import './JobCard.css';
const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div className="col-md-4 col-xs-12 col-sm-12 col-lg-4 mb-3">
      <div className="job-card">
        <div>
          <div className="company-info">
            {job.logoUrl && <img src={job.logoUrl} alt={job.companyName} />}
            <div>
              <p variant="body1" className="company-name">
                {job.companyName}
              </p>
              <p variant="h5" className="job-title">
                {job.jobRole}
              </p>
              <p variant="body2" className="job-sub-title">
                {job.location}
              </p>
            </div>
          </div>
          {job.minJdSalary && job.maxJdSalary && (
            <p variant="body2" className="job-estimated-salary">
              Estimated Salary: {job.salaryCurrencyCode} {job.minJdSalary} - {job.maxJdSalary} LPA  ✅
            </p>
          )}
          {!job.minJdSalary && job.maxJdSalary && (
            <p variant="body2" className="job-estimated-salary">
              Estimated Salary: {job.salaryCurrencyCode} {job.maxJdSalary} LPA  ✅
            </p>
          )}
          <p variant="body2" className="job-details-header">
            About Company:
          </p>
          <div className={`job-details ${expanded ? 'job-details-expanded' : 'job-details-collapsed'}`}>
            <p
              variant="body2"
              style={{ maxHeight: expanded ? 'none' : '200px', overflow: 'hidden', margin: '0' }}
            >
              {job.jobDetailsFromCompany}
            </p>
          <Dialog open={open} onClose={handleCloseDialog}>
            <DialogTitle>{job.companyName}</DialogTitle>
            <DialogContent>{job.jobDetailsFromCompany}</DialogContent>
          </Dialog>
          {!expanded && (
            <a variant="text" className="show-more-btn" onClick={handleOpenDialog}>
              Show full details
            </a>
          )}
          </div>
          {job.minExp && (
            <div className='job-salary' aria-label='test'>
            <p className='job-salary-label'>Minimum Experience</p>
            <p className='job-salary-text'>{job.minExp} Years</p>
            </div>
          )}
          {!job.minExp && (
            <div className='job-salary'>
            <p className='job-salary-label'>&nbsp;</p>
            <p className='job-salary-text'>&nbsp;</p>
            </div>
          )}
          <button variant="contained" href={job.jdLink} className="apply-button">
          ⚡ Easy Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
