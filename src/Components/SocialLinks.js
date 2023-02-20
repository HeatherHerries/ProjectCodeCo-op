import React from 'react'
import '../Styles/SocialLinks.css'
import FacebookIcon from '../Assets/Images/SVGImages/FacebookIcon.svg'
import GitHubIcon from '../Assets/Images/SVGImages/GitHubIcon.svg'
import SlackIcon from '../Assets/Images/SVGImages/SlackIcon.svg'

function SocialLinks() {
  return (
    <div className='social-links-container'>
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100089861145139"><img src={FacebookIcon} alt="Facebook" /></a>
        </li>

        <li>
          <a href="https://github.com/ProjectCode-Co-op"><img src={GitHubIcon} alt="Github" /></a>
        </li>

        <li>
          <a href="https://app.slack.com/client/T04MLFQNFGB/C04MHMKE3QV"><img src={SlackIcon} alt="Slack" /></a>
        </li>

      </ul>
    </div>
  )
}

export default SocialLinks