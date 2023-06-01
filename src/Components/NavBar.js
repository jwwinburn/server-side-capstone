import React from 'react'
import Logout from './Auth/Logout'

function NavBar() {
  return (
      <div className="navbar bg-neutral text-neutral-content">
        <div className="flex justify-center">
        <Logout />
  <a className="btn rounded-none glass w-36 font-thin font-roboto text-lg">Menu</a>
</div>
</div>
  )
}

export default NavBar