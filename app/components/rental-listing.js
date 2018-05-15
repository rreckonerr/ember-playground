import Component from '@ember/component';

export default Component.extend({
	isWide: false,
	actions: {
		toogleImageSize() {
			this.toggleProperty('isWide');
		}
	}
});
