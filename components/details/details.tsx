'use client';

import { ReactNode, useState } from 'react';

export const Details = ({
  summaryChildren,
  readMoreChildren,
}: {
  summaryChildren: ReactNode;
  readMoreChildren: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <details open={isOpen} onClick={toggleDetails}>
      <summary
        style={{ listStyle: 'none' }}
        onClick={(e) => {
          e.preventDefault(); // Prevent the default toggle action
          setIsOpen(true);
        }}
      >
        {summaryChildren}
        {!isOpen && (
          <p className="hover:underline italic ml-2 text-amber-300">
            ...Read More
          </p>
        )}
      </summary>
      {isOpen && (
        <div className="flex flex-col gap-2 pt-2">
          {readMoreChildren}
          <p className="hover:underline italic ml-2 text-amber-300">
            ...Read Less
          </p>
        </div>
      )}
    </details>
  );
};
