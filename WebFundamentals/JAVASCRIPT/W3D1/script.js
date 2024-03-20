var age = 24;
var male = true;
var female = false;
var name = 'Endi';
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursady', 'Friday', 'Saturday', 'Sunday'];

var person = {
    'name': 'Endi',
    'lastName': 'Mimini',
    'age': 24,
    'email': 'endimimini@betaplan.al',
    'languages': ['English', {'Native': 'Albanian', 'Non-native': 'English'}, 'Italian']
}

console.log('Something')
console.log(person.languages[1])
console.log(person.languages[1]['Native'])
console.log(person.languages[1].Native[1])

'languages': ['English', {'Native': ['Something','Albanian'], 'Non-native': 'English'}, 'Italian']