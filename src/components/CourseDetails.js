import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getEnquiries } from '../api/Myservices';

export default function CourseDetails() {
    const { id } = useParams();

    const [enquiries, setEnquiries] = useState([]);

    useEffect(() => {
        getEnquiries(id)
            .then(res => setEnquiries(res.data))
            .catch(err => console.log(err))


    }, [id])
    return (
        <>
            <section className='course-details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 mb-4 text-center'>
                            <h1>Course Enquiry Details</h1>
                        </div>
                        <div className='col-12 mb-4 text-center'>
                            <table className="table table-bordered table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th>Sr.No.</th>
                                        <th>
                                            Full Name
                                        </th>
                                        <th>
                                            Age
                                        </th>
                                        <th>
                                            Course Duration
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        enquiries.map(details => {
                                            return (
                                                <tr key={details.id} >
                                                    <td>
                                                        {details.id}
                                                    </td>
                                                    <td>
                                                        {details.name}
                                                    </td>
                                                    <td>
                                                        {details.age}
                                                    </td>
                                                    <td>
                                                        {details.months}
                                                    </td>

                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
