<script lang="ts">
  export let label = "";
  export let value = "";
  export let maxlength = "0";
  export let float = true;
  import mdui from "mdui";
  import { onMount } from "svelte";
  onMount(async () => mdui.mutation());
</script>

<!-- 禁用状态 -->
<div
  class={float
    ? "mdui-textfield mdui-textfield-floating-label"
    : "mdui-textfield"}
>
  <label class="mdui-textfield-label">{label}</label>
  {#if maxlength != "0"}
    <textarea class="mdui-textfield-input" disabled {value} {maxlength} />
  {:else}
    <textarea class="mdui-textfield-input" disabled {value} />
  {/if}
</div>

<style>
  textarea {
    font-family: monospace;
  }
</style>
