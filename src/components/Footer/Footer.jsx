import React from 'react';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
   <footer className="footer">
       <span className="moon-icon"><NightlightOutlinedIcon style={{width:"3rem",height:"3rem"}}/>
       </span>
       <div className="tagline">FREEYAY</div>
       <a href="https://github.com/nightlight-wander" target="_blank"><i className="git-icon"><GitHubIcon style={{width:"3rem",height:"3rem"}}/></i>
       </a>
   </footer>
  )
}

export {Footer};