<template>
	<div>
	<b-nav-item @click="$root.$emit('show::modal','modalLogin')">Show Modal</b-nav-item>
        <b-modal id="modalLogin" title="Submit your name" @ok="submit" @shown="clearName">
        	<form @submit.stop.prevent="submit">
          		<b-form-input type="text" placeholder="Enter your name" v-model="name"></b-form-input>
        	</form>
        </b-modal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
        name: ""
			}
    },
      methods: {
        submit: function() {
          alert('Submitted');
        },
        clearName: function() {
          this.name = '';
        }
      }
	}
</script>

<style>
	
</style>