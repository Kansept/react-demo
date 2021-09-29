import { NavLink } from 'react-router-dom';
import s from './users.module.css';
import axios from 'axios';

let Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i=1; i <= Math.min(pagesCount, 10); i++) {
    pages.push(i);
  }

  return <div>
    <div>{pages.map(p => 
      <span className={props.currentPage === p && s.selectPage} onClick={() => {props.onPageChanged(p)}}>
        {p}
      </span>
    )}</div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.small !== null 
                ? u.photos.small : 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}
                className={s.avatar} />
            </NavLink>
          </div>
          <div>
            {u.followed 
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> 
              : <button onClick={() => { props.follow(u.id) }}>Follow</button>
            }
          </div>
        </span>
        <span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users;
