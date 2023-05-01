import React from "react";

export const CommentCard = () => {
  return (
    <div className="flex justify-center relative top-1/3">
      <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
        <div className="relative flex gap-4">
          <img
            src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
            className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
            alt=""
            loading="lazy"
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
              <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">
                COMMENTOR
              </p>
              <a className="text-gray-500 text-xl" href="#">
                <i className="fa-solid fa-trash"></i>
              </a>
            </div>
            <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
          </div>
        </div>
        <p className="-mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Maxime quisquam vero adipisci beatae voluptas dolor ame.
        </p>
      </div>
    </div>
  );
};
