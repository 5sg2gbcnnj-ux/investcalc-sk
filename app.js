const EUR = n => new Intl.NumberFormat('sk-SK',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
const NUM = n => new Intl.NumberFormat('sk-SK',{maximumFractionDigits:0}).format(n);
const pct = n => `${Number(n).toFixed(1)} %`;
const monthlyRate = annual => Math.pow(1 + annual/100, 1/12) - 1;

function investmentSchedule(initial, monthly, annual, years){
  const r = monthlyRate(annual), values=[initial], contributed=[initial];
  let value=initial, paid=initial;
  for(let m=1;m<=years*12;m++){
    value *= (1+r);
    value += monthly;
    paid += monthly;
    if(m%12===0){values.push(value); contributed.push(paid)}
  }
  return {values,contributed};
}

function setupNav(){
  const page=document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===page)a.classList.add('active')});
}

function moneyInput(el){
  if(!el)return;
  el.addEventListener('blur',()=>{let v=el.value.replace(/\s/g,'').replace(',','.'); if(v!==''&&!isNaN(v)) el.value=NUM(Number(v));});
}

function initInvestment(){
  const initial=document.querySelector('#initial'), monthly=document.querySelector('#monthly'), years=document.querySelector('#years');
  const enabled=document.querySelector('#monthlyEnabled'), r1=document.querySelector('#r1'), r2=document.querySelector('#r2'), r3=document.querySelector('#r3');
  if(!initial)return;
  [initial,monthly].forEach(moneyInput);
  const wrap=document.querySelector('#monthlyWrap');
  enabled.addEventListener('change',()=>wrap.hidden=!enabled.checked);
  wrap.hidden=!enabled.checked;
  const canvas=document.querySelector('#investmentChart');
  let chart;
  function render(){
    const init=Number(initial.value.replace(/\s/g,''))||0;
    const mon=enabled.checked?(Number(monthly.value.replace(/\s/g,''))||0):0;
    const y=Number(years.value), rates=[Number(r1.value),Number(r2.value),Number(r3.value)];
    const schedules=rates.map(rate=>investmentSchedule(init,mon,rate,y));
    const labels=Array.from({length:y+1},(_,i)=>`Rok ${i}`);
    const datasets=[
      {label:'Scenár 1',data:schedules[0].values,borderColor:'#2f81f7'},
      {label:'Scenár 2',data:schedules[1].values,borderColor:'#7dc6ff'},
      {label:'Scenár 3',data:schedules[2].values,borderColor:'#ff5b62'},
      {label:'Vložený kapitál',data:schedules[0].contributed,borderColor:'#ff9da3',borderDash:[7,7]}
    ].map(d=>({...d,tension:.22,pointRadius:0,borderWidth:2.5,fill:false}));
    if(chart)chart.destroy();
    chart=new Chart(canvas,{type:'line',data:{labels,datasets},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{labels:{color:'#fff',font:{size:13}}},tooltip:{mode:'index',intersect:false,callbacks:{label:ctx=>`${ctx.dataset.label}: ${EUR(ctx.parsed.y)}`}}},scales:{x:{ticks:{color:'#b7c2cf'},grid:{color:'rgba(255,255,255,.06)'}},y:{ticks:{color:'#b7c2cf',callback:v=>NUM(v)},grid:{color:'rgba(255,255,255,.06)'}}}}});
    document.querySelectorAll('[data-year]').forEach(x=>x.textContent=y);
    document.querySelector('#m1').textContent=EUR(schedules[0].values.at(-1));
    document.querySelector('#m2').textContent=EUR(schedules[1].values.at(-1));
    document.querySelector('#m3').textContent=EUR(schedules[2].values.at(-1));
    const total=init+mon*y*12;
    document.querySelector('#s1').textContent=`Zisk ${EUR(schedules[0].values.at(-1)-total)}`;
    document.querySelector('#s2').textContent=`Zisk ${EUR(schedules[1].values.at(-1)-total)}`;
    document.querySelector('#s3').textContent=`Zisk ${EUR(schedules[2].values.at(-1)-total)}`;
    const tbody=document.querySelector('#yearRows'); tbody.innerHTML='';
    for(let i=0;i<=y;i++){
      tbody.insertAdjacentHTML('beforeend',`<tr><td>${i}</td><td>${EUR(schedules[0].values[i])}</td><td>${EUR(schedules[1].values[i])}</td><td>${EUR(schedules[2].values[i])}</td><td>${EUR(schedules[0].contributed[i])}</td></tr>`)
    }
  }
  [initial,monthly,years,r1,r2,r3].forEach(el=>el.addEventListener('input',render));
  render();
}

function initCompound(){
  const initial=document.querySelector('#ciInitial'); if(!initial)return;
  const rate=document.querySelector('#ciRate'), years=document.querySelector('#ciYears'), monthly=document.querySelector('#ciMonthly');
  [initial,monthly].forEach(moneyInput);
  function render(){
    const pv=Number(initial.value.replace(/\s/g,''))||0, pm=Number(monthly.value.replace(/\s/g,''))||0, r=Number(rate.value)||0, y=Number(years.value)||0;
    const s=investmentSchedule(pv,pm,r,y), total=pv+pm*y*12, end=s.values.at(-1);
    document.querySelector('#ciFinal').textContent=EUR(end); document.querySelector('#ciPaid').textContent=EUR(total); document.querySelector('#ciGain').textContent=EUR(end-total); document.querySelector('#ciMultiple').textContent=(total? (end/total).toFixed(2)+'x':'0x');
    const ctx=document.querySelector('#compoundChart'); if(window.ciChart)window.ciChart.destroy();
    window.ciChart=new Chart(ctx,{type:'line',data:{labels:s.values.map((_,i)=>`Rok ${i}`),datasets:[{label:'Hodnota investície',data:s.values,borderColor:'#2f81f7',tension:.22,pointRadius:0,fill:false,borderWidth:3}]},options:{plugins:{legend:{labels:{color:'#fff'}},tooltip:{callbacks:{label:c=>EUR(c.parsed.y)}}},scales:{x:{ticks:{color:'#b7c2cf'}},y:{ticks:{color:'#b7c2cf',callback:v=>NUM(v)},grid:{color:'rgba(255,255,255,.06)'}}}}});
  }
  [initial,monthly,rate,years].forEach(el=>el.addEventListener('input',render)); render();
}

function initETF(){
  const initial=document.querySelector('#etfInitial'); if(!initial)return;
  const monthly=document.querySelector('#etfMonthly'), rate=document.querySelector('#etfRate'), fee=document.querySelector('#etfFee'), years=document.querySelector('#etfYears');
  [initial,monthly].forEach(moneyInput);
  function calc(){
    const pv=Number(initial.value.replace(/\s/g,''))||0, pm=Number(monthly.value.replace(/\s/g,''))||0, gross=Number(rate.value)||0, f=Number(fee.value)||0, y=Number(years.value)||0;
    const sGross=investmentSchedule(pv,pm,gross,y), sNet=investmentSchedule(pv,pm,gross-f,y), endG=sGross.values.at(-1), endN=sNet.values.at(-1), paid=pv+pm*y*12;
    document.querySelector('#etfGross').textContent=EUR(endG); document.querySelector('#etfNet').textContent=EUR(endN); document.querySelector('#etfFeeCost').textContent=EUR(endG-endN);
    const ctx=document.querySelector('#etfChart'); if(window.etfChart)window.etfChart.destroy(); window.etfChart=new Chart(ctx,{type:'line',data:{labels:sGross.values.map((_,i)=>`Rok ${i}`),datasets:[{label:'Bez poplatku',data:sGross.values,borderColor:'#7dc6ff',tension:.22,pointRadius:0,borderWidth:2.5},{label:'Po poplatku',data:sNet.values,borderColor:'#2f81f7',tension:.22,pointRadius:0,borderWidth:3}]},options:{plugins:{legend:{labels:{color:'#fff'}},tooltip:{callbacks:{label:c=>`${c.dataset.label}: ${EUR(c.parsed.y)}`}}},scales:{x:{ticks:{color:'#b7c2cf'}},y:{ticks:{color:'#b7c2cf',callback:v=>NUM(v)},grid:{color:'rgba(255,255,255,.06)'}}}}});
  }
  [initial,monthly,rate,fee,years].forEach(el=>el.addEventListener('input',calc));calc();
}

function initInflation(){
  const amount=document.querySelector('#inflAmount'); if(!amount)return; moneyInput(amount);
  const inf=document.querySelector('#inflRate'), years=document.querySelector('#inflYears');
  function render(){const a=Number(amount.value.replace(/\s/g,''))||0,r=Number(inf.value)||0,y=Number(years.value)||0; const real=a/Math.pow(1+r/100,y); document.querySelector('#inflFuture').textContent=EUR(real); document.querySelector('#inflLoss').textContent=EUR(a-real); document.querySelector('#inflPct').textContent=`${a?((1-real/a)*100).toFixed(1):0} %`;}
  [amount,inf,years].forEach(el=>el.addEventListener('input',render));render();
}

function initFire(){
  const current=document.querySelector('#fireCurrent'); if(!current)return; [current,document.querySelector('#fireMonthly'),document.querySelector('#fireExpenses')].forEach(moneyInput);
  const monthly=document.querySelector('#fireMonthly'), expenses=document.querySelector('#fireExpenses'), ret=document.querySelector('#fireReturn'), swr=document.querySelector('#fireSWR');
  function render(){
    const c=Number(current.value.replace(/\s/g,''))||0, m=Number(monthly.value.replace(/\s/g,''))||0, e=Number(expenses.value.replace(/\s/g,''))||0, r=Number(ret.value)||0, s=Number(swr.value)||4; const target=e/(s/100);
    let val=c, months=0; const mr=monthlyRate(r); while(val<target && months<1200){val*=1+mr;val+=m;months++;} const years=months/12;
    document.querySelector('#fireTarget').textContent=EUR(target); document.querySelector('#fireYears').textContent=months>=1200?'—':years.toFixed(1)+' r.'; document.querySelector('#fireGap').textContent=EUR(Math.max(0,target-c));
  }
  [current,monthly,expenses,ret,swr].forEach(el=>el.addEventListener('input',render));render();
}

function initRetirement(){
  const age=document.querySelector('#retAge'); if(!age)return; const retire=document.querySelector('#retRetire'), savings=document.querySelector('#retSavings'), monthly=document.querySelector('#retMonthly'), rate=document.querySelector('#retReturn'); moneyInput(savings);moneyInput(monthly);
  function render(){const a=Number(age.value)||0, ra=Number(retire.value)||0, s=Number(savings.value.replace(/\s/g,''))||0,m=Number(monthly.value.replace(/\s/g,''))||0,r=Number(rate.value)||0,y=Math.max(0,ra-a);const sch=investmentSchedule(s,m,r,y),end=sch.values.at(-1), income=end*.04/12;document.querySelector('#retYears').textContent=y;document.querySelector('#retValue').textContent=EUR(end);document.querySelector('#retIncome').textContent=EUR(income);}
  [age,retire,savings,monthly,rate].forEach(el=>el.addEventListener('input',render));render();
}

document.addEventListener('DOMContentLoaded',()=>{setupNav();initInvestment();initCompound();initETF();initInflation();initFire();initRetirement();});
