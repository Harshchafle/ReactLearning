import React, { useState } from 'react'
import '../componentscss/Header.css'

function Header() {

  let [isSideBarVisible, setIsSideBarVisible] = useState(true);

  const showSideBar = () => {
    setIsSideBarVisible(true)
  }

  const hideSideBar = () => {
    setIsSideBarVisible(false)
  }

    return (
      <>

        <nav className=''>
            
          <ul className="sidebar">
            <li onClick={hideSideBar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">More</a></li>
          </ul>
          
              {isSideBarVisible && (
              <ul>
                <li><a href="#">Logo</a></li>
                <li className="hideOnMobile"><a href="index.html">Home</a></li>
                <li className="hideOnMobile"><a href="#">Blogs</a></li>
                <li className="hideOnMobile"><a href="#">About</a></li>
                <li className="hideOnMobile"><a href="#">Contact us</a></li>
                <li className="hideOnMobile"><a href="#">More</a></li>
                <li className="displayOnMobile" onClick={showSideBar}><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>
              </ul>
              )}
        </nav>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <button className="btn btn-outline-success" type="submit" onSubmit={(event)=>console.log(event)}>
            Search
          </button>

        </form>
    </>

    )
}

export default Header