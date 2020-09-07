<template>
  <div class="admin-pages">
    <PageTitle icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros & Cia" />
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
export default {
  name: "AdminPages",
  components: { PageTitle }
};
</script>

<style >
.content {
  grid-area: content;
  background-color: #efefef;
  padding: 20x;
}
</style>


