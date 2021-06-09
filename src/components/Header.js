import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
   
    return (
        <header>
            <div className="navbar">
                <h1>{title}</h1>
                <Button color={showAdd ? 'Orange' : 'Gold'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            </div>
        </header>
    )
}

export default Header
