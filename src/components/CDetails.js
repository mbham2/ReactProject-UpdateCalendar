import CDetail from './CDetail';

const CDetails = ({datas, onDelete, onToggle}) => {
    return (
        <>
            {datas.map((data,index) =>
            (<CDetail key={index} data={data} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default CDetails
