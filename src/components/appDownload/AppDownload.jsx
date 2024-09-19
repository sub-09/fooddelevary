import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='appDownload' id='appDownload'>
        <p>For better experiance download <br />Tomato App</p>
        <div className="appDownloadPlatform">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload