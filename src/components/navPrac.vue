<template>
	<b-navbar toggleable type="inverse" variant="success" id="cauldron-navbar">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="#">
      <span>Cauldron</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">
      
      <b-nav is-nav-bar>
        <b-nav-item to="/home"><i class="fa fa-home" aria-hidden="true"></i>Home</b-nav-item>
        <b-nav-item to="/about"><i class="fa fa-book" aria-hidden="true"></i>About</b-nav-item>
        <b-nav-item>Contact Us</b-nav-item>
      </b-nav>
      
      <b-nav is-nav-bar class="ml-auto">
        <c-login-modal></c-login-modal>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item to="#">EN</b-dropdown-item>
          <b-dropdown-item to="#">ES</b-dropdown-item>
          <b-dropdown-item to="#">RU</b-dropdown-item>
          <b-dropdown-item to="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        
        <b-nav-item-dropdown right>
          
          <!-- Using text slot -->
          <template slot="text">
            <span style="font-weight: bold;">User</span>
          </template>
          
          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
       
      </b-nav>
    </b-collapse>
  </b-navbar>		
</template>

<script>
  import Modal from './Modal.vue';
	export default {
    components: {
      'c-login-modal': Modal
    },
		data() {
			return {
        
			}
    },
      methods: {
        
      }
	}
</script>

<style>
	
</style>