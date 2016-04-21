import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Bricks = new Mongo.Collection('bricks');

Meteor.methods({
	'bricks.insert'(data) {

		Bricks.insert({
			device: data.device,
			lat: data.lat,
			long: data.log,
			location: data.location,
			street: data.street,
			createdAt: new Date(),
		});
	},
});