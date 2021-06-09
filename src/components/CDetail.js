import { FaTimes } from 'react-icons/fa'


const CDetail = ({ data, onDelete, onToggle }) => {
    return (
        <div className={`subject ${data.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(data.id)}>
            <h3>{data.sName} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(data.id)} /></h3>
            <p>ClassTime: {data.cTime}</p>
            <p>ExamTime: {data.exams}</p>
            <p>HomeWork DueTime: {data.hWork}</p>
        </div>
    )
}

export default CDetail
