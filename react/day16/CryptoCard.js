import React from "react";

const CryptoCard = ({ coin }) => {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        .crypto-card{
          width:350px;
          background:#1e293b;
          border-radius:20px;
          padding:25px;
          color:white;
          box-shadow:0 10px 25px rgba(0,0,0,0.4);
          transition:0.3s ease;
        }

        .crypto-card:hover{
          transform:translateY(-5px);
        }

        .top-section{
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-bottom:20px;
        }

        .coin-info{
          display:flex;
          align-items:center;
          gap:15px;
        }

        .coin-image{
          width:60px;
          height:60px;
        }

        .coin-name{
          font-size:24px;
          font-weight:bold;
        }

        .coin-symbol{
          color:#94a3b8;
          text-transform:uppercase;
          font-size:14px;
        }

        .rank{
          background:#334155;
          padding:6px 12px;
          border-radius:10px;
          font-size:14px;
        }

        .price{
          font-size:36px;
          font-weight:bold;
          margin-bottom:10px;
        }

        .change{
          display:inline-block;
          padding:6px 12px;
          border-radius:10px;
          font-size:14px;
          font-weight:bold;
          margin-bottom:20px;
        }

        .positive{
          background:#14532d;
          color:#4ade80;
        }

        .negative{
          background:#7f1d1d;
          color:#f87171;
        }

        .stats{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:15px;
        }

        .stat-box{
          background:#334155;
          padding:15px;
          border-radius:12px;
        }

        .stat-title{
          color:#94a3b8;
          font-size:13px;
          margin-bottom:8px;
        }

        .stat-value{
          font-size:16px;
          font-weight:bold;
        }
      `}</style>

      <div className="crypto-card">

        <div className="top-section">
          <div className="coin-info">
            <img
              src={coin.image}
              alt={coin.name}
              className="coin-image"
            />

            <div>
              <h2 className="coin-name">{coin.name}</h2>
              <p className="coin-symbol">{coin.symbol}</p>
            </div>
          </div>

          <div className="rank">
            Rank #{coin.market_cap_rank}
          </div>
        </div>

        <h1 className="price">
          ${coin.current_price.toLocaleString()}
        </h1>

        <div
          className={`change ${
            coin.price_change_percentage_24h > 0
              ? "positive"
              : "negative"
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>

        <div className="stats">
          <div className="stat-box">
            <p className="stat-title">24H High</p>
            <p className="stat-value">
              ${coin.high_24h.toLocaleString()}
            </p>
          </div>

          <div className="stat-box">
            <p className="stat-title">24H Low</p>
            <p className="stat-value">
              ${coin.low_24h.toLocaleString()}
            </p>
          </div>

          <div className="stat-box">
            <p className="stat-title">Volume</p>
            <p className="stat-value">
              ${coin.total_volume.toLocaleString()}
            </p>
          </div>

          <div className="stat-box">
            <p className="stat-title">Symbol</p>
            <p className="stat-value">
              {coin.symbol.toUpperCase()}
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default CryptoCard;