<script lang="ts">
  export let value;
  export let groupName;
</script>

<form class="mdui-container">
  <label class="mdui-radio mdui-col">
    <input type="radio" name={groupName} bind:group={value} value={1} />
    <i class="mdui-radio-icon" />
    使用简悦服务器端默认凭证
  </label>
  <label class="mdui-radio mdui-col">
    <input type="radio" name={groupName} bind:group={value} value={2} />
    <i class="mdui-radio-icon" />
    创建新凭证
  </label>
  <label class="mdui-radio mdui-col">
    <input type="radio" name={groupName} bind:group={value} value={3} />
    <i class="mdui-radio-icon" />
    输入已有凭证
  </label>
</form>

<style>
  form {
    margin: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 28px;
  }

</style>