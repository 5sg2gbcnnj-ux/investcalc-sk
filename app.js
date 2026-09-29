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
    const yearsValue=document.querySelector('#yearsValue'); if(yearsValue) yearsValue.textContent=`${y} ${y===1?'rok':(y<5?'roky':'rokov')}`; document.querySelectorAll('[data-year]').forEach(x=>x.textContent=y);
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
  const initial=document.querySelector('#etfInitial');
  if(!initial)return;

  const monthly=document.querySelector('#etfMonthly');
  const rate=document.querySelector('#etfRate');
  const fee=document.querySelector('#etfFee');
  const years=document.querySelector('#etfYears');
  const select=document.querySelector('#etfSelect');
  const etfName=document.querySelector('#selectedEtfName');
  const etfIsin=document.querySelector('#selectedEtfIsin');
  const etfTicker=document.querySelector('#selectedEtfTicker');
  const etfTer=document.querySelector('#selectedEtfTer');
  const etfLink=document.querySelector('#selectedEtfLink');

  [initial,monthly].forEach(moneyInput);

  const ETF_DATA={
    VWRA:{
      name:'Vanguard FTSE All-World UCITS ETF (USD) Accumulating',
      isin:'IE00BK5BQT80', ticker:'VWRA', ter:0.14, distribution:'Akumulačný',
      url:'https://www.justetf.com/en-be/etf-profile.html?isin=IE00BK5BQT80'
    },
    IWDA:{
      name:'iShares Core MSCI World UCITS ETF USD (Acc)',
      isin:'IE00B4L5Y983', ticker:'IWDA', ter:0.20, distribution:'Akumulačný',
      url:'https://www.justetf.com/en-be/etf-profile.html?isin=IE00B4L5Y983'
    },
    SXR8:{
      name:'iShares Core S&P 500 UCITS ETF USD (Acc)',
      isin:'IE00B5BMR087', ticker:'SXR8', ter:0.07, distribution:'Akumulačný',
      url:'https://www.justetf.com/en/etf-profile.html?isin=IE00B5BMR087'
    },
    VUAA:{
      name:'Vanguard S&P 500 UCITS ETF (USD) Accumulating',
      isin:'IE00BFMXXD54', ticker:'VUAA', ter:0.07, distribution:'Akumulačný',
      url:'https://www.justetf.com/en-be/etf-profile.html?isin=IE00BFMXXD54'
    },
    EIMI:{
      name:'iShares Core MSCI Emerging Markets IMI UCITS ETF (Acc)',
      isin:'IE00BKM4GZ66', ticker:'EIMI', ter:0.18, distribution:'Akumulačný',
      url:'https://www.justetf.com/en-be/etf-profile.html?isin=IE00BKM4GZ66'
    },
    IMEU:{
      name:'iShares Core MSCI Europe UCITS ETF EUR (Acc)',
      isin:'IE00B4K48X80', ticker:'IMEU', ter:0.12, distribution:'Akumulačný',
      url:'https://www.justetf.com/en-be/etf-profile.html?isin=IE00B4K48X80'
    },
    EQQQ:{
      name:'Invesco EQQQ Nasdaq-100 UCITS ETF',
      isin:'IE0032077012', ticker:'EQQQ', ter:0.30, distribution:'Distribučný',
      url:'https://www.justetf.com/en-be/etf-profile.html?isin=IE0032077012'
    },
    EQEU:{
      name:'Invesco Nasdaq-100 UCITS ETF EUR Hedged',
      isin:'IE00BYVTMS52', ticker:'EQEU', ter:0.35, distribution:'Akumulačný',
      url:'https://www.justetf.com/en-be/etf-profile.html?isin=IE00BYVTMS52'
    },
    VDEV:{
      name:'Vanguard FTSE Developed World UCITS ETF',
      isin:'IE00BKX55T58', ticker:'VDEV', ter:0.12, distribution:'Distribučný',
      url:'https://www.justetf.com/en-be/etf-profile.html?isin=IE00BKX55T58'
    },
    VDEM:{
      name:'Vanguard FTSE Emerging Markets UCITS ETF',
      isin:'IE00B3VVMM84', ticker:'VDEM', ter:0.17, distribution:'Distribučný',
      url:'https://www.justetf.com/en-be/etf-profile.html?isin=IE00B3VVMM84'
    }
  };

  function optionLabel(key){
    const item=ETF_DATA[key];
    return `${item.ticker} – ${item.name}`;
  }

  function fillETFSelect(target){
    if(!target)return;
    target.innerHTML='';
    Object.keys(ETF_DATA).forEach((key)=>{
      const option=document.createElement('option');
      option.value=key;
      option.textContent=optionLabel(key);
      target.appendChild(option);
    });
  }

  Object.keys(ETF_DATA).forEach((key)=>{
    const option=document.createElement('option');
    option.value=key;
    option.textContent=optionLabel(key);
    select.appendChild(option);
  });

  const compareSelects=[1,2,3,4,5]
    .map(i=>document.querySelector(`#compare${i}`))
    .filter(Boolean);

  compareSelects.forEach(fillETFSelect);

  if(compareSelects.length===5){
    ['VWRA','IWDA','SXR8','VUAA','EIMI'].forEach((key,i)=>{
      compareSelects[i].value=key;
    });
  }

  function updateETFMeta(){
    const item=ETF_DATA[select.value] || ETF_DATA.VWRA;
    fee.value=item.ter.toFixed(2);
    etfName.textContent=item.name;
    etfIsin.textContent=item.isin;
    etfTicker.textContent=item.ticker;
    etfTer.textContent=`${item.ter.toFixed(2)} %`;
    etfLink.href=item.url;
  }

  let chart;
  let compareChart;

  function readInputs(){
    const pv=Number(initial.value.replace(/\s/g,''))||0;
    const pm=Number(monthly.value.replace(/\s/g,''))||0;
    const gross=Number(rate.value)||0;
    const f=Number(fee.value)||0;
    const y=Math.max(1,Math.min(60,Number(years.value)||1));
    return {pv,pm,gross,f,y};
  }

  function calculateETF(key, inputs){
    const item=ETF_DATA[key];
    const sGross=investmentSchedule(inputs.pv,inputs.pm,inputs.gross,inputs.y);
    const sNet=investmentSchedule(inputs.pv,inputs.pm,inputs.gross-item.ter,inputs.y);
    const endGross=sGross.values.at(-1);
    const endNet=sNet.values.at(-1);
    const paid=inputs.pv+inputs.pm*inputs.y*12;
    return {item,sGross,sNet,endGross,endNet,paid,feeCost:endGross-endNet};
  }

  function calc(){
    const inputs=readInputs();
    const result=calculateETF(select.value || 'VWRA',inputs);

    document.querySelector('#etfGross').textContent=EUR(result.endGross);
    document.querySelector('#etfNet').textContent=EUR(result.endNet);
    document.querySelector('#etfFeeCost').textContent=EUR(result.feeCost);
    document.querySelector('#etfPaid').textContent=EUR(result.paid);

    const ctx=document.querySelector('#etfChart');
    if(ctx){
      if(chart)chart.destroy();
      chart=new Chart(ctx,{
        type:'line',
        data:{
          labels:result.sGross.values.map((_,i)=>`Rok ${i}`),
          datasets:[
            {
              label:'Bez poplatku',
              data:result.sGross.values,
              borderColor:'#7dc6ff',
              backgroundColor:'transparent',
              tension:.22,
              pointRadius:0,
              borderWidth:2.5
            },
            {
              label:'Po poplatku',
              data:result.sNet.values,
              borderColor:'#2f81f7',
              backgroundColor:'transparent',
              tension:.22,
              pointRadius:0,
              borderWidth:3
            }
          ]
        },
        options:{
          responsive:true,
          maintainAspectRatio:false,
          interaction:{mode:'index',intersect:false},
          plugins:{
            legend:{labels:{color:'#ffffff',font:{size:13}}},
            tooltip:{callbacks:{label:c=>`${c.dataset.label}: ${EUR(c.parsed.y)}`}}
          },
          scales:{
            x:{ticks:{color:'#b7c2cf'},grid:{color:'rgba(255,255,255,.06)'}},
            y:{ticks:{color:'#b7c2cf',callback:v=>NUM(v)},grid:{color:'rgba(255,255,255,.06)'}}
          }
        }
      });
    }

    renderComparison(inputs);
  }

  function renderComparison(inputs){
    const keys=compareSelects.map(s=>s.value);
    const results=keys.map(key=>calculateETF(key,inputs));
    const maxValue=Math.max(...results.map(r=>r.endNet));
    const rows=document.querySelector('#compareRows');

    if(rows){
      rows.innerHTML='';
      results.forEach(result=>{
        const diff=maxValue-result.endNet;
        const tr=document.createElement('tr');
        tr.innerHTML=`
          <td><a href="${result.item.url}" target="_blank" rel="noopener noreferrer">${result.item.name}</a></td>
          <td>${result.item.ticker}</td>
          <td>${result.item.isin}</td>
          <td>${result.item.ter.toFixed(2)} %</td>
          <td>${result.item.distribution}</td>
          <td>${EUR(result.endNet)}</td>
          <td>${EUR(result.paid)}</td>
          <td>${diff === 0 ? '—' : '−' + EUR(diff)}</td>
        `;
        rows.appendChild(tr);
      });
    }

    const ctx=document.querySelector('#etfCompareChart');
    if(!ctx)return;

    if(compareChart)compareChart.destroy();

    const datasets=results.map((result,i)=>({
      label:result.item.ticker,
      data:result.sNet.values,
      borderColor:['#2f81f7','#7dc6ff','#ff5b6e','#16c784','#ffd166'][i%5],
      backgroundColor:'transparent',
      tension:.22,
      pointRadius:0,
      borderWidth:2.5,
      fill:false
    }));

    compareChart=new Chart(ctx,{
      type:'line',
      data:{
        labels:results[0].sNet.values.map((_,i)=>`Rok ${i}`),
        datasets
      },
      options:{
        responsive:true,
        maintainAspectRatio:false,
        interaction:{mode:'index',intersect:false},
        plugins:{
          legend:{labels:{color:'#ffffff',font:{size:13}}},
          tooltip:{callbacks:{label:c=>`${c.dataset.label}: ${EUR(c.parsed.y)}`}}
        },
        scales:{
          x:{ticks:{color:'#b7c2cf'},grid:{color:'rgba(255,255,255,.06)'}},
          y:{ticks:{color:'#b7c2cf',callback:v=>NUM(v)},grid:{color:'rgba(255,255,255,.06)'}}
        }
      }
    });
  }

  select.addEventListener('change',()=>{
    updateETFMeta();
    calc();
  });

  compareSelects.forEach(s=>s.addEventListener('change',()=>renderComparison(readInputs())));
  [initial,monthly,rate,fee,years].forEach(el=>el.addEventListener('input',calc));

  updateETFMeta();
  calc();
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
