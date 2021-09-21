import UserItem from './UserItem';
import classes from './UsersList.module.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className={classes.center}>
        <h2>No Users Found</h2>
      </div>
    );
  }
  return (
    <section className={classes['users-list']}>
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          postCount={user.posts}
        />
      ))}
    </section>
  );
};

export default UsersList;
