<template>
  <div class="cssDoodle">
    <h4 class="title">Grid</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle grid="5">
          :doodle {
            grid-gap: 1px;
            width: 8em; height: 8em;
          }
          background: #60569e;
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="language-XML">&lt;css-doodle grid="5"&gt;
  :doodle {
    grid-gap: 1px;
    width: 8em; height: 8em;
  }
  background: #60569e;
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle grid="35x1" @click="update('doodle1')" class="doodle1">
          :doodle {
          grid-row-gap: 1px;
          @size: 8em;
          }
          background: #60569e;
          width: @rand(5%, 100%);
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle grid="35x1" @click="update('doodle1')" class="doodle1"&gt;
  :doodle {
    grid-row-gap: 1px;
    @size: 8em;
  }
  background: #60569e;
  width: @rand(5%, 100%);
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle @click="update('doodle2')" class="doodle2">
          :doodle {
          @grid: 5 / 8em
          }
          background: #60569e;
          transform: scale(@rand(0.2, 0.8))
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle @click="update('doodle2')" class="doodle2"&gt;
  :doodle {
     @grid: 5 / 8em &lt;!-- 5行5列 / size --&gt;
  }
  background: #60569e;
  transform: scale(@rand(0.2, 0.8)) &lt;!-- @rand 随机数(min, max) --&gt;
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h3 class="title">Selectors</h3>
    <h4 class="title">:doodle</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle grid="5" @mouseenter="update('doodle3')" class="doodle3">
          :doodle { 
            --s: 0;
            grid-gap: 1px;
            @size: 8em;
          }
          :doodle(:hover) { --s: @rand(1,2) }
          background: #60569e;
          transition: .5s cubic-bezier(.175, .885, .32, 1.275);
          transition-delay: @rand(500ms);
          transform: translateY(calc(var(--s) * 100%));
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">
&lt;css-doodle grid="5"&gt;
  :doodle { 
    --s: 0;
    grid-gap: 1px;
    @size: 8em;
  }
  :doodle(:hover) { --s: @rand(1,2) }
  background: #60569e;
  transition: .5s cubic-bezier(.175, .885, .32, 1.275);
  transition-delay: @rand(500ms);
  transform: translateY(calc(var(--s) * 100%));
&lt;/css-doodle&gt;
</code></pre>
      </div>
    </div>
    <h4 class="title">:container</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle>
          :doodle {
            @grid: 5 / 8em;
            overflow: hidden;
          }
          :doodle(:hover) {
            --s: 1.5
          }
          :container {
            grid-gap: 1px;
            transition: 1s cubic-bezier(0.3, 1.2, 0.4, 0.5);
            transition-delay: @rand(200ms);
            transform: rotate(45deg) scale(var(--s));
          }
          background: #60569e;
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle&gt;
  :doodle {
    @grid: 5 / 8em;
    overflow: hidden;
  }
  :doodle(:hover) {
    --s: 1.5
  }
  :container {
    &lt;!-- :container 继承了:doodle 的所有属性,这就是设置了网格它还生效的原因 --&gt;
    grid-gap: 1px;
    transition: 1s cubic-bezier(0.3, 1.2, 0.4, 0.5);
    transition-delay: @rand(200ms);
    transform: rotate(45deg) scale(var(--s));
  }
  background: #60569e;
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h4 class="title">@nth</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle>
          :doodle {
            @grid: 5 / 8em;
          }
          :container {
            grid-gap: 1px;
          }
          background: #60569e;
          @nth(1) {
            background: red;
          }
          @nth(3n) {
            background: orange;
          }
          @nth(3n - 1) {
            :after {
              content: @index;
              color: #FFFFFF;
            }
            background: #e6437d;
          }
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle&gt;
  :doodle {
    @grid: 5 / 8em;
  }
  :container {
    grid-gap: 1px;
  }
  background: #60569e;
  @nth(1) {
    background: red;
  }
  @nth(3n) {
    background: orange;
  }
  @nth(3n - 1) {
    :after {
      content: @index;
      color: #FFFFFF;
    }
    background: #e6437d;
  }
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h4 class="title">@even(偶数) @odd(奇数)</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle>
          :doodle {
            @grid: 5 / 8em;
          }
          :container {
            grid-gap: 1px;
          }
          background: #60569e;
          @even {
            :after {
              content: @index;
              color: #FFFFFF;
            }
            background: #e6437d;
          }
          @odd {
            :after {
              content: @index;
              color: red;
            }
            background: #60569e;
          }
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle&gt;
  :doodle {
    @grid: 5 / 8em;
  }
  :container {
    grid-gap: 1px;
  }
  background: #60569e;
  @even {
    :after {
      content: @index;
      color: #FFFFFF;
    }
    background: #e6437d;
  }
  @odd {
    :after {
      content: @index;
      color: red;
    }
    background: #60569e;
  }
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h4 class="title">@at(row, col) 选择特定行和列的单元格</h4>
    <h4 class="title">@random([ ratio ]) 随机选择 参数0 ~ 1 ; 默认 0.5 </h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle @click="update('doodle4')" class="doodle4">
          :doodle {
            @grid: 32 / 18em;
          }
          :container {
            grid-gap: 1px;
          }
          @random {
            border-top: 1px solid #60569e;
          }
          @random {
            border-left: 1px solid #60569e;
          }
          @random(0.5) {
            :after {
              content: '';
              background: hsl(@rand(360), 60%, 70%);
              @size: @rand(3px);
            }
          }
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle @click="update('doodle4')" class="doodle4"&gt;
  :doodle {
    @grid: 32 / 18em;
  }
  :container {
    grid-gap: 1px;
  }
  @random {
    border-top: 1px solid #60569e;
  }
  @random {
    border-left: 1px solid #60569e;
  }
  @random(0.5) {
    :after {
      content: '';
      background: hsl(@rand(360), 60%, 70%);
      @size: @rand(3px);
    }
  }
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h4 class="title">@row(n, ...) @col(n, ...) 选择行/列单元格</h4>
    <h4 class="title">@grid 定义网格 优先级更高</h4>
    <div class="page">
      <css-doodle class="doodle5" style="width: 100%;" @click="update('doodle5')">
        :doodle {
          @grid: 3x5 / 100vmin;
          background: #0a0c27;
        }
        :container {
          overflow: hidden;
        }
        @shape: heart;
        background: hsla(
          calc(360 - @i * 20), 70%, 68%, @r.8
        );
        transform: scale(@r(.2, 1.5)) translate(@m2.@r(±50%)) rotate(@rand(180deg));
      </css-doodle>
      <div class="textCode">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle class="doodle5" style="width: 100%;" @click="update('doodle5')"&gt;
  :doodle {
    @grid: 3x5 / 100vmin;
    background: #0a0c27;
  }
  :container {
    overflow: hidden;
  }
  @shape: heart;
  background: hsla(
    calc(360 - @i * 4), 70%, 68%, @r.8
  );
  transform: scale(@r(.2, 1.5)) translate(@m2.@r(±50%)) rotate(@rand(180deg));
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h4 class="title">@pick(n1, n2,...)&nbsp;&nbsp;&nbsp;&nbsp;返回从参数中随机挑选的一个值&nbsp;&nbsp;  别名: @p</h4>
    <h4 class="title">@pick-n(n1, n2,...) 返回从参数中顺序挑选的一个值&nbsp;&nbsp;  别名: @pn</h4>
    <h4 class="title">@pick-d(n1, n2,...) 返回从参数中挑选的一个值,类似于@pick-n,但是使用的规则不同.&nbsp;&nbsp;  别名: @pd</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle @click="update('doodle6')" class="doodle6">
          :doodle {
            @grid: 5 / 8em;
          }
          opacity: @pick(.1, .3, .5, .7, .9);
          :after {
            content: @pick-n([a-z]);
            color: @pick-d(red, orange, yellow, green, blue, cyan, purple);
          }
          background: #60569e;
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle @click="update('doodle6')" class="doodle6"&gt;
  :doodle {
    @grid: 5 / 8em;
  }
  opacity: @pick(.1, .3, .5, .7, .9);
  :after {
    content: @pick-n([a-z]);
    color: @pick-d(red, orange, yellow, green, blue, cyan, purple);
  }
  background: #60569e;
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h4 class="title">@rand(start[,end]) 返回两个值之间的随机值&nbsp;&nbsp; 别名: @r</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle @click="update('doodle7')" class="doodle7">
          :doodle {
            @grid: 7x4;
            @size: 12em 20em;
          }
          @shape: @pick-d(circle, triangle, rhombus, pentagon, hexagon, heptagon, octagon, cross, star, diamond, infinity, heart, fish, fish, drop, bean, hypocycloid 3, hypocycloid 4, hypocycloid 5, hypocycloid 6, bicorn, clover 3, clover 4, clover 5, bud 3, bud 5, bud 10);
          @random(1) {
            background: hsl(@rand(360), 70%, 60%)
          }
          transform: rotate(@rand(180deg));
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XMl">&lt;css-doodle @click="update('doodle7')" class="doodle7"&gt;
  :doodle {
    @grid: 7x4;
    @size: 12em;
  }
  @shape: @pick-n(circle, triangle, rhombus, pentagon, hexagon, heptagon, octagon, cross, star, diamond, infinity, heart, fish, fish, drop, bean, hypocycloid 3, hypocycloid 4, hypocycloid 5, hypocycloid 6, bicorn, clover 3, clover 4, clover 5, bud 3, bud 5, bud 10);
  @random(1) {
    background: hsl(@rand(360), 70%, 60%)
  }
  transform: rotate(@rand(180deg));
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h4 class="title">@last-pick, @last-rand 从@pick,@pick-n,@pick-d或者@rand中返回最后一个值</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle class="doodle8" @click="update('doodle8')">
          @grid: 5;
          :container {
            @size: 8em;
          }
          background: linear-gradient(
            @pick-d(45deg, -45deg), 
            @pick(#60569e, #e6437d), 
            rgba(255, 255, 255, 0), 
            @last-pick()
          )
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle class="doodle8" @click="update('doodle8')"&gt;
  @grid: 5;
  :container {
    @size: 8em;
  }
  background: linear-gradient(
    @pick-d(45deg, -45deg), 
    @pick(#60569e, #e6437d), 
    rgba(255, 255, 255, 0), 
    @last-pick()
  )
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h4 class="title">@repeat(times, value) 组合给定的值 别名:@rep</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle class="doodle9" @click="update('doodle9')">
          @grid: 5 / 12em;
          :container {
            grid-gap: 1px;
          }
          background: radial-gradient(
            circle at @r(30%, 70%) @r(30%, 70%),
            @m(2, (
              @p(#60569ea0, #e6437da0) calc((@n - 1) * 100% / @N),
              @lp calc(@n * 100% / @N)
            ))
          );
          border-radius: @repeat(4, @pick(40%, 60%));
          :after {
            content: '';
            position: absolute;
            top: @r(30%, 80%);
            left: @r(30%, 80%);
            @size: @r(8px);
            border-radius: 100%;
            background: #@rep(6, @p([0-9a-f]));
          }
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle class="doodle9" @click="update('doodle9')"&gt;
  @grid: 5 / 12em;
  :container {
    grid-gap: 1px;
  }
  background: radial-gradient(
    circle at @r(30%, 70%) @r(30%, 70%),
    @m(2, (
      @p(#60569ea0, #e6437da0) calc((@n - 1) * 100% / @N),
      @lp calc(@n * 100% / @N)
    ))
  );
  border-radius: @repeat(4, @pick(40%, 60%));
  :after {
    content: '';
    position: absolute;
    top: @r(30%, 80%);
    left: @r(30%, 80%);
    @size: @r(8px);
    border-radius: 100%;
    background: #@rep(6, @p([0-9a-f]));
  }
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h4 class="title">@multiple 组合给定的值 与@rep 类似, 区别: 使用","分隔 别名: @m</h4>
    <h4 class="title">@stripe(color [value], ...) 条纹</h4>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle class="doodle10" @click="update('doodle10')">
          :doodle {
            @grid: 16x1;
            @size: 12em;
          }
          background: linear-gradient(
            @r(180deg),
            @stripe(
              @m32.@pd(
                #781217, #9A1320, #0A2667, #D8A088, #D6DDD1,
                #E95A22, #CA4122, #C74523, #2CACC9, #008C3B,
                #F5D700, #CA2821, #EADF93, #003A59, #00609A,
                #6E746E, #E2E0B8, #1E272B, #468495, #E1E0CA,
                #666F75, #84A16A, #413B4E, #98AEC7, #979DA4
              ),
            )
          )
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle class="doodle10" @click="update('doodle10')"&gt;
  :doodle {
    @grid: 16x1;
    @size: 12em;
  }
  background: linear-gradient(
    @r(180deg),
    @stripe(
      @m32.@pd(
        #781217, #9A1320, #0A2667, #D8A088, #D6DDD1,
        #E95A22, #CA4122, #C74523, #2CACC9, #008C3B,
        #F5D700, #CA2821, #EADF93, #003A59, #00609A,
        #6E746E, #E2E0B8, #1E272B, #468495, #E1E0CA,
        #666F75, #84A16A, #413B4E, #98AEC7, #979DA4
      ),
    )
  )
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <div class="cssDoodle_item">
      <div class="effect">
        <css-doodle class="doodle11" @click="update('doodle11')">
          :doodle {
            @grid: 1 / 16em;
            --color: #@rep(6, @p([0-9a-f]));
          }
          border-radius: 100%;
          background: conic-gradient(
            @stripe(
              var(--color)  @r(10%, 30%),
              #@rep(6, @p([0-9a-f]))  @r(30%, 50%),
              #@rep(6, @p([0-9a-f]))  @r(50%, 80%),
              var(--color)  100%,
            )
          )
        </css-doodle>
      </div>
      <div class="code">
<pre class="line-numbers"><code class="lang-XML">&lt;css-doodle class="doodle11" @click="update('doodle11')"&gt;
  :doodle {
    @grid: 1 / 16em;
    --color: #@rep(6, @p([0-9a-f]));
  }
  border-radius: 100%;
  background: conic-gradient(
    @stripe(
      var(--color)  @r(10%, 30%),
      #@rep(6, @p([0-9a-f]))  @r(30%, 50%),
      #@rep(6, @p([0-9a-f]))  @r(50%, 80%),
      var(--color)  100%,
    )
  )
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
    <h3 class="title">Math</h3>
    <h4 class="title">Math: 所有js Math内置对象有的方法只需要要加"@"</h4>
    <h4 class="title">@calc() 计算</h4>
    <h4 class="title">@var() 防止浏览器对嵌套变量的值求值</h4>
    <h4 class="title">@hex(num) 转16进制</h4>
    <div class="page" style="height: 500px;">
      <css-doodle style="margin:auto;position:relative;top: 50%;margin-top:-23vmin;">
        :doodle {
          @grid: 50x1 / 50vmin;
          perspective: 23vmin; <!-- 景深 -->
        }
        background: @multi(@r(200, 240), (
          radial-gradient(
            @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d) 15%,
            transparent 50%
          ) @r(100%) @r(100%) / @r(1%, 3%, .1) @lr() no-repeat
        ));
        @size: 80%;
        @place-cell: center;
        border-radius: 50%;
        transform-style: preserve-3d;
        animation: scale-up 20s linear infinite;
        animation-delay: calc(@i() * -.4s);
        @keyframes scale-up {
          0% {
            opacity: 0;
            transform: translate3d(0, 0, 0) rotate(0);
          }
          10% { 
            opacity: 1; 
          }
          95% {
            transform: translate3d(0, 0, @r(50vmin, 55vmin)) rotate(@r(-360deg, 360deg));
          }
          100% {
            opacity: 0;
            transform: translate3d(0, 0, 1vmin);
          }
        }
      </css-doodle>
      <div class="textCode1">
<pre class="line-numbers" style="padding-top: 0;padding-bottom: 0;"><code class="lang-XML">&lt;css-doodle style="margin:auto;position:relative;top: 50%;margin-top:-23vmin;"&gt;
  :doodle {
    @grid: 50x1 / 50vmin;
    perspective: 23vmin;
  }
  background: @multi(@r(200, 240), (
    radial-gradient(
      @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d) 15%,
      transparent 50%
    ) @r(100%) @r(100%) / @r(1%, 3%, .1) @lr() no-repeat
  ));
  @size: 80%;
  @place-cell: center;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: scale-up 20s linear infinite;
  animation-delay: calc(@i() * -.4s);
  @keyframes scale-up {
    0% {
      opacity: 0;
      transform: translate3d(0, 0, 0) rotate(0);
    }
    10% { 
      opacity: 1; 
    }
    95% {
      transform: translate3d(0, 0, @r(50vmin, 55vmin)) rotate(@r(-360deg, 360deg));
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 0, 1vmin);
    }
  }
&lt;/css-doodle&gt;</code></pre>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'my-CSSDoodle',
  components: {
  },
  props: {
  },
  watch: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    update(className) {
      const el = document.getElementsByClassName(className)[0]
      el.update()
    },
  }
}
</script>
<style lang="scss" scoped>
.cssDoodle {
  .title {
    text-align: left;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #faaca8;
  }
  .cssDoodle_item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    margin-bottom: 20px;
    .effect {
      width: 25%;
    }
    .code {
      width: 75%;
    }
  }
  .page {
    position: relative;
    overflow: hidden;
    .textCode {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -184px;
      margin-left: -373px;
      .line-numbers.language-xml {
        background: rgba(255, 255, 255, 0.9);
      }
      .line-numbers.language-xml::after {
        content: '';
        filter: blur(2px);
      }
    }
    .textCode1 {
      text-align: left;
      position: absolute;
      overflow: auto;
      height: 500px;
      width: 100%;
      top: 0;
      .line-numbers.language-xml {
        background: rgba(255, 255, 255, 0.7);
      }
      .line-numbers.language-xml::after {
        content: '';
        filter: blur(2px);
      }
    }
  }
}
</style>