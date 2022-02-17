<template>
  <div class="product-list" v-if="products.length > 0">
    <transition-group name="product-list">
      <product-item
        v-for="product in products"
        :product="product"
        :key="product.id"
        @remove="$emit('remove', product)"
      />
    </transition-group>
  </div>
  <h2 v-else>Список товаров пуст :(</h2>
</template>

<script>
import ProductItem from "@/components/ProductItem";

export default {
  components: { ProductItem },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.product-list {
  display: grid;
  gap: var(--rhythm-2);
  grid-template-columns: repeat(auto-fill, minmax(332px, 1fr));
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  }
}

/* Анимация */
.product-list-item {
  display: inline-block;
  margin-right: 10px;
}
.product-list-enter-active,
.product-list-leave-active {
  transition: all 0.4s ease;
}
.product-list-enter-from,
.product-list-leave-to {
  opacity: 0;
  transform: scale(0);
}

.product-list-move {
  transition: transform 0.4s ease;
}
</style>

