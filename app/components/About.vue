<template>
  <article>
    <h2>About this boilerplate</h2>

    <p>
      This site is built with its own boilerplate. Its build uses Jekyll, Webpack, Babel, and Vue. In fact, this content is loaded and styled with Vue components!
    </p>

    <div class="sections">
      <section class="development">
        <h3>Development</h3>

        <p>To run:</p>

        <pre><code class="lang-shell-session">$ npm run dev</code></pre>

        <p>
          Dev mode currently uses <code>webpack --watch</code> and <code>jekyll serve</code>.
          Though files are processed when modified, the browser still needs a refresh.
        </p>
      </section>

      <section class="production">
        <h3>Production</h3>

        <p>To build:</p>

        <pre><code class="lang-shell-session">$ npm run build</code></pre>
      </section>
    </div>
  </article>
</template>

<script>
import Prism from 'prismjs'

export default {
  name: 'About',
  mounted: function () {
    Prism.highlightAll();
  }
}
</script>

<style scoped>
@media (min-width: 667px) {
  .sections {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    section {
      flex-basis: 45%;
    }
  }
}
</style>
