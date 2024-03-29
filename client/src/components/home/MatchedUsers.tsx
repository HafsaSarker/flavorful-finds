import { MatchedUsersProp } from '../../types/matchedUsersProp';
import { Link } from 'react-router-dom';
import { IoIosChatbubbles } from 'react-icons/io';
import { User } from '../../types/user';

const MatchedUsers: React.FC<MatchedUsersProp> = ({
  users,
  setShowProfile,
  setUser,
}) => {
  function onClickActions(user: User) {
    setUser(user);
    setShowProfile(true);
  }

  return (
    <div className="flex flex-col items-start w-full py-2 px-2 mx-4 overflow-auto">
      {/* map over all users */}
      {users ? (
        <div className="flex flex-col w-full gap-3 pr-8 hover:cursor-pointer">
          {users.map((user) => (
            <div
              key={user._id}
              onClick={() => onClickActions(user)}
              className="flex items-center h-full w-full py-3 px-2 gap-3 rounded-lg bg-gray-100 hover:bg-gray-200 border justify-between"
            >
              <div className="flex items-center gap-2">
                {user.profile.profileImg ? (
                  <img className="w-10" src={user.profile.profileImg} />
                ) : (
                  <img className="w-10" src="user.png" />
                )}

                <div className="flex flex-col">
                  <p className="text-sm">
                    {user.profile.firstName} {user.profile.lastName}
                  </p>

                  <p className="text-xs">{user.profile.age}</p>
                </div>
              </div>

              <Link
                to="/chat"
                state={{
                  user: user,
                }} // Passing user ID in state
                key={user._id}
              >
                <button className="px-3 text-xl hover:text-pink-600 text-pink-500">
                  <IoIosChatbubbles />
                </button>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No users found, try using different filters</p>
        </div>
      )}
    </div>
  );
};

export default MatchedUsers;
