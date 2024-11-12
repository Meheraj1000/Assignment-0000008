

const handelCartdbtn=()=>{
    document.getElementById('btn-show-cart')
.addEventListener('click',function(){
    document.getElementById('showCart').classList.remove('hidden');
    document.getElementById('show-wistlist').classList.add('hidden')
})
}
const handelwistlist=()=>{
    document.getElementById('btn-show-wishlist')
.addEventListener('click',function(){
  document.getElementById('show-wistlist').classList.remove('hidden');
  document.getElementById('showCart').classList.add('hidden');
})
}
export{handelCartdbtn,handelwistlist}
