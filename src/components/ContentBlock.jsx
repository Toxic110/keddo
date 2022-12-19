import React from 'react';

import classNames from 'classnames';

const ContentBlock = props => {
  const {children, animateClass = '', style} = props;

  return (
    <section className={classNames('content-block container animate__animated', animateClass)}>
      <div className="content-block__body" style={style}>
        {children}
      </div>
    </section>
  );
};

export default ContentBlock;
