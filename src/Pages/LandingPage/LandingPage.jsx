import React from 'react';
import styles from "./landingpage.module.scss"
import ActionBtnIcon from '../../assets/icons/actiobtnico.png'
import HoverActionIcon from "../../assets/icons/hoveractionicon.png"
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import PopUp from '../../Components/PopUp/PopUp';

const LandingPage = () => {

    const [showPopUp, setShowPopUp] = React.useState(false);

    return (<div className={styles.landingPageContainer}>
        <Navbar />
        <div className={styles.contentContainer}>
            <Sidebar />
            <div className={showPopUp ? styles.mainContentBlur + " " + styles.mainContent : styles.mainContent}>
                {showPopUp && <PopUp />}
                <button onClick={() => setShowPopUp(!showPopUp)} className={styles.actioBtn}>
                    <img className={styles.unhoveredImg} src={ActionBtnIcon} />
                    <img className={styles.hoveredImg} src={HoverActionIcon} />
                    {!showPopUp && <p>REVEAL NOW</p>}
                    {showPopUp && <p>BACK HOME</p>}
                </button>
                <div className={styles.footer}>
                    <p> © 2023 TPW - ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>

    </div>);
}

export default LandingPage;