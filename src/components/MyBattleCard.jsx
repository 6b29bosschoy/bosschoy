export default function MyBattleCard({ product, team, direction, onReset }) {
  if (!product) return null;
  const battleId = `${team.toUpperCase()}-${direction.toUpperCase()}-${product.code.slice(-4)}`;
  const shareText = encodeURIComponent(`我在金銀輪 Battle Arena 選擇了${team === 'gold' ? '黃金隊' : '白銀隊'} ${direction === 'call' ? '看升' : '看跌'}，Battle ID：${battleId}`);

  return <section className="card"><h2>Step 04｜我的金銀戰輪卡</h2><div className="battle-card"><p>已選陣營：{team === 'gold' ? '黃金隊' : '白銀隊'}</p><p>方向：{direction === 'call' ? '看升 Call' : '看跌 Put'}</p><p>對應產品代號：{product.code}</p><p>對戰期：5 個交易日</p><p>Battle ID：{battleId}</p><p className="fine">風險提示：輪證屬槓桿產品，投資者可能損失全部本金。</p></div><div className="actions"><button className="btn ghost" onClick={() => navigator.clipboard.writeText(window.location.href)}>複製 Battle 連結</button><a className="btn ghost" href={`https://wa.me/?text=${shareText}`} target="_blank" rel="noreferrer">分享至 WhatsApp</a><button className="btn ghost">查看產品詳情</button><button className="btn primary" onClick={onReset}>重新選擇</button></div></section>;
}
