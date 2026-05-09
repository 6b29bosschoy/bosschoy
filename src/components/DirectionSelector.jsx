export default function DirectionSelector({ selectedDirection, onSelect, disabled }) {
  return <section className="card"><h2>Step 02｜選擇方向</h2><div className="split"><button disabled={disabled} className={`pick ${selectedDirection==='call'?'active':''}`} onClick={() => onSelect('call')}>看升 Call<span>{selectedDirection==='call'?'已選擇':'預期相關資產上升'}</span></button><button disabled={disabled} className={`pick ${selectedDirection==='put'?'active':''}`} onClick={() => onSelect('put')}>看跌 Put<span>{selectedDirection==='put'?'已選擇':'預期相關資產下跌'}</span></button></div></section>;
}
