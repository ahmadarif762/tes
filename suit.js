var player = prompt("memilih suit \n (cth: batu,gunting,kertas");
var computer = Math.random();

if (computer < 0.34) {
	computer = "batu"
} else if (computer >= 0.34 && computer < 0.67) {
	computer = "kertas"
} else {
	computer = "gunting"
}
console.log(computer)

var hasil = " ";

if (player == computer) {
	hasil = "seri"
} else if(player == "batu"){
	if(computer == "gunting"){
		hasil = "menang"
} else {hasil = "kalah"}

} else if (player == "gunting"){
	if (computer == 'kertas'){
		hasil = "menang"
	} else {hasil = "kalah" }

} else if (player == "kertas"){
	if (computer == 'batu') {
		hasil = "menang"
	} else {hasil = "kalah"}
}

alert("kamu memilih " + player + " dan computer memilih " + computer + "\nmaka hasilnya kamu " + hasil)
