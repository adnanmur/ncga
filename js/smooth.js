﻿    // helper functions
    const MathUtils = {
        // map number x from range [a, b] to [c, d]
        map: (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c,
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b,
        // Random float
        getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
    };

    // body element
    const body = document.body;

    // calculate the viewport size
    let winsize;
    const calcWinsize = () => winsize = { width: window.innerWidth, height: window.innerHeight };
    calcWinsize();
    // and recalculate on resize
    window.addEventListener('resize', calcWinsize);

    // scroll position
    let docScroll;
    // for scroll speed calculation
    let lastScroll;
    let scrollingSpeed = 0;
    // scroll position update function
    const getPageYScroll = () => docScroll = window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener('scroll', getPageYScroll);

    // Item
    class Item {
        constructor(el) {
            // the .item element
            this.DOM = { el: el };
            // the inner image
            this.DOM.image = this.DOM.el.querySelector('.content__item-img');
            this.DOM.imageWrapper = this.DOM.image.parentNode;
            this.renderedStyles = {
                // here we define which property will change as we scroll the page and the item is inside the viewport
                // in this case we will be:
                // - scaling the inner image
                // - translating the item's title
                // we interpolate between the previous and current value to achieve a smooth effect
                imageScale: {
                    // interpolated value
                    previous: 0,
                    // current value
                    current: 0,
                    // amount to interpolate
                    ease: 0.1,
                    // current value setter
                    setValue: () => {
                        const toValue = 1;
                        const fromValue = 1.3;
                        const val = MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, fromValue, toValue);
                        return Math.min(Math.max(val, toValue), fromValue);
                    }
                },
                imageScale1: {
                    // interpolated value
                    previous: 0,
                    // current value
                    current: 0,
                    // amount to interpolate
                    ease: 0.1,
                    // current value setter
                    setValue: () => {
                        const toValue = 1.3;
                        const fromValue = 1;
                        const val = MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, fromValue, toValue);
                        return Math.max(Math.min(val, toValue), fromValue);
                    }
                },
                scroll: {
                    // interpolated value
                    previous: 0,
                    // current value
                    current: 0,
                    // amount to interpolate
                    ease: 1,
                    // current value setter
                    setValue: () => {
                        const toValue = -50;
                        const fromValue = 20;
                        const val = MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, fromValue, toValue);
                        return Math.min(Math.max(val, toValue), fromValue);
                    }
                },
                lookingGlass1: {
                    // interpolated value
                    previous: 0,
                    // current value
                    current: 0,
                    // amount to interpolate
                    ease: 1,
                    // current value setter
                    setValue: () => {
                        const toValue = 40;
                        const fromValue = -20;
                        const val = MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, fromValue, toValue);
                        return Math.max(Math.min(val, toValue), fromValue);
                    }
                },
                lookingGlass2: {
                    // interpolated value
                    previous: 0,
                    // current value
                    current: 0,
                    // amount to interpolate
                    ease: 1,
                    // current value setter
                    setValue: () => {
                        const toValue = -20;
                        const fromValue = 40;
                        const val = MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, fromValue, toValue);
                        return Math.min(Math.max(val, toValue), fromValue);
                    }
                }
            };
            // gets the item's height and top (relative to the document)
            this.getSize();
            // set the initial values
            this.update();
            // use the IntersectionObserver API to check when the element is inside the viewport
            // only then the element styles will be updated
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => this.isVisible = entry.intersectionRatio > 0);
            });
            this.observer.observe(this.DOM.el);
            // init/bind events
            this.initEvents();
        }
        update() {
            // sets the initial value (no interpolation)
            for (const key in this.renderedStyles) {
                this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
            }
            // apply changes/styles
            this.layout();
        }
        getSize() {
            const rect = this.DOM.el.getBoundingClientRect();
            this.props = {
                // item's height
                height: rect.height,
                // offset top relative to the document
                top: docScroll + rect.top
            };
        }
        initEvents() {
            window.addEventListener('resize', () => this.resize());
        }
        resize() {
            // gets the item's height and top (relative to the document)
            this.getSize();
            // on resize reset sizes and update styles
            this.update();
        }
        render() {
            // update the current and interpolated values
            for (const key in this.renderedStyles) {
                this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
            }

            // and apply changes
            this.layout();
        }
        layout() {
            if (this.DOM.image.classList.contains('in'))
                this.DOM.image.style.transform = `scale3d(${this.renderedStyles.imageScale1.previous},${this.renderedStyles.imageScale1.previous},1)`;
            else if (this.DOM.image.classList.contains('scroll')) {
                this.DOM.image.style.transform = `translateY(${this.renderedStyles.scroll.previous}rem)`;                
            }
            else if (this.DOM.image.classList.contains('lookingGlass2')) {
                this.DOM.image.style.left = `${this.renderedStyles.lookingGlass1.previous}%`;
            }  
            else if (this.DOM.image.classList.contains('lookingGlass1')) {
                this.DOM.image.style.left = `${this.renderedStyles.lookingGlass2.previous}%`;
            }  
            else
                this.DOM.image.style.transform = `scale3d(${this.renderedStyles.imageScale.previous},${this.renderedStyles.imageScale.previous},1)`;
        }
    }

    // SmoothScroll
    class SmoothScroll {
        constructor() {
            // the <main> element
            this.DOM = { main: document.querySelector('.root') };
            // the items on the page
            this.items = [];
            this.DOM.content = this.DOM.main.querySelector('.content');
            [...this.DOM.content.querySelectorAll('.content__item')].forEach(item => this.items.push(new Item(item)));
            // here we define which property will change as we scroll the page
            // in this case we will be translating on the y-axis
            // we interpolate between the previous and current value to achieve the smooth scrolling effect
            this.renderedStyles = {
                translationY: {
                    // interpolated value
                    previous: 0,
                    // current value
                    current: 0,
                    // amount to interpolate
                    ease: 0.1,
                    // current value setter
                    // in this case the value of the translation will be the same like the document scroll
                    setValue: () => docScroll
                }
            };
            // set the body's height
            this.setSize();
            // set the initial values
            this.update();
            // the <main> element's style needs to be modified
            this.style();
            // init/bind events
            this.initEvents();
            // start the render loop
            requestAnimationFrame(() => this.render());
        }
        update() {
            // sets the initial value (no interpolation) - translate the scroll value
            for (const key in this.renderedStyles) {
                this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
            }
            // translate the scrollable element
            this.layout();
        }
        layout() {
        }
        setSize() {
        }
        style() {
            // the <main> needs to "stick" to the screen and not scroll
            // for that we set it to position fixed and overflow hidden 
            this.DOM.main.style.width = this.DOM.main.style.height = '100%';
            this.DOM.main.style.top = this.DOM.main.style.left = 0;
            this.DOM.main.style.overflow = 'hidden';
        }
        initEvents() {
            // on resize reset the body's height
            window.addEventListener('resize', () => this.setSize());
        }
        render() {
            // Get scrolling speed
            // Update lastScroll
            scrollingSpeed = Math.abs(docScroll - lastScroll);
            lastScroll = docScroll;

            // update the current and interpolated values
            for (const key in this.renderedStyles) {
                this.renderedStyles[key].current = this.renderedStyles[key].setValue();
                this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
            }
            // and translate the scrollable element
            this.layout();

            // for every item
            for (const item of this.items) {
                // if the item is inside the viewport call it's render function
                // this will update item's styles, based on the document scroll value and the item's position on the viewport
                if (item.isVisible) {
                    if (item.insideViewport) {
                        item.render();
                    }
                    else {
                        item.insideViewport = true;
                        item.update();
                    }
                }
                else {
                    item.insideViewport = false;
                }
            }

            // loop..
            requestAnimationFrame(() => this.render());
        }
    }