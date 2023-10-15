// HW #1
import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";

// HW #2
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json";

// HW #3
import { FriendList } from "./FriendList/FriendList";
import friends from "./FriendList/friends.json"

//HW #4
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactions.json";

export const App = () => {
  return (
    <>
      <div className="container">
        <h2>HW #1</h2>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className="container">
        <h2>HW #2</h2>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div className="container">
        <h2>HW #3</h2>
        <FriendList friends={friends} />
      </div>
      <div className="container">
        <h2>HW #4</h2>
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
};
