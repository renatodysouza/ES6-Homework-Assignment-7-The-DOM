
const printId = () =>{
    const rect = document.getElementsByClassName('rectangles');
    for(let i = 0; i < rect.length; i++) {
        console.log(`Here are the rectangle IDs: ${rect[i].id}`);
    }
}






window.onload = ()=> {
  printId();
};