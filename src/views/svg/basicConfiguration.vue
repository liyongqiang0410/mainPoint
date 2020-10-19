<template>
  <div>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="300">
      <g>
        <!-- 基础图形 -->
        <line x1="5" y1="0" x2="5" y2="300" stroke='red' stroke-width="2"/>
        <line x1="55" y1="0" x2="55" y2="300" stroke='red' stroke-width="2"/>
        <rect x="5" y="25" width="40" height="40" stroke='red' stroke-width="2" fill="transparent" />
        <rect x="55" y="25" width="40" height="40" rx="5" ry="5" stroke='red' stroke-width="2" fill="transparent" />
        <circle cx="25" cy="110" r="20" stroke='red' stroke-width='2' fill='transparent' />
        <ellipse cx='75' cy="110" rx="20" ry="10" stroke="red" stroke-width="2" fill="transparent" />
        <polyline points="15 130, 32 144, 38, 184" stroke='red' stroke-width="2" fill='transparent' />
        <polygon points='60 120, 84 220, 94 160' stroke="red" stroke-width='2' fill="transparent" />
      </g>
    </svg>
    <svg version="1.1" xmlnx="http://www.w3.org/2000/svg" width="300" height="300">
      <g>
        <!-- 三次贝塞尔曲线 -->
        <text x="150" y="30" font-size="12" text-anchor="middle" fill="red">三次贝塞尔曲线</text>
        <path d="M 50 50 C 75 10, 125 90, 150 50 S 225 90, 250 50 " stroke="red" stroke-width="2" fill='transparent'></path>

        <circle cx="50" cy="50" r="2" fill="blue" />
        <text x="50" y="50" font-size="12" fill="blue" text-anchor="end">起点</text>
        <circle cx="75" cy="10" r="2" fill="blue" />
        <text x="75" y="10" font-size="12" fill="blue" text-anchor="end">控制点</text>
        <line x1="50" y1="50" x2="75" y2="10" stroke='blue' stroke-width="1"/>

        <circle cx="125" cy="90" r="2" fill="blue" />
        <text x="125" y="90" font-size="12" fill="blue" text-anchor="end">控制点</text>
        <circle cx="150" cy="50" r="2" fill="blue" />
        <text x="150" y="50" font-size="12" fill="blue" text-anchor="end">终点</text>
        <line x1="125" y1="90" x2="150" y2="50" stroke='blue' stroke-width="1"/>

        <circle cx="175" cy="10" r="2" fill="green" />
        <text x="175" y="10" font-size="12" fill="green" text-anchor="start">控制点(S 推测)</text>
        <line x1="150" y1="50" x2="175" y2="10" stroke='green' stroke-width="1"/>

        <circle cx="225" cy="90" r="2" fill="green" />
        <text x="225" y="90" font-size="12" fill="green" text-anchor="start">S 控制点</text>
        <circle cx="250" cy="50" r="2" fill="green" />
        <text x="250" y="50" font-size="12" fill="green" text-anchor="start">终点</text>
        <line x1="225" y1="90" x2="250" y2="50" stroke='green' stroke-width="1"/>

        <!-- 二次贝塞尔曲线 -->
        <text x="150" y="150" font-size="12" text-anchor="middle" fill="red">二次贝塞尔曲线</text>
        <path d="m50 200 Q 100 110, 150 200 T 250 200" stroke="red" stroke-width="2" fill='transparent'/>
        <!-- 起点 -->
        <circle cx="50" cy="200" r="2" fill="blue" />
        <text x="50" y="200" font-size="12" fill="blue" text-anchor="end">起点</text>
        <!-- 控制点 -->
        <circle cx="100" cy="110" r="2" fill="blue" />
        <text x="100" y="110" font-size="12" fill="blue" text-anchor="end">控制点</text>
        <!-- 终点 -->
        <circle cx="150" cy="200" r="2" fill="blue" />
        <text x="150" y="200" font-size="12" fill="blue" text-anchor="start">终点</text>
        <polyline points=" 50 200, 100 110, 150 200" stroke='blue' stroke-width="1" fill="transparent" />
        
        <circle cx="200" cy="290" r="2" fill="green" />
        <text x="200" y="290" font-size="12" fill="green" text-anchor="start">控制点</text>
        <circle cx="250" cy="200" r="2" fill="green" />
        <polyline points=" 150 200, 200 290, 250 200" stroke='green' stroke-width="1" fill="transparent" />
      </g>
    </svg>
    <!-- 弧线 -->
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <g>
        <path d="M50 150 A 80 40 -30 0 1 120 90 z" stroke='red' fill="transparent" />
      </g>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'basic-configuration',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>