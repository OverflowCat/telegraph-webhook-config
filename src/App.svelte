<script lang="ts">
  import Checkbox from "./Checkbox.svelte";
  import TextInput from "./TextInput.svelte";
  import TextInputUrl from "./TextInputUrl.svelte";
  import TextAreaShow from "./TextAreaShow.svelte";
  import Paper from "./Paper.svelte";
  import RadioForm from "./RadioForm.svelte";

  // import Switch from "./Switch.svelte";
  import Button from "./Button.svelte";

  const opt = [
    { label: "生成新凭证", value: 1, /* checked: true */ },
    { label: "已有凭证", value: 2, /* checked: false */ },
    { label: "使用简悦默认凭证", value: 3, /* checked: false */ },
  ];

  let tokenMethod = 1;
  let accountInfo = "";
  let config: PublishParameters = {
    article: {
      url: "default",
      title: "default",
      content: "default",
      desc: "default",
      tags: "default",
    },
    telegram: {
      bind: false,
      name: "",
      link: "",
    },
    telegraph: {
      access_token: "",
      author_name: "",
      author_url: "",
    },
    style: {
      use_desc: false,
    },
  };
  function clickEventHandler(clickEvent: any) {
    
  }
</script>

<div class="mdui-container">
  <h1>简悦 Telegraph Webhook 配置生成器</h1>
  <!--   <Checkbox bind:checked={isManuallyInputToken}
    >手动输入 Telegraph 账号凭证
    <small>（即 <code>access_token</code>）</small></Checkbox
  > -->
  <Paper title="Telegraph 账号凭证">
    <RadioForm options={opt} groupName="tokenMethod" bind:value={tokenMethod}/>
    {#if tokenMethod === 1}
      <TextInput
        label="Telegraph access_token"
        bind:value={config.telegraph.access_token}
      />
    {:else}
      <button
        class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
        on:click={clickEventHandler}>创建 Telegraph 账户</button
      >
      <TextInput label="生成结果" bind:value={accountInfo} />
      请点击上方按钮，在打开的页面中全选并复制，然后粘贴到此处，我们会自动处理。
    {/if}
  </Paper>
  <div class="mdui-divider" />
  <Checkbox bind:checked={config.telegram.bind}
    >在文章中显示频道加入按钮</Checkbox
  >
  {#if config.telegram.bind}
    <Paper title="频道信息设置">
      <TextInput label="作者名称" bind:value={config.telegram.name} />
      <TextInputUrl label="频道链接" bind:value={config.telegram.link} />
    </Paper>
  {/if}
  <TextAreaShow
    label="生成的 Webhook 配置"
    value={JSON.stringify(config, null, 2)}
  />
</div>

<style>
  .mdui-divider {
    margin: 1rem 0;
  }
</style>
