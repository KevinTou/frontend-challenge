import React from 'react';

import StarIcon from './StarIcon';

const AnnouncementBar: React.FC = () => {
  return (
    <div className="fixed top-0 bg-blue-300 w-full text-center flex justify-center items-center z-10">
      <StarIcon size="w-5" />
      <p className="uppercase text-lg font-semibold">Free shipping for first time purchases*</p>
      <StarIcon size="w-5" />
    </div>
  )
}

export default AnnouncementBar

