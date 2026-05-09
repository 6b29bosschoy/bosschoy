const teams = [
  { key: 'gold', title: '黃金隊 Gold Team' },
  { key: 'silver', title: '白銀隊 Silver Team' }
];

export default function TeamSelector({ selectedTeam, onSelect }) {
  return <section id="team" className="card"><h2>Step 01｜選擇陣營</h2><div className="split">{teams.map((team) => <button key={team.key} className={`pick ${selectedTeam===team.key?'active':''}`} onClick={() => onSelect(team.key)}>{team.title}<span>{selectedTeam===team.key?'已選擇':'按此選擇'}</span></button>)}</div></section>;
}
