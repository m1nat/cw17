// const div1 = document.createElement('div');
// div1.innerHTML = 'div1'
// div1.setAttribute('clicked', false)
// // console.log( typeof div1.getAttribute('clicked'));

// document.body.append(div1);

// const div2 = document.createElement('div');
// div2.innerHTML = 'div2';
// // div1.append(div2);
// div1.after(div2);

// setTimeout ( () => div2.remove(), 2000);
// setTimeout ( () => div2.className = 'redBlock', 2000);
//     const div1 = document.createElement('div1');
//     document.body.append(div1);

//     const div2 = document.createElement('div2');
//     div1.after(div2);

//     const div3 = document.createElement('div2');
//     div2.after(div3);


//     let count = 0;
//     let hour = 0;
//     let min = 0;

// setInterval(() => {
//     count++
//     div1.innerHTML = count;
//     if(count > 59) {
//         div2.innerHTML = `:${min++}`;
//         count = 0
//     }
//     if(min > 59) {
//         div3.innerHTML = `:${hour++}`;
//         min = 0
//     }
// }, 5);

// const div = document.createElement('div');
// document.body.prepend(div);
// div.innerHTML = 'DIV';
// let count = 0;
// div.onclick = function(){
//     count++
//     div.className = 'redBlock'
//     if(count % 2 == 0){
//         div.classList.remove('redBlock');
//         div.innerHTML = 'DIV'
//     }else{
//         div.innerHTML = 'red'
//     }
// };

for (let i = 0; i < 10; i++) {
    const button = document.createElement('button')
    document.body.button
    button.innerHTML = 'Click'
    const li = document.createElement('li');
    document.body.append(li);
    li.innerHTML = 'TODO'
    li.onclick = function() {
        li.style.textDecoration = "line-through"    
    }
}





