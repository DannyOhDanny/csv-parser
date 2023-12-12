import './Error.css';
import React from 'react';

function Error({ errorOnUpload }) {
  return (
    <div className="main__error">
      <h3 className="main__error-title">{errorOnUpload}</h3>
    </div>
  );
}

export default Error;
