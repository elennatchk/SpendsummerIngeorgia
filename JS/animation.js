// cursor animation.
const cursort = document.querySelector('.animated-cursor');
window.addEventListener('scroll',function(){
    if(window.scrollY > 100){
        cursort.style.display= 'none';
    }
    else{
        cursort.style.display= 'block';
    }
});


// About Section animation.
const column = document.querySelectorAll('.column');
const observer = new IntersectionObserver(entries=>{
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			entry.target.style.animation = 'slide 2s';
			entry.target.style.opacity = '1';
		}
	})
},{threshold : 0.8});
column.forEach(cl =>{
	observer.observe(cl);
});

