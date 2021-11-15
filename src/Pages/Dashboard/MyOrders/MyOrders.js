import React from 'react';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const MyOrders = () => {
    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, []);
    const handleDelete = id => {
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Delete confirm')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrder(remaining);
                }

            })
    }
    return (

        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Delete button</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => (<tr>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td> <img style={{ width: 60 }} src={order.img} alt="" /></td>
                            <button className='btn btn-danger' onClick={() => handleDelete(order._id)}>Delete</button>
                        </tr>))
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;




















// import React, { useEffect, useState } from 'react';
// import { Table } from 'react-bootstrap';

// const MyOrders = () => {

//     const [order, setOrder] = useState([]);
//     const [controls, setControls] = useState(false)

//     useEffect(() => {
//         fetch('http://localhost:5000/orders')
//             .then(res => res.json())
//             .then(data => setOrder(data))
//     }, [controls])


//     const handleDelete = (_id) => {
//         fetch(`http://localhost:5000/orders/${_id}`, {
//             method: "DELETE",
//             headers: { "content-type": "application/json" },

//         })
//             .then((result) => {
//                 if (result.isConfirmed) {
//                     alert('confirm delete')
//                     const remainingUsers = order.filter(user => user._id !== _id);
//                     setOrder(remainingUsers)
//                 } else {
//                     setControls(false);
//                 }
//             });
//     }
//     return (

//     );
// };

// export default MyOrders;