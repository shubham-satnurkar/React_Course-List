import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { addEnquiry } from '../api/Myservices';
import { useNavigate } from 'react-router-dom';
export default function CourseEnquiry() {
    const [state, setState] = useState({ name: '', age: "", months: "" });
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);
    const [error3, setError3] = useState(false);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");

    const navigate = useNavigate();
    const { id } = useParams()
    const handler = (event) => {
        let { name, value } = event.target;
        setState({ ...state, [name]: value });
    }

    function postAddEnquiry(event) {
        event.preventDefault();
        let result = validate()
        if (result) {
            addEnquiry(state, id)
                .then(res => {
                    if (res) {
                        alert("Enquiry Added")
                        navigate("/courses")
                    }
                })
                .catch(err => console.log(err))
        }

    }
    const validate = () => {
        let result1 = validate1();
        let result2 = validate2();
        let result3 = validate3();

        return result1 && result2 && result3;
    }
    const validate1 = () => {
        let regEx = new RegExp("^[A-Za-z]*$");
        if (state.name === "") {
            setError(true)
            setText("required")
            return false
        }
        else if (!regEx.test(state.name)) {
            setError(true)
            setText("name should contain only alphabets")
            return false

        }
        else {
            setText("")
            return true
        }
    }
    const validate2 = () => {
        let regEx = new RegExp("^[0-9]*$");
        if (state.age === "") {
            setError2(true)
            setText2("required")
            return false
        }
        else if (!regEx.test(state.age)) {
            setError2(true)
            setText2("Age should be only in digits")
            return false

        }
        else {
            setText2("")
            return true
        }
    }
    const validate3 = () => {
        let regEx = new RegExp("^[0-9]*$");
        if (state.months === "") {
            setError3(true)
            setText3("required")
            return false
        }
        else if (!regEx.test(state.months)) {
            setError3(true)
            setText3("Months should be only in digits")
            return false

        }
        else {
            setText3("")
            return true
        }
    }
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-8 mx-auto'>
                        <form onSubmit={postAddEnquiry} className="shadow p-5">
                            <h3 className='text-center mb-4'>Course Enquiry Form</h3>
                            <div className='form-group mb-3'>
                                <label>Full Name</label>
                                <input type="text" className="form-control" name="name" onChange={handler} onBlur={validate1} />
                                {error ? <p className='text-danger'>{text}</p> : ""}
                            </div>
                            <div className='form-group mb-3'>
                                <label> Age</label>
                                <input type="text" className="form-control" name="age" onChange={handler} onBlur={validate2} />
                                {error2 ? <p className='text-danger'>{text2}</p> : ""}
                            </div>
                            <div className='form-group mb-3'>
                                <label>Course Duration</label>
                                <input type="text" className="form-control" name="months" onChange={handler} onBlur={validate3} />
                                {error3 ? <p className='text-danger'>{text3}</p> : ""}
                            </div>


                            <div className='form-group text-center'>
                                <input type="submit" value="Add Enquiry" className="btn btn-success mt-3" />
                            </div>


                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
