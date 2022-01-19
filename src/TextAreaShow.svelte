<script lang="ts">
  export let label = "";
  export let value = "";
</script>

<!-- 禁用状态 -->
<div class="mdui-textfield mdui-textfield-floating-label">
  <label class="mdui-textfield-label">{label}</label>
  <textarea class="mdui-textfield-input" disabled {value} />
</div>

<style>
  textarea {
    font-family: monospace;
  }
</style>
