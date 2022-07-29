import React from 'react'
import AssetCard from '../AssetCard/AssetCard'
import styles from "./style.module.css"
import bitcoin from "../../Images/bitcoin.svg"
import solana from "../../Images/solana.svg"
import etherum from "../../Images/etherum.svg"
import binance from "../../Images/binance.svg"
import shiba from "../../Images/shiba.svg"
import bitcoinBackground from "../../Images/bitcoinBackground.svg"
import solanaBackground from "../../Images/solanaBackground.svg"
import etherumBackground from "../../Images/etherumBackground.svg"
import binanceBackground from "../../Images/binanceBackground.svg"
import shibaBackground from "../../Images/shibaBackground.svg"
import trendingIcon from "../../Images/trendingIcon.svg"


export default function MainPage() {
    return (
        <div className = {styles.mainCont} >
            <div className = {styles.trending} >
                <img src = {trendingIcon} alt = "icon" />
                <div>Trending Assets</div>
            </div>
            <div className = {styles.main} >
                <AssetCard 
                    logo = {bitcoin} 
                    bckgrImg = {bitcoinBackground}  
                    assetType = "Bitcoin (BTC)" 
                    price = "$1,466.45" 
                    diff = "+10%" 
                    tvl = "$60,000" 
                    popularPairs = {[solana, etherum, bitcoin ]} 
                />
                <AssetCard 
                    logo = {solana}  
                    bckgrImg = {solanaBackground} 
                    assetType = "Solana (SOL)" 
                    price = "$32.83" diff = "-12.32%" 
                    tvl = "$60,000" 
                    popularPairs = {[bitcoin, etherum, binance]}  
                />
                <AssetCard 
                    logo = {etherum} 
                    bckgrImg = {etherumBackground}  
                    assetType = "Ethereum (ETH)" 
                    price = "$1,466.45" diff = "-11.93%" 
                    tvl = "$60,000" 
                    popularPairs = {[solana, bitcoin, binance]}  
                />
                <AssetCard 
                    logo = {binance} 
                    bckgrImg = {binanceBackground}  
                    assetType = "Binance USD (BUSD)" 
                    price = "$1.00" diff = "+0.26%" 
                    tvl = "$60,000" 
                    popularPairs = {[solana, etherum, binance]}  
                />
                <AssetCard 
                    logo = {shiba} 
                    bckgrImg = {shibaBackground} 
                    assetType = "Shiba Inu (SHIB)" 
                    price = "$0.00000001948" diff = "-8.1%" 
                    tvl = "$60,000" 
                    popularPairs = {[solana, etherum, binance]}  
                />
            </div>
        </div>
    )
}
