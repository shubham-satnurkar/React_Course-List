import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getCourses } from '../api/Myservices'

function CourseList() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getCourses()
            .then(res => setCourses(res.data))
            .catch(err => console.log(err))


    }, [])
    const goToEnquiry = (id) => {
        navigate("/enquiry/" + id)

    }

    const showEnquiry = (id) => {
        navigate("/details/" + id)

    }

    return (
        <>
            <section className='course-list'>
                <div className='container'>
                    <div className='row pt-3'>
                        <div className='col-12 mb-4 text-center'>
                            <h1>Course List App</h1>
                        </div>
                        <div className='col-12'>
                            <table className="table table-dark table-hover table-bordered shadow-lg   ">
                                <thead>
                                    <tr>
                                        <th>Sr. No.</th>
                                        <th >Course Name</th>
                                        <th >Enquiry</th>
                                        <th >Enquiry Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        courses.map(course => {
                                            return (
                                                <tr key={course.id}>
                                                    <td>
                                                        {course.index}
                                                    </td>
                                                    <td>
                                                        {course.title}
                                                    </td>
                                                    <td>
                                                        <input type="button" className='btn btn-primary' value=" Add Enquiry" onClick={() => goToEnquiry(course.id)} />
                                                    </td>
                                                    <td>
                                                        <input type="button" className='btn btn-success shadow' value=" Enquiry Details" onClick={() => showEnquiry(course.id)} />
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

export default CourseList