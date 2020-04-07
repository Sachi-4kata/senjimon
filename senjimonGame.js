let i = 0;
let j = 0;
let k = 0;
let l = 0;
let m = 0;
let n = 0;

window.addEventListener('load', initGame, false);

function initGame(){
  s_canvas = document.querySelector('#senji_stage');
  o_canvas = document.querySelector('#on_stage');
  k_canvas = document.querySelector('#kun_stage');

  //draw();
}


function draw() {

  const tm1 = 3000;
  const sctx = s_canvas.getContext('2d');
  const octx = o_canvas.getContext('2d');
  const kctx = k_canvas.getContext('2d');

  let st = document.getElementById("start").value - 1;
  let ed = document.getElementById("end").value;

  sctx.beginPath();
  octx.beginPath();
  kctx.beginPath();
  sctx.clearRect(0, 0, 500, 100);
  octx.clearRect(0, 0, 500, 50);
  kctx.clearRect(0, 0, 500, 50);
  
  console.log(st);
  console.log(ed);

  let fn0 = function(){
    const txt = "千字文"
    sctx.font = "80px 'ＭＳ ゴシック'";
    sctx.textBaseline = 'middle';
    sctx.textAlign = 'center';
    sctx.fillText(txt, 250, 50);
    l++;
  }  

  let fn1 = function(){
    octx.font = "50px 'ＭＳ ゴシック'";
    octx.textBaseline = 'middle';
    octx.textAlign = 'center';
    octx.fillText("はーじまーるよー！", 250, 30);    
    m++;
  }

  let fn2 = function(){
    kctx.font = "50px 'ＭＳ ゴシック'";
    kctx.textBaseline = 'middle';
    kctx.textAlign = 'center';
    kctx.fillText("せーのっ！", 250, 30);
    n++;
  }

  let fn3 = function(){
    sctx.font = "80px 'ＭＳ ゴシック'";
    sctx.textBaseline = 'middle';
    sctx.textAlign = 'center';
    sctx.clearRect(0, 0, 500, 100);
    sctx.fillText(arraySenji[st*4], 80, 50);
    sctx.fillText(arraySenji[st*4+1], 190, 50);
    sctx.fillText(arraySenji[st*4+2], 300, 50);
    sctx.fillText(arraySenji[st*4+3], 410, 50);
    octx.clearRect(0, 0, 500, 50);
    octx.font = "40px 'ＭＳ ゴシック'";
    octx.textBaseline = 'middle';
    octx.textAlign = 'center';
    octx.fillText(arraySenjiOn[st],250,30);  
    kctx.clearRect(0, 0, 500, 50);
    kctx.font = "20px 'ＭＳ ゴシック'";
    kctx.textBaseline = 'middle';
    kctx.textAlign = 'center';
    kctx.fillText(arraySenjiKun[st],250,30);
  }

  let fn4 = function(){
    sctx.font = "15px 'ＭＳ ゴシック'";
    sctx.textBaseline = 'bottom';
    sctx.textAlign = 'left';
    sctx.clearRect(0, 0, 500, 100);
    sctx.fillText("千字文のデータは下記のサイトを使わせていただきました。", 0, 90);
    octx.clearRect(0, 0, 500, 50);
    octx.font = "15px 'ＭＳ ゴシック'";
    octx.textBaseline = 'top';
    octx.textAlign = 'left';
    octx.fillText("http://shodo-seisen.com/blog_old/blog_20140321.html",0,5);  
    kctx.clearRect(0, 0, 500, 50);
  }

  let fn5 = function(){
    sctx.clearRect(0, 0, 500, 100);
    octx.clearRect(0, 0, 500, 50);
    kctx.clearRect(0, 0, 500, 50);
  }

  let senjimon =  setInterval(function(){
    fn0();
    if(l>=1){
      clearInterval(senjimon);
  }}, 1);

  let hajimaruyo =  setInterval(function(){
    fn1();
    if(m>=1){
      clearInterval(hajimaruyo);
  }}, 1000);

  let seno =  setInterval(function(){
    fn2();
    if(n>=1){
      clearInterval(seno);
  }}, 2000);

  let contents = setInterval(function(){
    fn3();
    st++;
    if(st>ed){
      clearInterval(contents);
      fn4();
  }}, tm1);

    
 /* let on = setInterval(function(){
    fn4();
    if(j>=250){
      clearInterval(on);
  }}, tm1);
  
  let kun = setInterval(function(){
    fn5();
    if(k>=250){
      clearInterval(kun);
  }}, tm1);

  console.log(i);
  console.log(j);
  console.log(k);
 */
}
