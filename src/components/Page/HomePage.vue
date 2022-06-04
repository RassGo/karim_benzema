<template>
  <div class="wrapper">
    <h1>Home Page</h1>
      <img :src="image" height="150" width="150"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bounce: false,
      roll: false,
      animated: false,
      image: require('@/assets/Logo_vect.png')
    }
  }
}
</script>

<style>
section {
  height: 200px;
  width: 200px;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

.roll-enter-active {
  animation: roll-in .5s;
}

.roll-leave-active {
  animation: roll-in .5s reverse;
}

@keyframes roll-in {
  0% {
    transform: scale(0) rotateZ(0deg) translateX(-250px);
    opacity: 0;
  }

  25% {
    opacity: 1;
  }

  100% {
    transform: scale(1) rotateZ(360deg) translateX(0px);
    opacity: 1;
  }
}
</style>

