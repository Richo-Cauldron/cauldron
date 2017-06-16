<template>
	<div>
    <b-alert show>
        Default Alert
    </b-alert>

    <b-alert variant="success" show>
        Success Alert
    </b-alert>

    <b-alert variant="danger" dismissible :show="showDismissibleAlert" @dismissed="showDismissibleAlert=false">
        Dismissible Alert!
    </b-alert>

    <b-alert :show="dismissCountDown" dismissible variant="warning" @dismiss-count-down="countDownChanged" class="btn btn-primary">
        This alert will dismiss after {{dismissCountDown}} seconds... <h1>argljdfjhdfvjh</h1>
    </b-alert>

    <b-btn @click="showAlert" variant="info" class="m-1">Show alert with count-down timer</b-btn>
    <b-btn @click="showDismissibleAlert=true" variant="info" class="m-1">
        Show dismissible alert ({{showDismissibleAlert?'visible':'hidden'}})
    </b-btn>
</div>
</template>

<script>
	import {bAlert, bBtn} from 'bootstrap-vue/lib/components';
	export default {
		components: {
			'b-alert': bAlert,
			'b-btn': bBtn
		},
		data() {
			return {
				dismissCountDown: null,
				showDismissibleAlert: false
			}
		},
		methods: {
			countDownChanged(dismissCountDown) {
				this.dismissCountDown = dismissCountDown;
			},
			showAlert() {
				this.dismissCountDown = 5;
			}
		}
	}
</script>

<style>
	
</style>