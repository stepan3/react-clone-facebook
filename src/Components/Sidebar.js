import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import { ExpandMoreOutlined } from '@material-ui/icons'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'

function Sidebar() {
  // const [{ user }, dispatch] = useStateValue()

  return (
    <div className="sidebar">
      <SidebarRow
        src="https://i.pinimg.com/originals/05/fc/57/05fc57385b3678a0549d71f25f5c4189.jpg"
        title="Stepan"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  )
}

export default Sidebar
