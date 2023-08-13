import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import SearchItem from './SearchItem'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('shoppingList')
    return JSON.parse(storedItems) || []
  })
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const setAndSaveItems = newItems => {
    setItems(newItems)
    localStorage.setItem('shoppingList', JSON.stringify(newItems))
  }

  const addItem = item => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }

  const handleCheck = id => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setAndSaveItems(listItems)
  }

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('') // Clears the Add Item field
  }

  return (
    <div className='App'>
      <Header title='Grocery List' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content
        items={items.filter(item =>
          item.item.toLowerCase().includes(search.toLocaleLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  )
}

export default App
