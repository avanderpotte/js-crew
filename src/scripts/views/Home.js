class Home {
  constructor () {
    this.$view = document.querySelector('.home');
    this.$hero = this.$view.querySelector('.hero');

    this.transitionIn();
  }

  transitionIn () {
    this.$view.classList.add('is-active');

    setTimeout(() => {
      this.$hero.classList.add('is-active');
    }, 2000);
  }
}

export default Home;