const tabNavList = document.querySelectorAll('.tab-nav li');
const tabBody = document.querySelectorAll('.tab-body');

tabNavList.forEach((item,index,listArray)=>{
    item.addEventListener('click',()=>{
        if(item.classList.contains('active')){
            return;
        }else{
            document.querySelector('.active').classList.remove('active');
            item.classList.add('active');
        }

        if(listArray[0].classList.contains('active')){
            tabBody[0].classList.add('active');
            tabBody[1].classList.remove('active');
            tabBody[2].classList.remove('active');
        }

        if(listArray[1].classList.contains('active')){
            tabBody[1].classList.add('active');
            tabBody[0].classList.remove('active');
            tabBody[2].classList.remove('active');
        }

        if(listArray[2].classList.contains('active')){
            tabBody[2].classList.add('active');
            tabBody[1].classList.remove('active');
            tabBody[0].classList.remove('active');
        }
    })
})