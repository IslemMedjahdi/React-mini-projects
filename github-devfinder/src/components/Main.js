import React from "react";

const Main = ({
  avatar,
  name,
  bio,
  dateJ,
  username,
  repos,
  followers,
  following,
  webSite,
  location,
  twitter,
  work,
  link,
  loading,
  retry,
}) => {
  return (
    <div className="w-full space-y-5 p-5 max-w-xl mt-6 rounded-lg bg-white shadow-lg dark:bg-[#1e2a47]">
      {loading ? (
        <>
          <div>
            <div className="flex space-x-6 sm:space-x-0 sm:justify-between text-gray-900 dark:text-white items-center">
              <div>
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src={avatar}
                  alt={name}
                />
              </div>
              <div className="space-y-2">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="font-semibold hover:underline underline-offset-2 text-lg">
                    {name || username}
                  </p>
                </a>
                <p className="text-sm text-blue-600">@{username}</p>
                <div
                  data-tip={bio}
                  className={`${bio ? "tooltip" : ""} sm:block hidden`}
                >
                  <p className="text-ellipsis text-gray-900 dark:text-indigo-100 text-left line-clamp-2 max-w-[15rem]">
                    {bio || "This profile has no bio"}
                  </p>
                </div>
                <p className="dark:text-indigo-100 text-gray-900 sm:hidden">
                  Joined {dateJ}
                </p>
              </div>
              <div className="dark:text-indigo-100 text-gray-900 hidden sm:block">
                <p>Joined {dateJ}</p>
              </div>
            </div>
            <div>
              <div
                data-tip={bio}
                className={`${bio ? "tooltip" : ""} block mt-8 sm:hidden`}
              >
                <p className="text-ellipsis dark:text-indigo-100 text-gray-900 text-left line-clamp-3 w-full">
                  {bio || "This profile has no bio"}
                </p>
              </div>
            </div>
            <div className="flex rounded-lg items-center justify-between p-4 mt-8 bg-gray-100 dark:bg-[#141d2f]">
              <div className="font-semibold">
                <p className="text-gray-600 dark:text-indigo-100">Repos</p>
                <p className=" dark:text-white">{repos}</p>
              </div>
              <div className="font-semibold">
                <p className="text-gray-600 dark:text-indigo-100">Followers</p>
                <p className="dark:text-white">{followers}</p>
              </div>
              <div className="font-semibold">
                <p className="text-gray-600 dark:text-indigo-100">Following</p>
                <p className="dark:text-white">{following}</p>
              </div>
            </div>
            <div className="dark:text-white grid grid-rows-4 sm:grid-cols-2 p-2 sm:grid-rows-2 mt-4 gap-4">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>{location || "Not Available"}</p>
              </div>
              <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              <p>{twitter ? <a className="hover:underline underline-offset-1" href={`https://www.twitter.com/${twitter}`} target="_blank" rel="noreferrer">@{twitter}</a> : "Not Available"}</p>
              </div>
              <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
</svg>
<p className="truncate max-w-xs">{webSite ? <a className="hover:underline underline-offset-1" href={webSite} target="_blank" rel="noreferrer">{webSite}</a> : "Not Available"}</p>
              </div>
              <div className="flex items-center space-x-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
</svg>
<p>{work || "Not Available"}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="h-full flex flex-col items-center space-y-5 justify-center">
          <p className="text-gray-900 text-xl font-bold text-center dark:text-gray-50 ">
            error while trying to connect to github API
          </p>
          <button
            className="text-white font-semibold  active:scale-95 rounded-xl py-3 px-5 bg-blue-600 hover:bg-blue-500"
            onClick={retry}
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
