<template>
  <form>
    <h1>Profile</h1>
    <b-field label="Name">
      <b-input placeholder="First Name"></b-input>
      <b-input placeholder="Last Name"></b-input>
    </b-field>

    <b-field label="Birthdate">
      <b-datepicker
        placeholder="mm/dd/yyyy"
        icon="calendar"
        :readonly="false">
      </b-datepicker>
    </b-field>

    <b-field label="Address">
      <b-input placeholder="City"></b-input>
    </b-field>
    
    <b-field label="">
      <b-select placeholder="Select State">
        <option v-for="state of usstates" :key="state" :value="state">{{state}}</option>
      </b-select>
    </b-field>

    <b-field label="">
      <b-input placeholder="Zip Code"></b-input>
    </b-field>

    <b-field label="Email">
      <b-input placeholder="Email"></b-input>
    </b-field>

    <div class="field">
      <b-checkbox>Subscribe to updates</b-checkbox>
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
    <button type="button" class="button is-primary">Save</button>
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
      usstates: ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'],
      test () {
        for (var state of this.usstates) {
          console.log(state)
        }
      }
    }
  }
}
</script>

<style>

</style>
