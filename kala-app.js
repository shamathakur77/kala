// ─── LANG TOGGLE ────────────────────────────────────
function setLang(lang){
  currentLang=lang;
  document.querySelectorAll('.en-text').forEach(el=>el.classList.toggle('hidden',lang==='mr'));
  document.querySelectorAll('.mr-text').forEach(el=>el.classList.toggle('hidden',lang==='en'));
  document.getElementById('btn-en').classList.toggle('active',lang==='en');
  document.getElementById('btn-mr').classList.toggle('active',lang==='mr');
}

// ─── TAB SWITCHING ──────────────────────────────────
function showTab(name){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('panel-'+name).classList.add('active');
  document.getElementById('tab-'+name).classList.add('active');
}

// ─── STARS ──────────────────────────────────────────
(function(){
  const sf=document.getElementById('stars');
  for(let i=0;i<80;i++){
    const s=document.createElement('div');s.className='star';
    const sz=Math.random()*2.2+0.4;
    s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--d:${2+Math.random()*4}s;animation-delay:${Math.random()*5}s`;
    sf.appendChild(s);
  }
})();

// ─── LUNAR BAR ──────────────────────────────────────
function buildLunarBar(el,idx){
  el.innerHTML='<div class="phase-dot"></div>';
  for(let i=0;i<15;i++){
    const s=document.createElement('div');
    s.className='l-seg'+(i<idx?' lit':'');
    el.appendChild(s);
  }
}

// ─── RITU ───────────────────────────────────────────
let savedRituPk='';
let savedRituDay=0;
let savedRituP=null;

function genRitu(){
  const s=document.getElementById('r-start').value;
  const len=parseInt(document.getElementById('r-len').value)||28;
  if(!s){alert('Please enter your last period start date.');return;}
  const day=calcDay(s,len);
  const pk=getPhase(day,len);
  const p=PD[pk];
  const lunar=getLunar();
  savedRituPk=pk;savedRituDay=day;savedRituP=p;

  document.getElementById('r-phasebg').style.background=p.bg;
  document.getElementById('r-glyph').textContent=p.g;
  document.getElementById('r-tag').textContent=`Day ${day} · ${p.tag}`;
  document.getElementById('r-tag-mr').textContent=`दिवस ${day} · ${p.tagMr}`;
  document.getElementById('r-name').textContent=p.name;
  document.getElementById('r-name-mr').textContent=p.nameMr;
  buildLunarBar(document.getElementById('r-lunar'),lunar.idx);
  document.getElementById('r-essence').textContent=p.essence;
  document.getElementById('r-essence-mr').textContent=p.essenceMr;

  // orbits
  const og=document.getElementById('r-orbits');
  og.innerHTML=p.orbits.map(o=>`
    <div class="orbit-pill">
      <span class="op-icon">${o.icon}</span>
      <div class="op-label en-text${currentLang==='mr'?' hidden':''}">${o.label}</div>
      <div class="op-label op-label-mr mr-text${currentLang==='en'?' hidden':''}">${o.labelMr}</div>
      <div class="op-val en-text${currentLang==='mr'?' hidden':''}">${o.val}</div>
      <div class="op-val op-val-mr mr-text${currentLang==='en'?' hidden':''}">${o.valMr}</div>
    </div>`).join('');

  // actions
  const ac=document.getElementById('r-actions');
  const acts=currentLang==='mr'?p.actionsMr:p.actions;
  ac.innerHTML=p.actions.map((_,i)=>`
    <div class="action-item">
      <span class="action-num">${String(i+1).padStart(2,'0')}</span>
      <span class="action-text en-text${currentLang==='mr'?' hidden':''}">${p.actions[i]}</span>
      <span class="action-text action-text-mr mr-text${currentLang==='en'?' hidden':''}">${p.actionsMr[i]}</span>
    </div>`).join('');

  // wisdom
  const wd=document.getElementById('r-wisdom');
  wd.innerHTML=p.wisdoms.map((w,i)=>`
    <div class="wa">
      <button class="wa-trigger" onclick="toggleWa('wa${i}')" id="wabtn${i}">
        <span class="wa-glyph">${w.g}</span>
        <div>
          <div class="wa-system en-text${currentLang==='mr'?' hidden':''}">${w.sys}</div>
          <div class="wa-system wa-system-mr mr-text${currentLang==='en'?' hidden':''}">${w.sysMr}</div>
          <div class="wa-headline en-text${currentLang==='mr'?' hidden':''}">${w.head}</div>
          <div class="wa-headline wa-headline-mr mr-text${currentLang==='en'?' hidden':''}">${w.headMr}</div>
        </div>
        <span class="wa-arrow">▾</span>
      </button>
      <div class="wa-body" id="wa${i}">
        <div class="wa-body-text en-text${currentLang==='mr'?' hidden':''}">${w.body}</div>
        <div class="wa-body-text wa-body-text-mr mr-text${currentLang==='en'?' hidden':''}">${w.bodyMr}</div>
        <div class="wa-deeper en-text${currentLang==='mr'?' hidden':''}">${w.deeper}</div>
        <div class="wa-deeper wa-deeper-mr mr-text${currentLang==='en'?' hidden':''}">${w.deeperMr}</div>
      </div>
    </div>`).join('');

  // archetype
  const arch=document.getElementById('r-arch');
  const tags=currentLang==='mr'?p.archTagsMr:p.archTags;
  arch.innerHTML=`
    <div class="arch-head en-text${currentLang==='mr'?' hidden':''}">${p.archetype}</div>
    <div class="arch-head arch-head-mr mr-text${currentLang==='en'?' hidden':''}">${p.archetypeMr}</div>
    <div class="arch-body en-text${currentLang==='mr'?' hidden':''}">${p.archBody}</div>
    <div class="arch-body arch-body-mr mr-text${currentLang==='en'?' hidden':''}">${p.archBodyMr}</div>
    <div class="arch-tags">
      ${p.archTags.map(t=>`<span class="arch-tag en-text${currentLang==='mr'?' hidden':''}">${t}</span>`).join('')}
      ${p.archTagsMr.map(t=>`<span class="arch-tag arch-tag-mr mr-text${currentLang==='en'?' hidden':''}">${t}</span>`).join('')}
    </div>`;

  // tensions
  const tc=document.getElementById('r-tensions');
  tc.innerHTML=p.tensions.map(t=>`
    <div class="tension-row">
      <span class="t-label right en-text${currentLang==='mr'?' hidden':''}">${t.a}</span>
      <span class="t-label right t-label-mr mr-text${currentLang==='en'?' hidden':''}">${t.aMr}</span>
      <div class="t-track"><div class="t-fill" style="width:${t.pct}%"></div></div>
      <span class="t-label en-text${currentLang==='mr'?' hidden':''}">${t.b}</span>
      <span class="t-label t-label-mr mr-text${currentLang==='en'?' hidden':''}">${t.bMr}</span>
    </div>`).join('');

  document.getElementById('ritu-output').classList.remove('hidden');
  setTimeout(()=>document.getElementById('ritu-output').scrollIntoView({behavior:'smooth'}),80);
}

function toggleWa(id){
  const b=document.getElementById(id);
  const btn=document.getElementById('btn'+id);
  const open=b.classList.contains('open');
  document.querySelectorAll('.wa-body').forEach(x=>x.classList.remove('open'));
  document.querySelectorAll('.wa-trigger').forEach(x=>x.classList.remove('open'));
  if(!open){b.classList.add('open');btn.classList.add('open');}
}

function copyRituReading(){
  if(!savedRituP)return;
  const p=savedRituP,mr=currentLang==='mr';
  const name=mr?p.nameMr:p.name;
  const essence=mr?p.essenceMr:p.essence;
  const actions=(mr?p.actionsMr:p.actions).map((a,i)=>`${i+1}. ${a}`).join('\n');
  navigator.clipboard.writeText(`${name} — Day ${savedRituDay}\n\n${essence}\n\n${actions}\n\n— KALA`).then(()=>toast('ritu-toast',mr?'कॉपी झाले':'copied'));
}

function copyRituCaption(){
  if(!savedRituP)return;
  const p=savedRituP,mr=currentLang==='mr';
  const name=mr?p.nameMr:p.name;
  const essence=mr?p.essenceMr:p.essence;
  const text=mr
    ?`${name}.\n\n${essence}\n\nकबाला. आयुर्वेद. युंग. मानव डिझाइन. आदिवासी ज्ञान. सर्व एकाच गोष्टीकडे निर्देश करतात.\n\nतुमचे शरीर एक समस्या नाही. ती एक प्रणाली आहे.\n\n#पाळीसमक्रमण #प्राचीनज्ञान #आयुर्वेद #KALA`
    :`${name}.\n\n${essence}\n\nKabbalah. Ayurveda. Jungian archetypes. Human Design. Indigenous wisdom. All pointing at the same thing.\n\nYour body is not a problem to solve.\n\n#cyclesyncing #ancientwisdom #ayurveda #humandesign #KALA`;
  navigator.clipboard.writeText(text).then(()=>toast('ritu-toast',mr?'कॅप्शन कॉपी झाले':'caption copied'));
}

// ─── SHARE CARD ─────────────────────────────────────
let savedCardPk='',savedCardP=null,savedCardDay=0;

function genCard(){
  const s=document.getElementById('s-start').value;
  const len=parseInt(document.getElementById('s-len').value)||28;
  if(!s){alert('Enter your last period start date.');return;}
  const day=calcDay(s,len);
  const pk=getPhase(day,len);
  const p=PD[pk];
  const lunar=getLunar();
  const mr=currentLang==='mr';
  savedCardPk=pk;savedCardP=p;savedCardDay=day;

  const dateStr=new Date().toLocaleDateString(mr?'mr-IN':'en-GB',{day:'numeric',month:'long',year:'numeric'});
  document.getElementById('sc-bg').style.background=p.bg;
  document.getElementById('sc-day').textContent=`${dateStr} · ${mr?'दिवस':'Day'} ${day}`;
  document.getElementById('sc-moon').textContent=p.g;
  document.getElementById('sc-phase').textContent=p.name;
  document.getElementById('sc-phase-mr').textContent=p.nameMr;
  document.getElementById('sc-sub').textContent=mr?`${lunar.nMr} · ${p.orbits[1].valMr} ऋतू`:`${lunar.n} · ${p.orbits[1].val} season`;
  document.getElementById('sc-essence').textContent=p.essence;
  document.getElementById('sc-essence-mr').textContent=p.essenceMr;
  document.getElementById('sc-arch').textContent=p.archetype;
  document.getElementById('sc-arch-mr').textContent=p.archetypeMr;
  document.getElementById('sc-handle').textContent=document.getElementById('s-handle').value.trim()||'kala.oracle';

  const tags=mr?p.archTagsMr:p.archTags;
  document.getElementById('sc-tags').innerHTML=tags.slice(0,4).map(t=>`<span class="sc-tag">${t}</span>`).join('');

  const acts=mr?p.actionsMr:p.actions;
  document.getElementById('sc-actions').innerHTML=acts.slice(0,2).map(a=>`<div class="sc-action"><div class="sc-dot"></div><span>${a}</span></div>`).join('');

  document.getElementById('cardWrap').classList.remove('hidden');
  setTimeout(()=>document.getElementById('cardWrap').scrollIntoView({behavior:'smooth'}),80);
}

function copyCardText(){
  if(!savedCardP)return;
  const p=savedCardP,mr=currentLang==='mr';
  const name=mr?p.nameMr:p.name;
  const essence=mr?p.essenceMr:p.essence;
  const acts=(mr?p.actionsMr:p.actions).map(a=>'— '+a).join('\n');
  navigator.clipboard.writeText(`${name}\n\n${essence}\n\n${acts}\n\n— KALA`).then(()=>toast('card-toast',mr?'कॉपी झाले':'copied'));
}

function copyCardCaption(){
  if(!savedCardP)return;
  const p=savedCardP,mr=currentLang==='mr';
  const name=mr?p.nameMr:p.name;
  const essence=mr?p.essenceMr:p.essence;
  const text=mr
    ?`${name}.\n\n${essence}\n\nकबाला. आयुर्वेद. युंग. मानव डिझाइन.\n\n#पाळीसमक्रमण #प्राचीनज्ञान #आयुर्वेद #KALA`
    :`${name}.\n\n${essence}\n\nKabbalah. Ayurveda. Jung. Human Design.\n\n#cyclesyncing #ancientwisdom #KALA`;
  navigator.clipboard.writeText(text).then(()=>toast('card-toast',mr?'कॉपी झाले':'copied'));
}

// ─── WEEK RITUAL ─────────────────────────────────────
function genWeek(){
  const s=document.getElementById('w-start').value;
  const len=parseInt(document.getElementById('w-len').value)||28;
  if(!s){alert('Enter your last period start date.');return;}
  const mr=currentLang==='mr';
  const today=new Date();
  const grid=document.getElementById('weekGrid');
  grid.innerHTML='';

  for(let i=0;i<7;i++){
    const d=new Date(today);d.setDate(today.getDate()+i);d.setHours(0,0,0,0);
    const st=new Date(s);st.setHours(0,0,0,0);
    let diff=Math.floor((d-st)/864e5)+1;if(diff<1)diff=1;
    const day=((diff-1)%len)+1;
    const pk=getPhase(day,len);
    const p=PD[pk];
    const dayLabel=i===0?(mr?'आज':'Today'):i===1?(mr?'उद्या':'Tomorrow'):(mr?DAYS_MR[d.getDay()]:DAYS_EN[d.getDay()]);
    const dateStr=d.toLocaleDateString(mr?'mr-IN':'en-GB',{day:'numeric',month:'short'});
    const moon=MOONS[Math.floor((i/7)*7)];
    const isToday=i===0;

    const card=document.createElement('div');
    card.className='day-card'+(isToday?' expanded':'');
    card.innerHTML=`
      <div class="day-header" onclick="toggleDay(this)">
        <div class="day-num">${String(day).padStart(2,'0')}</div>
        <div class="day-info">
          <div class="day-name en-text${mr?' hidden':''}">${dayLabel} · ${dateStr}</div>
          <div class="day-name day-name-mr mr-text${!mr?' hidden':''}">${dayLabel} · ${dateStr}</div>
          <div class="day-phase-label en-text${mr?' hidden':''}">${p.name.replace('The ','')}</div>
          <div class="day-phase-label day-phase-label-mr mr-text${!mr?' hidden':''}">${p.nameMr}</div>
        </div>
        <div class="day-moon">${moon}</div>
      </div>
      <div class="day-body${isToday?' show':''}">
        <div class="day-note en-text${mr?' hidden':''}">${p.dayNote}</div>
        <div class="day-note day-note-mr mr-text${!mr?' hidden':''}">${p.dayNoteMr}</div>
        <div class="ritual-sec-label en-text${mr?' hidden':''}">morning</div>
        <div class="ritual-sec-label ritual-sec-label-mr mr-text${!mr?' hidden':''}">सकाळ</div>
        ${p.rituals.morning.map((r,ri)=>`
          <div class="ritual-item">
            <div class="ritual-dot"></div>
            <div class="ritual-text en-text${mr?' hidden':''}">${r}</div>
            <div class="ritual-text ritual-text-mr mr-text${!mr?' hidden':''}">${p.rituals.morningMr[ri]}</div>
          </div>`).join('')}
        <div class="ritual-sec-label en-text${mr?' hidden':''}" style="margin-top:8px;">during the day</div>
        <div class="ritual-sec-label ritual-sec-label-mr mr-text${!mr?' hidden':''}" style="margin-top:8px;">दिवस</div>
        ${p.rituals.day.map((r,ri)=>`
          <div class="ritual-item">
            <div class="ritual-dot"></div>
            <div class="ritual-text en-text${mr?' hidden':''}">${r}</div>
            <div class="ritual-text ritual-text-mr mr-text${!mr?' hidden':''}">${p.rituals.dayR[ri]}</div>
          </div>`).join('')}
        <div class="ritual-sec-label en-text${mr?' hidden':''}" style="margin-top:8px;">evening</div>
        <div class="ritual-sec-label ritual-sec-label-mr mr-text${!mr?' hidden':''}" style="margin-top:8px;">संध्याकाळ</div>
        ${p.rituals.evening.map((r,ri)=>`
          <div class="ritual-item">
            <div class="ritual-dot"></div>
            <div class="ritual-text en-text${mr?' hidden':''}">${r}</div>
            <div class="ritual-text ritual-text-mr mr-text${!mr?' hidden':''}">${p.rituals.eveningMr[ri]}</div>
          </div>`).join('')}
      </div>`;
    grid.appendChild(card);
  }
  grid.classList.remove('hidden');
  setTimeout(()=>grid.scrollIntoView({behavior:'smooth'}),80);
}

function toggleDay(header){
  const card=header.parentElement;
  const body=card.querySelector('.day-body');
  const open=body.classList.contains('show');
  document.querySelectorAll('.day-body').forEach(b=>b.classList.remove('show'));
  document.querySelectorAll('.day-card').forEach(c=>c.classList.remove('expanded'));
  if(!open){body.classList.add('show');card.classList.add('expanded');}
}

// ─── TOAST ──────────────────────────────────────────
function toast(id,msg){
  const t=document.getElementById(id);
  if(!t)return;
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}

// ─── DEFAULT DATES ──────────────────────────────────
(function(){
  const d=new Date(Date.now()-10*864e5);
  const fmt=x=>x.toISOString().split('T')[0];
  ['r-start','s-start','w-start'].forEach(id=>document.getElementById(id).value=fmt(d));
})();
