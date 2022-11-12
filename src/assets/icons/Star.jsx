import React from 'react';

import { PropTypes } from 'prop-types';

const Star = ({ fill, ...props }) => (
  <svg
    {...props}
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.12475 0.583827C4.50519 -0.104606 5.49481 -0.104606 5.87525 0.583827L6.65696 1.99839C6.80037 2.2579 7.05154 2.44039 7.34267 2.49659L8.92956 2.80292C9.70186 2.952 10.0077 3.89318 9.4705 4.46774L8.36673 5.64831C8.16423 5.8649 8.06829 6.16017 8.10481 6.45442L8.30385 8.0583C8.40072 8.83887 7.6001 9.42055 6.88767 9.08722L5.42379 8.40229C5.15524 8.27663 4.84476 8.27663 4.57621 8.40229L3.11233 9.08722C2.3999 9.42056 1.59928 8.83887 1.69615 8.0583L1.89519 6.45442C1.93171 6.16017 1.83577 5.8649 1.63327 5.64831L0.529503 4.46774C-0.00767314 3.89318 0.298136 2.952 1.07044 2.80292L2.65733 2.49659C2.94846 2.44039 3.19963 2.2579 3.34304 1.99839L4.12475 0.583827Z"
      fill="url(#paint0_linear_6653_3)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_6653_3"
        x1="0.374194"
        y1="-1"
        x2="10.5161"
        y2="-1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor={fill} />
        <stop stopColor={fill} />
      </linearGradient>
    </defs>
  </svg>
);
Star.propTypes = {
  fill: PropTypes.string,
};
Star.defaultProps = {
  fill: '#A02279',
};
export default Star;
