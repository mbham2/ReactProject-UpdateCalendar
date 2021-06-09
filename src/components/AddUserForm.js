import React, { useState } from 'react';
import { Form } from 'reactstrap';


const AddUserForm = ({onAdd}) => {
    const [sName, setsName] = useState('')
    const [cTime, setcTime] = useState('')
    const [exams, setExams] = useState('')
    const [hWork, sethWork] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!sName) {
            alert('Please enter valid subject name')
            return
        }

        onAdd({sName, cTime, exams, hWork, reminder })
        setsName('')
        setcTime('')
        setExams('')
        sethWork('')
        setReminder(false)
    }

    return (
        <Form className="form" onSubmit={onSubmit}>
            <label className="form-label">SubjectName</label>
            <input className="form-input" type="text"
                placeholder="Add Name of the class" value={sName} onChange={(e) => setsName(e.target.value)} />
            <label className="form-label">ClassTime</label>
            <input className="form-input" type="text"
                placeholder="Add Class Time" value={cTime} onChange={(e) => setcTime(e.target.value)} />
            <label className="form-label">Exams</label>
            <input className="form-input" type="text"
                placeholder="Add Exam details" value={exams} onChange={(e) => setExams(e.target.value)} />
            <label className="form-label">HomeWork</label>
            <input className="form-input" type="text"
                placeholder="Add Homework Details" value={hWork} onChange={(e) => sethWork(e.target.value)} />
            <label className="form-checklabel">SetReminder</label>
            <input className="form-checkinput" type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            <input type="submit" className="btn btn-primary" value="Add Class" />
        </Form>
    )
}

export default AddUserForm;
