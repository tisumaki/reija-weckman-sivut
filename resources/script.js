const moreBtn = document.querySelector(".read-more-btn");
const text = document.querySelector(".text");

moreBtn.addEventListener('click', (_e)=>{
        text.classList.toggle("show-more");
        if(moreBtn.innerHTML === 'Read more') {
            moreBtn.innerHTML = 'Read less';
        } else {
            moreBtn.innerHTML = 'Read more';
        }
    })