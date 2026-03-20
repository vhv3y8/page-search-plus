<script>
  import Key from "../../lib/components/Key.svelte"
  import Started from "./sections/Started.svelte"
  // import "./style/app.css?inline"
</script>

<Started />

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true">
      <use href="/icons.svg#documentation-icon"></use>
    </svg>
    <h2>Documentation</h2>

    <Key id="hi" themeReversed={true}>Ctrl+Enter</Key>

    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank" rel="noreferrer">
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://svelte.dev/" target="_blank" rel="noreferrer">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <img src="icon128.png" alt="" />
    <img src="icon128.png?raw" alt="" />
    <img src="favicon.svg" alt="" />
    <img src="favicon.svg?raw" alt="" />
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li>
        <a
          href="https://github.com/vitejs/vite"
          target="_blank"
          rel="noreferrer"
        >
          <svg class="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#github-icon"></use>
          </svg>
          GitHub
        </a>
      </li>
      <li>
        <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
          <svg class="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#discord-icon"></use>
          </svg>
          Discord
        </a>
      </li>
      <li>
        <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
          <svg class="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#x-icon"></use>
          </svg>
          X.com
        </a>
      </li>
      <li>
        <a
          href="https://bsky.app/profile/vite.dev"
          target="_blank"
          rel="noreferrer"
        >
          <svg class="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#bluesky-icon"></use>
          </svg>
          Bluesky
        </a>
      </li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>

<style>
  :global(body) {
    background-color: red;
  }

  #docs {
    background-color: red;
  }
</style>
