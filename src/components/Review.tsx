import React from 'react';

export interface ReviewInterface {
  review: {
    name: string,
    message: string,
    image: string,
    rating: number
  }
}

const Review: React.FC<ReviewInterface> = ({ review: { name, message, image, rating } }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 mb-5">
      <div className="w-16 h-16">
        <img className="rounded-full" src={image} width="150" height="150" />
      </div>
      <div className="flex flex-col text-center">
        <p>{name}</p>
        <p>{rating.toFixed(1)}/5.0</p>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Review;
