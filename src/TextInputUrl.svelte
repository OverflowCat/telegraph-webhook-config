<script lang="ts">
  export let label = "";
  export let value = "";
  export let maxlength = "0";
  export let float = true;
  import mdui from "mdui";
  import { onMount } from "svelte";
  onMount(async () => {
    mdui.mutation();
    mdui.updateTextFields();
  });
</script>

<div
  class={float
    ? "mdui-textfield mdui-textfield-floating-label"
    : "mdui-textfield"}
>
<i class="mdui-icon material-icons">link</i>
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
