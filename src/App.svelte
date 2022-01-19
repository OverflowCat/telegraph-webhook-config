<script lang="ts">
  import FormField from "@smui/form-field";
  import Checkbox from "@smui/checkbox";
  import TextField from "@smui/textfield";
  import Icon from "@smui/textfield/icon";
  import HelperText from "@smui/textfield/helper-text";
  import Card, { Content } from "@smui/card";
  import Paper, { Title, Content } from '@smui/paper';

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
</script>

<main>
  <section>
    <h1>简悦 Telegraph Webhook 配置生成器</h1>
    <div class="margins">
      <div>
        <FormField>
          <Checkbox bind:checked={config.telegram.bind} />
          <span slot="label"> 在 Instant View 中显示加入频道按钮 </span>
        </FormField>
      </div>

      <Paper color="secondary">
        <Content>
          <div>
            <TextField bind:value={config.telegram.name} label="作者名称">
              <HelperText slot="helper"
                >显示在文章标题下方，留空则使用文章的网址</HelperText
              >
            </TextField>
          </div>
          <div>
            <TextField bind:value={config.telegram.link} label="频道链接">
              <HelperText slot="helper"
                >频道的邀请链接，公开/私有皆可</HelperText
              >
            </TextField>
          </div>
        </Content>
      </Paper>
    </div>
  </section>
</main>

<style>
  h1 {
    font-weight: 400;
  }
</style>
