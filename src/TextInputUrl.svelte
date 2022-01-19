<script lang="ts">
  export let label = "";
  export let value = "";
  export let maxlength = "0";
  export let float = true;
</script>

<div
  class={float
    ? "mdui-textfield mdui-textfield-floating-label"
    : "mdui-textfield"}
>
  <label class="mdui-textfield-label">{@html label}</label>
  {#if maxlength != "0"}
    <input class="mdui-textfield-input" type="url" bind:value {maxlength} />
  {:else}
    <input class="mdui-textfield-input" type="url" bind:value />
  {/if}
</div>

<style>
  input {
    font-family: monospace;
  }
</style>
