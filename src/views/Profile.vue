<template>
  <form>
    <h1>Profile</h1>
    <div class="columns">
      <div class="column is-8">

        <div class="columns">
          <div class="column is-5">
          <b-field label="First Name">
            <b-input placeholder="John"></b-input>
          </b-field>
          </div>
          <div class="column is-7">
          <b-field label="Last Name">
            <b-input placeholder="Smith"></b-input>
          </b-field>
          </div>
        </div>
        <div class="columns is-multiline" >
          <div class="column is-4">
            <b-field label="Birthdate">
              <b-datepicker
                placeholder="mm/dd/yyyy"
                icon="calendar"
                :readonly="false">
              </b-datepicker>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Email">
              <b-input placeholder="Email"></b-input>
            </b-field>
            <div class="field">
              <b-checkbox>Subscribe to updates</b-checkbox>
            </div>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-12">
            <b-field label="Address">
              <b-input placeholder="Street Address"></b-input>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field>
              <b-input placeholder="City"></b-input>
            </b-field>
          </div>
          <div class="column is-3">
            <b-field label="">
              <b-select placeholder="State" expanded>
                <option v-for="state of usstates" :key="state" :value="state">{{state}}</option>
              </b-select>
            </b-field>
          </div>
          <div class="column is-3">
            <b-field label="">
              <b-input placeholder="Zip Code"></b-input>
            </b-field>
          </div>
        </div>

        <div class="field">
          <label class="label">Sex</label>
          <b-radio v-model="radio"
            native-value="Male">
            Male
          </b-radio><br />
          <b-radio v-model="radio"
            native-value="Female">
            Female
          </b-radio><br />
          <b-radio v-model="radio"
            native-value="Prefer not to specify">
            Prefer not to specify
          </b-radio>
        </div>
       <div class="has-text-right">
        <button type="button" class="button">Cancel</button> &nbsp;

        <save-button @click="save"></save-button>
       </div>

      </div>
    </div>
    <!--
      First Name, Last Name
      Birthdate
      Address - State should be a drop down
      pHone
      email
      Subscribe?
      Sex - radio buttons
      Save button

    -->
  </form>
</template>

<script>
export default {
  data () {
    return {
      radio: '',
      usstates: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']
    }
  },
  methods: {
    test () {
      if (this.radio) {
        // does this execute?
      }
    },
    save (e) {
      console.log('Saved!')
    }
  }
}
</script>

<style>

</style>
