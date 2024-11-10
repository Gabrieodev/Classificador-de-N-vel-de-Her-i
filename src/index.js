const nomeHerois = ["Lanterna Verde", "Mulher Maravilha", "Apocalipse", "Darkseid", "Superman", "Anti-Monitor", "Espectro", "Batman"];
const xpHeroi = [925, 1630, 3700, 6910, 7700, 9000, 9999, 10500];

for (let i = 0; i < nomeHerois.length; i++) {
    let nome = nomeHerois[i];
    let xp = xpHeroi[i];
    let nivel;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001){
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
