<template>
  <div class="text-[45px] tracking-[6px] font-bold flex justify-center select-none text-center w-full pt-7">
    <span class="text-[#143e8a] letter">L</span>
    <span class="text-[#f58114] letter">o</span>
    <span class="text-[#143e8a] letter">a</span>
    <span class="text-[#f58114] letter">d</span>
    <span class="text-[#143e8a] letter">i</span>
    <span class="text-[#f58114] letter">n</span>
    <span class="text-[#143e8a] letter">g</span>
    <span class="text-[#f58114] letter">.</span>
    <span class="text-[#143e8a] letter">.</span>
    <span class="text-[#f58114] letter">.</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.letter {
  animation: bounce 1s infinite;
  font-family: 'Protest Strike';
}

.letter:nth-child(1) {
  animation-delay: 0ms;
}

.letter:nth-child(2) {
  animation-delay: 50ms;
}

.letter:nth-child(3) {
  animation-delay: 100ms;
}

.letter:nth-child(4) {
  animation-delay: 150ms;
}

.letter:nth-child(5) {
  animation-delay: 200ms;
}

.letter:nth-child(6) {
  animation-delay: 250ms;
}

.letter:nth-child(7) {
  animation-delay: 300ms;
}

.letter:nth-child(8) {
  animation-delay: 350ms;
}

.letter:nth-child(9) {
  animation-delay: 400ms;
}

.letter:nth-child(10) {
  animation-delay: 450ms;
}
</style>
