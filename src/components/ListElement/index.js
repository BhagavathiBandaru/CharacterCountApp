import './index.css'

const ListElement = props => {
  const {ListItemData} = props
  const {name, count} = ListItemData

  return (
    <li className="list-container">
      <p className="name-text">{name}</p>
      <p className="count-text">{count}</p>
    </li>
  )
}

export default ListElement
