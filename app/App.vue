<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">About</router-link></li>
        <li><router-link to="/blog">Blog Articles</router-link></li>
      </ul>
    </nav>

    <router-view>
      <slot />
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped>
nav {
  background: #24292e;
  margin: -1em -2em 0;

  > ul {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    list-style-type: none;
    padding: 0;

    li {
      flex-basis: 25%;

      &:first-child {
        border-left: 2px solid #000;
      }
      &:last-child {
        border-right: 2px solid #2b3137;
      }

      a {
        border-left: 1px solid #2b3137;
        border-right: 2px solid #000;
        color: #fff;
        display: block;
        height: 3em;
        line-height: 3em;
        text-align: center;
        text-decoration: none;
        text-shadow: 1px 1px 0 #000;

        &:hover {
          color: #ddd;
        }
      }
    }
  }
}
</style>
