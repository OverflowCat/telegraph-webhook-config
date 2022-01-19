<label class="mdui-checkbox">
  <input type="checkbox" bind:checked={checked}/>
  <i class="mdui-checkbox-icon"></i>
  <slot></slot>
</label>

<script lang="ts">
  export let checked = false;
</script>