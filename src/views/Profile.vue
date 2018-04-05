<template>
  <form>
    <h1>Profile</h1>
        <b-field label="Name">
            <b-input value="First Name"></b-input>
            <b-input value="Last Name"></b-input>
        </b-field>
       
    <b-field label="Birthdate">
        <b-datepicker
            placeholder="Type or select a date..."
            icon="calendar-today"
            :readonly="false">
        </b-datepicker>
    </b-field>

       <b-field label="Address">
            <b-input value="City"></b-input>
        </b-field>
        <b-field label="">
          <b-select placeholder="Select State">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
            </b-select>
        </b-field>

       <b-field label="">
            <b-input value="Zip Code"></b-input>
        </b-field>
        
        <b-field label="Email">
            <b-input value="Email"></b-input>
        </b-field>
        
         <div class="field">
            <b-checkbox>Subscribe to updates</b-checkbox>
        </div>      
    <h5>Sex</h5>
        <div class="block">
            <b-radio v-model="radio"
                native-value="Male">
                Male
            </b-radio>
            <b-radio v-model="radio"
                native-value="Female">
                Female
            </b-radio>
            <b-radio v-model="radio"
                native-value="Prefer not to specify">
                Prefer not to specify
            </b-radio>
        </div>
        <a class="button">Save</a>
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

}
</script>

<style>

</style>
