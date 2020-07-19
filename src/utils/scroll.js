function Scroll () { }
Scroll.prototype = {
  config: [
    {
      targetCon: '.c-server',
      target: '.c-server__des',
      i: 0,
      aniClass: 'shrink-in'
    },
    {
      targetCon: '.c-data-report',
      target: '.c-data-report__item',
      i: 0,
      aniClass: 'movedown'
    },
    {
      targetCon: '.c-data-report',
      target: '.c-data-report__item',
      i: 1,
      aniClass: 'moveup'
    },
    {
      targetCon: '.c-data-report',
      target: '.c-data-report__item',
      i: 2,
      aniClass: 'movedown'
    },
    {
      targetCon: '.c-important',
      target: '.c-important__des',
      i: 0,
      aniClass: 'moveleft'
    },
    {
      targetCon: '.c-audio-column',
      target: '.c-audio-column__cover_right',
      i: 0,
      aniClass: 'audio'
    },
    {
      targetCon: '.c-annotation',
      target: '.c-annotation__des',
      i: 0,
      aniClass: 'moveright'
    },
    {
      targetCon: '.c-salon',
      target: '.c-salon__des',
      i: 0,
      aniClass: 'moveright'
    }
  ],
  getConfigEle () {
    window.onload = () => {
      for (let i = 0; i < this.config.length; i++) {
        let obj = this.config[i]
        let targetCon = document.querySelector(obj.targetCon)
        let target = document.querySelectorAll(obj.target)[obj.i]
        let newObj = { targetCon: targetCon, target: target, class: obj.aniClass }
        this.config.splice(i, 1, newObj)
      }
      for (let i = 0; i < this.config.length; i++) {
        this.addAnimationIn(this.config[i].targetCon, this.config[i].target, this.config[i].class)
      }
    }
  },
  addLis: function () {
    this.getConfigEle()
    window.onresize = () => {
      for (let i = 0; i < this.config.length; i++) {
        this.addAnimationIn(this.config[i].targetCon, this.config[i].target, this.config[i].class)
      }
    }
    window.onscroll = () => {
      for (let i = 0; i < this.config.length; i++) {
        this.addAnimationIn(this.config[i].targetCon, this.config[i].target, this.config[i].class)
      }
    }
  },
  addAnimationIn: function (targetCon, target, animation) {
    let targetConIn = targetCon.offsetTop + targetCon.clientHeight
    let targetConOut = targetConIn + window.innerHeight
    let scrollTop = window.scrollY + window.innerHeight
    // alert(targetConIn + '  in')
    if (scrollTop >= targetConIn && scrollTop <= targetConOut) {
      target.classList.add(animation)
      // alert('add fin')
      console.log('12')
    }
  },
  debounce: function debounce (fn, wait) {
    let timer = null
    return function () {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      timer = setTimeout(function () {
        fn()
      }, wait)
    }
  }
}
export default Scroll
