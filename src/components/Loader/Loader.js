import React from 'react';
import './Loader.css';
import ContentLoader from 'react-content-loader';
const Loader = () => {
  return (
    // <div className="loader"></div>
    <div className="col-md-4 mb-3">
      <div className="card loader-card">
        <ContentLoader 
          speed={2}
          width={300}
          height={400}
          viewBox="0 0 300 250"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          style={{width:'100%'}}
        >
          <rect x="0" y="0" rx="3" ry="3" width="100%" height="150" />
          <rect x="0" y="160" rx="3" ry="3" width="100%" height="20" />
          <rect x="0" y="190" rx="3" ry="3" width="100%" height="20" />
          <rect x="0" y="220" rx="3" ry="3" width="100%" height="20" />
          <rect x="0" y="250" rx="3" ry="3" width="100%" height="20" />
          <rect x="0" y="280" rx="3" ry="3" width="100%" height="20" />
          <rect x="0" y="310" rx="3" ry="3" width="100%" height="20" />
          <rect x="0" y="340" rx="3" ry="3" width="100%" height="20" />
          <rect x="0" y="370" rx="3" ry="3" width="100%" height="20" />
          <rect x="0" y="400" rx="3" ry="3" width="100%" height="20" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default Loader;
