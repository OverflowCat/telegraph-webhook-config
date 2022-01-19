<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" on:click={clickEvent}><slot></slot></button>

<script lang="ts">
  export let clickEvent: svelte.JSX.MouseEventHandler<HTMLButtonElement>;
</script>