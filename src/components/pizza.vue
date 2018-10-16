<template>
  <div class="columns">
    <form class="column">
      <b-field label="Crust">
        <b-select placeholder="Crust Type" v-model="current.crust">
          <option
            v-for="crust of crustOptions"
            :key="crust"
            :value="crust">{{ crust }}</option>
        </b-select>
      </b-field>

      <b-field label="Sauce"></b-field>
      <b-field>
        <b-radio v-model="current.sauce" native-value="Tomato">Tomato</b-radio>
      </b-field>
      <b-field>
        <b-radio v-model="current.sauce" native-value="White">White</b-radio>
      </b-field>

      <b-field label="Toppings"></b-field>

      <b-field
        v-for="topping of toppings"
        :key="topping">
        <b-checkbox
          v-model="current.toppings"
          :native-value="topping"
          >{{ topping }}</b-checkbox>
      </b-field>
      <div>${{calcPizzaCost(current)}}</div>
      <div v-if="errorMessage" class="message is-danger">
        {{ errorMessage }}
      </div>
      <button
        v-if="!isEditing"
        type="button"
        class="button is-primary"
        @click="addToOrder">Add To Order</button>
      <button
        v-else
        type="button"
        class="button is-success"
        @click="savePizza">Save</button>
    </form>

    <div class="column content">
      <h2>Order</h2>

      <div v-for="(item, index) in order" :key="index">
        <h4>Item {{ index + 1 }}</h4>
        <div>{{item.crust}} Crust - {{item.sauce}} Sauce</div>
        <div>{{ item.toppings.join(', ') }}</div>
        <button type="button" class="button" @click="edit(item)">Edit</button>
        <button type="button" class="button is-danger" @click="remove(index)">Remove</button>
        ${{ calcPizzaCost(item) }}
      </div>

      <h3>SubTotal</h3>
      <div>${{ subTotal }}</div>
      <h3>Tax</h3>
      <div>${{ tax }}</div>
      <h3>Total</h3>
      <div>${{ Total }}</div>
    </div>
  </div>
</template>

<script>

function Pizza () {
  this.toppings = []
  this.crust = null
  this.sauce = 'Tomato'
  this.isBaked = false

  this.addTopping = function (topping) {
    this.toppings.push(topping)
  }
  this.bake = function () {
    this.isBaked = true
  }
}

let p = new Pizza()
p.addTopping('Pepporoni')
p.bake()

export default {
  data () {
    return {
      current: new Pizza(),
      isEditing: false,
      order: [],
      crustOptions: [
        'Hand Tossed',
        'Thin',
        'Pan'
      ],
      toppings: [
        'Pepperoni',
        'Sausage',
        'Mushroom',
        'Peppers',
        'Onion',
        'Olives',
        'Anchovies'
      ],
      basePizzaCost: 10,
      costPerTopping: 1.5,
      errorMessage: null
    }
  },
  computed: {
    subTotal () {
      let total = 0
      for (let i = 0; i < this.order.length; i++) {
        total += this.calcPizzaCost(this.order[i])
      }
      return total
    },
    tax () {
      return this.subTotal * 0.065
    },
    total () {
      return this.subTotal + this.tax
    }
  },
  methods: {
    calcPizzaCost (pizza) {
      let cost = this.basePizzaCost
      cost += Math.max(pizza.toppings.length - 2, 0) * this.costPerTopping
      console.log(cost)
      return cost
    },
    addToOrder () {
      if (!this.current.crust) {
        this.errorMessage = 'You must select a crust!'
        return
      }
      this.order.push(this.current)
      this.clearForm()
    },
    edit (pizza) {
      this.isEditing = true
      this.current = pizza
    },
    savePizza () {
      this.clearForm()
    },
    remove (index) {
      this.order.splice(index, 1)
    },
    clearForm () {
      this.current = new Pizza()
      this.isEditing = false
      this.errorMessage = null
    }
  }
}
</script>

<style>

</style>
