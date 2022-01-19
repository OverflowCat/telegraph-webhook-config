<label class="mdui-switch">
  <input type="checkbox" bind:checked={checked}/>
  {@html label}
  <i class="mdui-switch-icon"></i>
</label>

<script lang="ts">
  export let checked = false;
  export let label = "";
</script>