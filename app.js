const fallbackReport = {
  date: '2026-10-05',
  label: '2026年10月5日',
  note: '本期优先收录与能源投资、金融市场、跨境资本和另类资产相关的正式政策或官方文件。拟议规则和征求意见稿均标明了当前状态，不能视为已经生效。',
  policies: [
    {rank:'01',title:'美国拟放宽区间基金的产品结构限制',agency:'美国证券交易委员会（SEC）',date:'2026年10月5日',status:'拟议规则，尚未生效',direction:'潜在偏利好',source:'Federal Register',url:'https://www.federalregister.gov/documents/2026/10/05/2026-20360/interval-fund-modernization-expansion-of-multiple-share-class-to-registered-closed-end-management',facts:'拟调整区间基金的回购机制、流动性管理、多类别份额及费用披露要求。',analysis:'如果最终规则保留较大的产品设计空间，长期限、流动性受控的资产更容易被装入面向合格投资者的基金结构。',impact:'与 GX 的多资产配置、高净值财富管理，以及长期能源基础设施基金产品设计直接相关。',risk:'最终规则可能提高流动性和披露要求；评论期内的文本也可能明显收紧。'},
    {rank:'02',title:'SEC考虑扩大合格投资者认定范围',agency:'美国证券交易委员会（SEC）',date:'2026年10月5日',status:'官方考虑事项，尚未生效',direction:'潜在偏利好，确定性较低',source:'Federal Register',url:'https://www.federalregister.gov/documents/2026/10/05/2026-20311/',facts:'SEC研究将多项专业资格及未来考试纳入合格投资者认定条件。',analysis:'认定范围如果扩大，私募基金、私募信贷、能源基础设施基金和其他另类资产的潜在客户池可能增加。',impact:'可能扩大高净值客户、另类资产和跨境资本配置的潜在覆盖面。',risk:'这只是监管考虑事项，不代表方案一定获批；适当性、反洗钱和跨境销售要求仍然存在。'},
    {rank:'03',title:'印度央行安排2500亿卢比隔夜逆回购操作',agency:'印度储备银行（RBI）',date:'2026年10月5日发布，10月6日执行',status:'已正式公布的流动性操作',direction:'短期偏中性，流动性略偏收紧',source:'Reserve Bank of India',url:'https://www.rbi.org.in/Scripts/BS_PressReleaseDisplay.aspx?prid=63733',facts:'RBI安排1天期可变利率逆回购，金额2500亿印度卢比。',analysis:'这是对银行体系短期流动性的精细调节，不应直接解读为完整货币政策转向。',impact:'重点影响印度货币市场、债券、卢比、股票及相关量化策略的资金成本和波动率。',risk:'单次操作的信号有限，后续操作比公告本身更重要。'},
    {rank:'04',title:'中国拟修订电力并网运行管理规则',agency:'中国国家能源局',date:'2026年9月30日',status:'征求意见稿，尚未正式生效',direction:'暂时不能简单判断',source:'国家能源局',url:'https://www.nea.gov.cn/20260930/43fede537ca048b1a6a51fe0970fb205/c.html',facts:'国家能源局公开征求《电力并网运行管理规定》意见，涉及发电侧、电网侧和并网运行管理。',analysis:'并网和调度规则会直接影响新能源项目的接入节奏、责任边界、结算方式和现金流。',impact:'影响新能源和电力基础设施项目的并网、调度责任、现金流和收益路径。',risk:'征求意见稿可能修改；规则改善也不等于项目收益率必然提高。'},
    {rank:'05',title:'美国能源部推进战略石油储备原油交换',agency:'美国能源部（DOE）',date:'2026年9月29日',status:'已发布招标安排，正在执行',direction:'短期偏空，中期混合',source:'U.S. Department of Energy',url:'https://www.energy.gov/articles/united-states-energy-department-continues-execution-strategic-reserve-release-commitments',facts:'DOE计划最多交换4000万桶战略石油储备原油，同时推进战略储备补充。',analysis:'原油交换会改变市场对近端供应、期限结构和库存的预期。',impact:'重点观察原油、成品油、能源股、期货期限结构和波动率。',risk:'“最多4000万桶”不是实际交付量；地缘政治和全球需求变化可能盖过政策本身。'}
  ]
};

let report = fallbackReport;
let history = [{date: fallbackReport.date, label: fallbackReport.label}];

function card(policy){
  return `<a class="recent-card" href="report.html?date=${report.date}#policy-${policy.rank}"><div><p>${policy.rank} · ${policy.direction}</p><h3>${policy.title}</h3><span class="card-agency">${policy.agency}</span></div><span class="text-link">查看详情 →</span></a>`;
}

function historyItem(item){
  return `<a class="history-item" href="report.html?date=${item.date}"><div><p>${item.label}</p><h2>全球政策与投资影响日报</h2><span>5条政策信息 · 能源、金融与跨境资本</span></div><span class="history-arrow">›</span></a>`;
}

function policyBlock(policy){
  return `<section id="policy-${policy.rank}" class="policy-card"><div class="policy-heading"><span class="policy-rank">${policy.rank}</span><div><h3>${policy.title}</h3><p>${policy.agency}　·　${policy.date}</p></div><span class="direction">${policy.direction}</span></div><div class="policy-meta"><span>${policy.status}</span><span>来源：${policy.source}</span></div><div class="policy-body"><div><strong>政策事实</strong><p>${policy.facts}</p></div><div><strong>分析判断</strong><p>${policy.analysis}</p></div><div><strong>对 GX 的关联</strong><p>${policy.impact}</p></div><div><strong>风险与边界</strong><p>${policy.risk}</p></div></div><a class="source-link" href="${policy.url}" target="_blank" rel="noreferrer">查看官方原文 →</a>${policy.extra?`<p class="extra-source">${policy.extra}</p>`:''}</section>`;
}

function fullReport(data){
  const titles = data.policies.slice(0, 3).map(item => item.title).join('、');
  return `<a class="back-link" href="index.html">← 返回最新日报</a><div class="report-intro"><p class="eyebrow">DAILY POLICY INTELLIGENCE</p><h1>GX Investment 全球政策与投资影响日报</h1><p class="report-date">${data.label}</p><p class="intro-note"><strong>说明：</strong>${data.note}</p></div><div class="report-summary"><h2>今日摘要</h2><p>本期重点关注${titles}等政策变化，按政策事实与分析判断分开呈现，并标明确定性、影响路径及需要继续核实的边界。</p></div><div class="policy-list">${data.policies.map(policyBlock).join('')}</div><section class="report-section closing-section"><div class="report-content"><h2>对 GX 业务的影响排序</h2><ol><li><strong>高度相关：</strong>直接影响产品结构、客户覆盖或能源项目执行条件的政策。</li><li><strong>中度相关：</strong>通过资金价格、流动性或市场预期传导的政策。</li><li><strong>观察事项：</strong>需要等后续执行数据确认方向的政策。</li></ol><h2>风险与待核实事项</h2><p>拟议规则、征求意见稿和单次流动性操作都不等同于最终政策效果；实际影响还要通过价格、融资、项目执行和市场流动性验证。</p><h2>下一步观察</h2><p>继续跟踪各项政策的最终文本、执行数据、市场定价和对项目现金流的实际影响。</p></div></section>`;
}

function render(detailReport = report){
  const latest = document.querySelector('#latest');
  if(latest) latest.innerHTML = fullReport(report);
  const recent = document.querySelector('#recent');
  if(recent) recent.innerHTML = report.policies.map(card).join('');
  const historyNode = document.querySelector('#history');
  if(historyNode) historyNode.innerHTML = history.map(historyItem).join('');
  const detail = document.querySelector('#detail');
  if(detail) detail.innerHTML = fullReport(detailReport);
}

async function readJson(path){
  const response = await fetch(path, {cache:'no-store'});
  if(!response.ok) throw new Error(`${path} unavailable`);
  return response.json();
}

async function start(){
  try { report = await readJson('reports/latest.json'); } catch (_) {}
  try {
    const loadedHistory = await readJson('reports/history.json');
    if(Array.isArray(loadedHistory) && loadedHistory.length) history = loadedHistory;
  } catch (_) {}
  render();

  const detailNode = document.querySelector('#detail');
  const requestedDate = new URLSearchParams(location.search).get('date');
  if(detailNode && requestedDate && requestedDate !== report.date){
    try {
      const archived = await readJson(`reports/${requestedDate}.json`);
      render(archived);
    } catch (_) {
      render(report);
    }
  }
}

start();
