//1 without mutation- without modifying original array
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let newCountries=[]
  for(let i=0;i<countries.length;i++){
    newCountries.push(countries[i])
  }
  console.log(newCountries)

//2
  let sortedCounries='';
    sortedCounries=newCountries.sort()
  console.log(sortedCounries) 

//3i 
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let sortWebTechs=webTechs.sort();
console.log(sortWebTechs)
//3ii
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let sortMernStack=mernStack.sort();
console.log(sortMernStack) 

//4
const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
let landCountries=[];
for(i=0;i<countries.length;i++){
  if(countries[i].includes('land')){
    landCountries.push(countries[i])
  }
}
console.log(landCountries)

//5
  let maxCountries=[]
  let length=[]
  let j;
  let arrIndex=[]
  for (let i= 0; i< countries.length; i++) {
    
    length.push(countries[i].length);}

    j=Math.max(...length)
    for(let i=0;i<length.length;i++){
    if(countries[i].length===j){
      arrIndex.push(countries[i])
    }

  }
  console.log(arrIndex)
  console.log(j)

//6
let landCountries=[];
for(i=0;i<countries.length;i++){
  if(countries[i].includes('land')){
    landCountries.push(countries[i])
  }
}
console.log(landCountries)

//7
  let fourCharactersCountries=[];
  for(i=0;i<countries.length;i++){
    if(countries[i].length===4){
      fourCharactersCountries.push(countries[i])
    }
  }
  console.log(fourCharactersCountries)

//8
  let spaceCountries=[];
  for(i=0;i<countries.length;i++){
    if(countries[i].includes(' ')){
      spaceCountries.push(countries[i])
    }
  }
  console.log(spaceCountries)

//9
let reverseCountries = countries.reverse()
let capsCountries = [];
/* for(const upper of reverseCountries) */
for(i=0;i<reverseCountries.length;i++){
  capsCountries.push(reverseCountries[i].toUpperCase())
}
console.log(capsCountries)