<script lang="ts">
  interface RadioOption {
    label: string;
    value: any;
    // checked: boolean;
  }
  export let options: RadioOption[];
  export let groupName: string;
  export let value: any;
</script>

<form>
  {#each options as option}
    <label class="mdui-radio">
      <input
        type="radio"
        name={groupName}
        value={option.value}
        checked={option.value}
      />
      <i class="mdui-radio-icon" />
      {option.label}
    </label>
  {/each}
</form>
