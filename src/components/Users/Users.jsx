import React from "react";
import module from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/image/image.png';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return <div>
            <div>
                {pages.map(p => {
                        return <span className={module.selectedPage}
                        onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                    })
                }
            </div>
            {
                this.props.users.map(function (u) {
                    return <div key={u.id}>
                    <span>
                        <div><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                  alt="usersAvatar"
                                  className={module.usersPhoto}/></div>
                        <div>
                             {u.followed
                                 ? <button onClick={() => {
                                     this.props.unfollow(u.id)
                                 }}>Unfollow</button>
                                 : <button onClick={() => {
                                     this.props.follow(u.id)
                                 }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                        <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                    </div>
                })
            }
        </div>
    }
}

export default Users;