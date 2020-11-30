const Friend = ({ friends }) => {
  if (!friends) {
    return null;
  }
  return (
    <div>
      {Object.values(friends).map((friend) => {
        return (
          <div key={friend.username} className="friend">
            {friend.username}
          </div>
        );
      })}
    </div>
  );
};

export default Friend;
