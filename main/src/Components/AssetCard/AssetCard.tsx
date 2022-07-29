import React from 'react'
import styles from "./style.module.css"
import assetCardBackground from "../../Images/assetCardBackground.svg"
import prices from "../../Images/prices.svg"

interface Props {
    logo: string,
    bckgrImg: string,
    assetType: string,
    price: string,
    diff: string,
    tvl: string,
    popularPairs: string[]
}

export default function AssetCard({logo, bckgrImg, assetType, price, diff, tvl,  popularPairs}: Props) {
    return (
       <div >
            <div 
                className = {styles.imgCont}
                style = {{backgroundImage: `url(${bckgrImg})`}} 
            >
                <img src = {logo} alt = "asset icon"/>
            </div>
            <div 
                className = {styles.card} 
                style = {{backgroundImage: `url(${assetCardBackground})`}}
            >
                <div className = {styles.content} >
                    <div className = {styles.headers} > {assetType} </div>
                    
                    <div style = {{backgroundImage: `url(${prices})`}} className = {styles.prices} >
                        <span>
                           {price}
                        </span>
                        <span className = { Number(diff.split("%")[0]) > 0 ? styles.change: styles.changeNegative } >
                            {diff}
                        </span>
                    </div>
                    <div className = {styles.headers}>Prices</div>

                    <div style = {{backgroundImage: `url(${prices})`}} className = {styles.prices} >
                        {tvl}
                    </div>
                    <div className = {styles.headers}>TVL</div>
                    <div className = {styles.popularPairs} >
                        <img src = {popularPairs[0]} alt = "popular pair icon" />
                        <img src = {popularPairs[1]} alt = "popular pair icon" />
                        <img src = {popularPairs[2]} alt = "popular pair icon" />

                    </div>
                    <div className = {styles.headers}>Popular Pairs</div>
                </div>
            </div>
       </div>
    )
}
