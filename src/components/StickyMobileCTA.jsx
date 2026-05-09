export default function StickyMobileCTA({ team, direction }) {
  const text = !team ? '立即選擇陣營' : !direction ? '選擇看升 / 看跌' : '查看我的戰輪卡';
  const href = !team ? '#team' : !direction ? '#team' : '#my-card';
  return <a className="sticky-cta" href={href}>{text}</a>;
}
