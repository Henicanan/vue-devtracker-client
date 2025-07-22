<template>
  <div class="logo-frame">
    <svg
      width="74"
      height="74"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="myGradient"
          gradientUnits="userSpaceOnUse"
          x1="8"
          y1="12"
          x2="56"
          y2="60"
        >
          <stop offset="0" stop-color="#2ecc71" />
          <stop offset="1" stop-color="#219653" />
        </linearGradient>

        <filter id="shadow">
          <feDropShadow
            dx="2"
            dy="2"
            stdDeviation="3"
            flood-color="rgba(0, 0, 0, 0.3)"
          />
        </filter>
      </defs>
      <path
        d="M16 12 L48 12 L56 24 L56 48 L32 60 L8 48 L8 24 Z"
        fill="url(#myGradient)"
        stroke="#2ecc71"
        stroke-width="2"
        filter="url(#shadow)"
      />
      <path
        d="M16 12 L8 24 L8 48 L32 60 L48 48 L56 48"
        fill="#2ecc71"
        opacity="0.8"
      />
      <path
        d="M22 38 L28 44 L42 30"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<style scoped>
.logo-frame {
  display: inline-block;
}
</style>
