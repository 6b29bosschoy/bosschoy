import { popularityStats, performanceStats } from '../data/demoStats';

export default function BattleLeaderboard() {
  return <section className="card"><h2>Battle 排行榜</h2><div className="split"><div><h3>A. 人氣投票榜</h3><p className="demo">示範數據 Demo Data</p><ul><li>黃金隊支持率：{popularityStats.goldSupport}</li><li>白銀隊支持率：{popularityStats.silverSupport}</li><li>看升支持率：{popularityStats.callSupport}</li><li>看跌支持率：{popularityStats.putSupport}</li><li>總參與人次：{popularityStats.participants}</li></ul></div><div><h3>B. 產品表現榜</h3><p className="demo">示範排行榜｜非真實產品表現</p>{performanceStats.map((item)=><p key={item.code}>{item.code}｜{item.asset}｜{item.direction}｜{item.start} → {item.current}｜5日表現 {item.performance}｜{item.updatedAt}｜{item.source}</p>)}</div></div><p className="risk-inline">排行榜僅供互動展示，並非投資建議或實際回報承諾。</p></section>;
}
