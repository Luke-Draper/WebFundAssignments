var users = [{ name: "Michael", age: 37 }, { name: "John", age: 30 }, { name: "David", age: 27 }];
for (idx in users) {
	if (users[idx].name == "John") {
		console.log(users[idx].age);
		break;
	}
}
console.log(users[0].name);
for (idx in users) {
	console.log(users[idx].name + "" + users[idx].age);
}