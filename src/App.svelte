<script lang="ts">
  import Checkbox from "./Checkbox.svelte";
  import TextInput from "./TextInput.svelte";
  import TextInputUrl from "./TextInputUrl.svelte";
  import TextAreaShow from "./TextAreaShow.svelte";
  import Paper from "./Paper.svelte";
  import RadioForm from "./RadioForm.svelte";
  // import { onMount } from "svelte";

  /*   function toast(message: any) {
    onMount(async () =>
      eval(`window.mdui.snackbar({
          message: "${message}",
        })`)
    );
  } */

  let tokenMethod = 1;
  let accountInfo = "";
  let config: PublishParameters = {
    article: {
      url: "{{url}}",
      title: "{{title}}",
      content: "{{content}}",
      desc: "{{desc}}",
      tags: "{{tags}}",
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
  let json, _config: any;
  function createAccount(clickEvent: any) {
    window.open(
      `https://api.telegra.ph/createAccount?short_name=srplugin&author_name=${
        config.telegram.name || "SimpreadPluginUser"
      }`
    );
  }

  $: {
    if (tokenMethod === 2) {
      try {
        let account: any = JSON.parse(accountInfo);
        config.telegraph.access_token =
          account?.result?.access_token || account?.access_token || "";
      } catch (e) {
        console.log(e);
      }
    }
    _config = JSON.parse(JSON.stringify(config));
    if (_config.telegraph.access_token == "")
      delete _config.telegraph.access_token;
    if (_config.telegraph.author_name == "")
      delete _config.telegraph.author_name;
    delete _config.style;
    if (_config.telegram.bind == false) _config.telegram = { bind: false };
    else _config.telegram.bind = true;
    json = JSON.stringify(_config, null, 2);
  }
</script>

<div class="mdui-container">
  <h1>简悦 Telegraph Webhook 配置生成器</h1>
  <!--   <Checkbox bind:checked={isManuallyInputToken}
    >手动输入 Telegraph 账号凭证
    <small>（即 <code>access_token</code>）</small></Checkbox
  > -->
  <h2 class="mdui-text-color-theme-600">Telegraph 设置</h2>

  <RadioForm groupName="tokenMethod" bind:value={tokenMethod} />
  {#if tokenMethod === 2}
    <Paper title="手动生成">
      <button
        class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
        on:click={createAccount}>创建 Telegraph 账户</button
      >
      <TextInput label="生成结果" bind:value={accountInfo} />
      请点击上方按钮，在打开的页面中全选并复制，然后粘贴到此处，我们会自动处理。
    </Paper>
  {:else if tokenMethod === 3}
    <Paper title="手动输入">
      <TextInput float={false}
        label="Telegraph access_token"
        bind:value={config.telegraph.access_token}
      />
    </Paper>
  {:else}
    <Paper>
      <p>您将无法修改生成的文章。</p>
    </Paper>
  {/if}

  <div class="mdui-divider" />

  <h2 class="mdui-text-color-theme-600">Telegram 设置</h2>
  <Checkbox bind:checked={config.telegram.bind}
    >在文章中显示频道加入按钮</Checkbox
  >
  {#if config.telegram.bind}
    <Paper title="频道信息设置">
      <TextInput label="作者名称" bind:value={config.telegram.name} maxlength="128"/>
      <TextInputUrl label="频道链接" bind:value={config.telegram.link} maxlength="512"/>
    </Paper>
  {/if}
  <div class="mdui-divider" />

  <h2 class="mdui-text-color-theme-600">生成结果</h2>
  <TextAreaShow label="生成的 Webhook 配置" value={json} />
  <button id="generated" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent"
    on:click={()=>{
      navigator.clipboard.writeText(json).then(function() {
      console.log('Copying to clipboard succeeded!');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
    }}>复制</button>
</div>

<style>
  .mdui-divider {
    margin: 1rem 0;
  }
  .mdui-container {
    padding-top: 24px;
    padding-bottom: 48px;
  }
</style>
