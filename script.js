class Scroll {
    constructor(obj) {
        if (typeof (obj.element) == 'string') {
            this.el = document.querySelector(obj.element);
        } else if (obj.element instanceof HTMLElement) {
            this.el = obj.element;
        }
        this.el.style.position = 'fixed';
        this.top = obj.top;
        // this.el.style.top = this.top + 'px';
        this.unit = obj.unit;
        this.scroll()

        window.addEventListener('scroll', () => { this.scroll() });
        window.addEventListener('resize', () => { this.scroll() });
    }
    scroll() {
        // console.log(window.pageYOffset);
        this.menuTop = this.scrollNumber();
        if (this.menuTop - window.pageYOffset > 0) {
            this.el.style.top = this.menuTop - window.pageYOffset + 'px';
        } else {
            this.el.style.top = 0;
        }
    }
    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        } else if (this.unit == '%' || this.unit == undefined) {
            return window.innerHeight / 100 * this.top - this.el.clientHeight;
        }
    }
}

class Runing {
    constructor(opt) {
        this.content = document.querySelector(opt.content);
        this.h1 = this.content.querySelector('h1');
        this.text = this.h1.innerHTML;
        this.h1.innerHTML = '';

        this.add();
    }
    add(i = 0) {
        if (i < this.text.length) {
            setTimeout(() => {
                this.h1.innerHTML += this.text.charAt(i);
                i++
                this.add(i);
                console.log(i);
            }, 100);
        }
    }

}

const r = new Runing({
    content: '.header__content'
});

console.log(r);


// let a = document.querySelector('.header__nav');
// const x = new Scroll({element: a});

const x = new Scroll({
    element: '.header__nav',
    top: 100,
    // unit: '%'
});

// console.log(x);

// console.log(window);

const random = (min, max) => { 
    const rand = min + Math.random()*(max-min+1);
    return Math.floor(rand);
}

const headerContent=document.querySelector(".header__content")
headerContent.addEventListener('mouseenter',()=>{
    headerContent.style.left=`${random(0,90)}%`
    headerContent.style.top=`${random(0,90)}%`
})

console.log(random)