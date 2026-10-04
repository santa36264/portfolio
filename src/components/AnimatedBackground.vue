<template>
  <div class="fixed inset-0 overflow-hidden pointer-events-none z-50">
    <div class="grid-overlay"></div>
    <div class="floating-box box-1"></div>
    <div class="floating-box box-2"></div>
    <div class="floating-box box-3"></div>
    <div class="floating-box box-4"></div>
    <div class="floating-box box-5"></div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedBackground'
}
</script>

<style scoped>
.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(168, 85, 247, 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(168, 85, 247, 0.12) 1px, transparent 1px);
  background-size: 48px 48px;
  opacity: 0.55;
}

.dark .grid-overlay {
  background-image:
    linear-gradient(to right, rgba(244, 114, 182, 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(244, 114, 182, 0.12) 1px, transparent 1px);
  opacity: 0.75;
}

.floating-box {
  position: absolute;
  border: 2px solid rgba(168, 85, 247, 0.25);
  background: rgba(168, 85, 247, 0.06);
  border-radius: 14px;
  animation: floatBox 14s ease-in-out infinite;
}

.dark .floating-box {
  border-color: rgba(244, 114, 182, 0.25);
  background: rgba(244, 114, 182, 0.08);
}

.box-1 { width: 90px; height: 90px; top: 12%; left: 8%; animation-delay: -2s; }
.box-2 { width: 140px; height: 140px; top: 58%; left: 15%; animation-delay: -6s; }
.box-3 { width: 70px; height: 70px; top: 25%; right: 18%; animation-delay: -10s; }
.box-4 { width: 110px; height: 110px; bottom: 12%; right: 10%; animation-delay: -4s; }
.box-5 { width: 60px; height: 60px; bottom: 35%; left: 45%; animation-delay: -8s; }

@keyframes floatBox {
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(24px, -28px, 0) rotate(12deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .floating-box {
    animation: none;
  }
}
</style>
