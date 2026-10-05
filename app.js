const reports = [
  {date:'2026-10-05', label:'2026年10月5日', title:'原油上涨与炼厂利润扩张：成品油供应成为观察重点', summary:'EIA数据显示，第三季度原油和成品油价格整体走高。中东供应扰动与美国馏分油库存偏低共同支撑炼厂利润，但高油价也提高了需求回落的风险。', source:'美国能源信息署（EIA）', url:'https://www.eia.gov/todayinenergy/detail.php?id=68245', sample:false, facts:[['官方已确认事实','美国炼厂第三季度平均开工率约95%，为2019年以来第三季度较高水平。'],['库存信号','截至9月25日，美国馏分油库存比2021至2025年五年平均水平低13%。'],['价格表现','布伦特原油第三季度一度突破每桶100美元，9月15日期货价格达到109美元。'],['数据来源','EIA文章中的价格图表使用Bloomberg市场数据。']], analysis:'当前市场的关键并非单纯油价上涨，而是成品油供应紧张程度高于原油市场。高开工率和较高馏分油裂解价差有利于复杂炼厂，但价格上涨主要由供应风险推动，若冲突缓和，风险溢价可能快速回落。', impact:'上游油气生产、复杂炼厂和油轮运输相对受益；航空、物流、化工及其他能源成本敏感行业承压。', short:'1至5个交易日：能源板块偏多，成品油相关资产可能强于下游消费行业。', medium:'1至6个月：取决于中东供应是否恢复、美国馏分油库存能否回升，以及高油价是否压制全球需求。', risk:'停火或运输恢复可能使风险溢价快速消失；战略库存释放、美元走强和需求下降也可能令油价反转。', verdict:'值得继续研究，优先跟踪美国馏分油库存、柴油裂解价差、炼厂开工率和霍尔木兹海峡实际通行量。'}
];

function card(report){return `<a class="recent-card" href="report.html?date=${report.date}"><div><p>${report.label}${report.sample?' · 演示':''}</p><h3>${report.title}</h3></div><span class="text-link">查看详情 →</span></a>`}
function historyItem(report){return `<a class="history-item" href="report.html?date=${report.date}"><div><p>${report.label}${report.sample?' · 演示数据':''}</p><h2>${report.title}</h2></div><span class="history-arrow">›</span></a>`}
function fullReport(report){
  return `<a class="back-link" href="index.html">← 返回最新日报</a><article class="report-section"><div class="report-top"><div><p class="eyebrow">DAILY INTELLIGENCE</p><h2>${report.title}</h2></div><span class="report-date">${report.label}</span></div><p class="summary">${report.summary}</p><div class="report-content"><h3>已确认事实</h3><div class="facts">${report.facts.map(f=>`<div class="fact"><strong>${f[0]}</strong><span>${f[1]}</span></div>`).join('')}</div><h3>分析判断</h3><p>${report.analysis}</p><h3>可能影响的资产和行业</h3><p>${report.impact}</p><h3>短期影响</h3><p>${report.short}</p><h3>中期影响</h3><p>${report.medium}</p><h3>方向与影响周期</h3><p><strong>方向：</strong>能源板块偏多，整体为混合影响。<br><strong>影响周期：</strong>数周至数月。</p><h3>来源与可信度</h3><p><strong>来源：</strong>${report.source}　<strong>可信度：</strong>高<br><a class="text-link" href="${report.url}" target="_blank" rel="noreferrer">查看原文 →</a></p><h3>反向风险</h3><p>${report.risk}</p><div class="callout"><strong>是否值得继续研究：是</strong><p>${report.verdict}</p></div></div></article>`;
}

const latest = document.querySelector('#latest');
if(latest) latest.innerHTML = fullReport(reports[0]);
const recent = document.querySelector('#recent');
if(recent) recent.innerHTML = reports.slice(0,5).map(card).join('');
const history = document.querySelector('#history');
if(history) history.innerHTML = reports.slice(0,5).map(historyItem).join('');
const detail = document.querySelector('#detail');
if(detail){const date = new URLSearchParams(location.search).get('date') || reports[0].date; detail.innerHTML = fullReport(reports.find(r=>r.date===date)||reports[0]);}
