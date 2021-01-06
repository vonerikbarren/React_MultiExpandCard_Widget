import { React } from 'react';
import "./MultiExpandCard.css";


const MultiExpandCard = () => {
  const panels = document.querySelectorAll('.panel')

  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
    })
  })

  function removeActiveClasses() {
    panels.forEach(panel => {
      panel.classList.remove('active')
    })
  }

  return (
    <div className="container">

      <div className="panel active"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590928170070-6736c6bc29d3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVybXVkYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')" }}>
        <h3>Bermuda Telephone Booths</h3>
      </div>
      <div className="panel"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580840157069-ef1b25886087?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGJlcm11ZGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')" }}>
        <h3>Bermuda Beach House</h3>
      </div>
      <div className="panel"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')" }}>
        <h3>Bermuda Beach</h3>
      </div>
      <div className="panel"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580841799012-512b03cd65c0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJlcm11ZGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')" }}>
        <h3>Homes of Bermuda</h3>
      </div>
      <div className="panel"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584794109422-8cf08a0f815f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fGJlcm11ZGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')" }}>
        <h3>Bermuda Waves and Sand</h3>
      </div>
    </div>
  )
};

export default MultiExpandCard;

