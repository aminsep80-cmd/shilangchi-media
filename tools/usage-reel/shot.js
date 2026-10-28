const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
await p.goto('file:///root/anim/anim.html');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(800);
const ts=process.argv.slice(2).map(Number);
for(const t of ts){await p.evaluate(t=>render(t),t);await p.screenshot({path:`/root/anim/test_${t}.png`});}
await b.close()})();
