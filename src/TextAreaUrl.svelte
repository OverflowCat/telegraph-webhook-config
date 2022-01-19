<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">{@html label}</label>
  <input class="mdui-textfield-input" type="url" bind:value={value}/>
</div>

<script>
  export let label = "";
  export let value = "";
</script>

<style>
  input {
    font-family: monospace;
  }
</style>