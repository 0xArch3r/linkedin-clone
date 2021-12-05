import React from 'react'
import "./WidgetsBar.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord"


function WidgetsBar() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgetsbar">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Tanium IPO","Its not going to happen!")}
            {newsArticle("COVID CDC Update","Corona virus is not real says Dr. Fauci")}
            {newsArticle("Most Popular Programming Language","React hits the top of the list in study by no one!")}
            {newsArticle("Florida Man","Another interesting and wild story")}
        </div>
    )
}

export default WidgetsBar
