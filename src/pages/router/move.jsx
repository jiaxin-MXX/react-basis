import React, { Component } from 'react';
import MovieItem from './movieItem'
import {
    Route,
    NavLink
} from 'react-router-dom'
class move extends Component {
    render() {
        let { match }=this.props
        //react-route传值的三种方式
        //使用params传值
        // return (
        //     <div>
        //         <NavLink to={{
        //             pathname:'/move/item/2',
        //         }}>显示电影</NavLink>
        //         <Route
        //             path={match.url+'/item/:id'}
        //             component={MovieItem}
        //         />
        //     </div>
        // );
        //使用search传值
        // return (
        //     <div>
        //         <NavLink to={{
        //             pathname:'/move/item',
        //             search: "?id=2"
        //         }}>显示电影</NavLink>
        //         <Route
        //             path={match.url+'/item'}
        //             component={MovieItem}
        //         />
        //     </div>
        // );
        //使用state传值并且利用commponent渲染函数
        // return (
        //     <div>
        //         <NavLink activeClassName='active2' to={{
        //             pathname:'/move/item',
        //             state:{id:2}
        //         }}>显示电影</NavLink>
        //         <Route
        //             path={match.url+'/item'}
        //             component={MovieItem}
        //         />
        //     </div>
        // );
        // 利用render渲染函数
        // return (
        //     <div>
        //         <NavLink activeClassName='active2' to={{
        //             pathname:'/move/item',
        //             state:{id:2}
        //         }}>显示电影</NavLink>
        //         <Route
        //             path={match.url+'/item'}
        //             render={
        //                 (props)=>(<MovieItem {...props}></MovieItem>)
        //             }
        //         />
        //     </div>
        // );
        // 利用children渲染函数
        return (
            <div>
                <NavLink activeClassName='active2' to={{
                    pathname:'/move/item',
                    state:{id:2}
                }}>显示电影</NavLink>
                <Route
                    path={match.url+'/item'}
                    children={
                        (props)=>(<MovieItem {...props}></MovieItem>)
                    }
                />
            </div>
        );
        //children与render区别是children路由存不存在都渲染，而render只有在匹配的时候才会渲染
    }
}

export default move;