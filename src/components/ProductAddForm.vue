<template>
  <form class="product-add-form" @submit.prevent>
    <div class="product-add-form__inputs">
      <div class="product-add-form__line">
        <label
          class="product-add-form__label product-add-form__label--required"
          for="input-product-title"
        >
          Наименование товара
        </label>
        <custom-input
          v-focus
          v-model="product.title"
          class="product-add-form__input"
          id="input-product-title"
          placeholder="Введите наименование товара"
        />
      </div>
      <div class="product-add-form__line">
        <label
          class="product-add-form__label product-add-form__label"
          for="input-product-description"
        >
          Описание товара
        </label>
        <custom-textarea
          v-model="product.description"
          class="product-add-form__input"
          placeholder="Введите описание товара"
          id="input-product-description"
        ></custom-textarea>
      </div>
      <div class="product-add-form__line">
        <label
          class="product-add-form__label product-add-form__label--required"
          for="input-product-link-img"
        >
          Ссылка на изображение товара
        </label>
        <custom-input
          v-model="product.src"
          class="product-add-form__input"
          placeholder="Введите ссылку"
          id="input-product-link-img"
        />
      </div>
      <div class="product-add-form__line">
        <label
          class="product-add-form__label product-add-form__label--required"
          for="input-product-price"
        >
          Цена товара
        </label>
        <custom-input
          v-model="product.price"
          class="product-add-form__input"
          placeholder="Введите цену"
          id="input-product-price"
        />
      </div>
    </div>
    <custom-button
      class="product-add-form__btn"
      @click="createProduct"
      :disabled="
        !this.product.title || !this.product.src || !this.product.price
      "
      >Добавить товар</custom-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: "",
        description: "",
        src: "",
        price: "",
      },
    };
  },
  methods: {
    createProduct() {
      this.product.id = Date.now();
      this.$emit("create", this.product);
      this.product = {
        title: "",
        description: "",
        src: "",
        price: "",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.product-add-form {
  display: flex;
  flex-direction: column;

  padding: var(--rhythm-3);

  background-color: var(--background-color);
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  &__inputs {
    display: flex;
    flex-direction: column;
    gap: var(--rhythm-2);

    margin-bottom: var(--rhythm-3);
  }

  &__line {
    position: relative;
  }

  &__label {
    position: relative;
    display: inline-block;
    margin-bottom: calc(var(--rhythm-1) / 2);

    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: var(--dark-color);

    &--required {
      &::before {
        content: "";

        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(100%);

        display: block;
        width: 4px;
        height: 4px;

        background-color: var(--warning-color);
        border-radius: 50%;
      }
    }
  }
}
</style>
