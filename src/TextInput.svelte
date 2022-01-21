<script lang="ts">
  export let label = "";
  export let value = "";
  export let maxlength = "0";
  export let float = true;
  export let required = false;
  export let errMessage = "";
  export let icon = "";
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
{#if icon != ""}
<i class="mdui-icon material-icons">{icon}</i>
{/if}
  <label class="mdui-textfield-label">{@html label}</label>
  {#if maxlength != "0"}
    <input
      class="mdui-textfield-input"
      {maxlength}
      {required}
      type="text"
      bind:value
    />
  {:else}
    <input class="mdui-textfield-input" type="text" bind:value {required} />
  {/if}
  {#if errMessage != ""}
    <div class="mdui-textfield-error">{errMessage}</div>
  {/if}
</div>

<style>
  input {
    font-family: monospace;
  }
</style>
