<template>
  <div class="main-page">
    <div class="main-page__header">
      <page-title class="main-page__title">Добавление товара</page-title>
      <custom-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <div class="main-page__main">
      <div class="main-page__main-aside">
        <product-add-form
          class="main-page__main-aside-form"
          @create="createProduct"
        />
      </div>
      <div class="main-page__main-content">
        <product-list
          :products="sortedProduct"
          @remove="removeProduct"
          v-if="!isProductLoading"
        />
        <div v-else>Идет загрузка...</div>
      </div>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <h2>Товар успешно добавлен!</h2>
    </my-dialog>
  </div>
</template>

<script>
import ProductAddForm from "@/components/ProductAddForm";
import ProductList from "@/components/ProductList";
import axios from "axios";

export default {
  components: {
    ProductAddForm,
    ProductList,
  },
  data() {
    return {
      products: [],
      isProductLoading: false,
      selectedSort: "",
      limit: 7,
      sortOptions: [{ value: "title", name: "По наименованию" }],
      dialogVisible: false,
    };
  },
  methods: {
    toggleDialog() {
      this.dialogVisible = !this.dialogVisible;
    },
    createProduct(product) {
      this.products.push(product);
      this.toggleDialog();
      setTimeout(() => {
        this.toggleDialog();
      }, 1000);
    },
    removeProduct(product) {
      this.products = this.products.filter((p) => p.id !== product.id);
    },
    async fetchProducts() {
      try {
        this.isProductLoading = true;
        const response = await axios.get(
          "https://my-json-server.typicode.com/D2UZS/idaproject/products",
          {
            params: {
              _limit: this.limit,
            },
          }
        );
        this.products = response.data;
      } catch (e) {
        alert(e);
      } finally {
        this.isProductLoading = false;
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    sortedProduct() {
      return [...this.products].sort((product1, product2) =>
        product1[this.selectedSort]?.localeCompare(product2[this.selectedSort])
      );
    },
  },
};
</script>

<style scoped lang="scss">
.main-page {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--rhythm-2);
  }

  &__title {
    margin-right: var(--rhythm-2);
  }

  &__main {
    display: flex;
    gap: var(--rhythm-2);
    @media (max-width: 767px) {
      flex-direction: column;
    }

    &-aside {
      position: relative;
      width: 332px;
      flex-shrink: 0;
      @media (max-width: 767px) {
        width: 100%;
      }

      &-form {
        position: sticky;
        top: var(--rhythm-3);
      }
    }

    &-content {
      width: 100%;
    }
  }
}
</style>
