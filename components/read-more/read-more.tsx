'use client';

import { ReactNode, useState } from 'react';

export const ReadMore = ({
  summary,
  details,
}: {
  summary: ReactNode;
  details: ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-4">
      <div>{summary}</div>
      {isExpanded && <div className="mt-2">{details}</div>}
      <button
        className="mt-2 text-teal-950 link-dark dark:link-light underline underline-offset-4 font-bold"
        onClick={toggleExpand}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};
