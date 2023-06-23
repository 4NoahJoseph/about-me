

let progress = document.getElementById('progressbar');
let totalHight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHight = (window.pageYOffset / totalHight) * 100;
    progress.style.height = progressHight + "%";}


    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
    });

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand");
        }, 500)
    })

