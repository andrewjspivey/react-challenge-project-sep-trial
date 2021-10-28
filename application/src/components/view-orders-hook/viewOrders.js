import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/actions/orderActions'
import { Template } from '../../components';
import OrdersList from './ordersList';
import './viewOrders.css';

export default function ViewOrders(props) {
    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders())
    }, [orders])

    return (
        <Template>
            <div className="container-fluid">
                <OrdersList />
            </div>
        </Template>
    );
}