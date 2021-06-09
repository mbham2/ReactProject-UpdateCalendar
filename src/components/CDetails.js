import CDetail from './CDetail';

const CDetails = ({datas, onDelete, onToggle}) => {
    return (
        <>
            {datas.map((data,id) =>
            (<CDetail key={id} data={data} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default CDetails
