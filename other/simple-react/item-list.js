<<<<<<< HEAD
import React from 'react'

function ItemList({items}) {
  return items.length ? (
    <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
  ) : (
    'no items'
  )
}

=======
import React from 'react'

function ItemList({items}) {
  return items.length ? (
    <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
  ) : (
    'no items'
  )
}

>>>>>>> 594d0775625365a21e44cfc0ba6053c4d98bcead
export default ItemList