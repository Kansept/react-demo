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
              ? <button onClick={() => {
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                  headers: {
                    "API-KEY": "e5464d70-c17a-455f-b821-8d099218ce9c",
                  },
                  withCredentials: true,
                }).then(response => {
                  if (response.data.resultCode === 0) {
                    props.unfollow(u.id)
                  }
                });
                props.unfollow(u.id)
              }}>Unfollow</button> 
              : <button onClick={() => {
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "e5464d70-c17a-455f-b821-8d099218ce9c",
                  },
                }).then(response => {
                  if (response.data.resultCode === 0) {
                    props.follow(u.id)
                  }
                });
              }}>Follow</button>
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
