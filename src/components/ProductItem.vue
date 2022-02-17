<template>
  <div class="product-item">
    <router-link :to="`/product/${product.id}`" class="product-item__content">
      <div class="product-item__content-pic">
        <img v-if="product.src" :src="product.src" />
        <img v-else src="@/assets/images/product-img.jpg" />
      </div>
      <div class="product-item__content-txt">
        <div class="product-item__title">{{ product.title }}</div>
        <div class="product-item__description">
          <p>{{ product.description }}</p>
        </div>
        <div class="product-item__price">{{ product.price }} руб.</div>
      </div>
    </router-link>
    <btn-remove
      class="product-item__remove"
      @click="$emit('remove', product)"
    />
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.product-item {
  position: relative;

  &__content {
    background-color: var(--background-color);
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    cursor: pointer;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;

    color: var(--main-color);

    &-pic {
      position: relative;

      width: 100%;
      padding-top: calc(200 * 100% / 332);

      background-color: var(--grey-color);

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
      }
    }

    &-txt {
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      padding: {
        top: var(--rhythm-2);
        right: var(--rhythm-2);
        bottom: var(--rhythm-3);
        left: var(--rhythm-2);
      }

      *:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__title {
    margin-bottom: var(--rhythm-2);

    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }

  &__description {
    margin-bottom: var(--rhythm-3);

    font-size: 16px;
    line-height: 20px;
  }

  &__price {
    margin-top: auto;

    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }

  &__remove {
    position: absolute;
    top: -8px;
    right: -8px;

    opacity: 0;
    @media (max-width: 767px) {
      opacity: 1;
    }
  }

  &__content:hover ~ &__remove {
    opacity: 1;
  }
}
</style>

