export function randomLetter() {
	let letters = 'abcdefghijklmnopqrstuvwxyz';
	letters += letters.toUpperCase();
	letters += '!@#$%^&*()_+-=[]\\;\',./<>?:"{}|';

	return letters.charAt(Math.random() * letters.length);
}
