import React from 'react';
import Helmet from 'react-helmet';

const Title = ({ title }) => {
  const defaultTitle = 'Verse | Song Lyrics and More';

  return (
    <Helmet><title>{title ? title : defaultTitle}</title></Helmet>
  );
}

export default Title;
