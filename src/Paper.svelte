<div class="mdui-center mdui-hoverable paper">
  {#if title}
  <h3 class="mdui-text-color-theme">{ title }</h3>
  {/if}
  <slot></slot>
</div>

<style>
  .paper {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;    
  }
</style>

<script lang="ts">
  export let title = "";
</script>