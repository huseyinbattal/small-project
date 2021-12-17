//Mark ve John'a ait boy ve kilo bilgilerini promt kullanarak değişkenlere atıyoruz.
let MarkMass = prompt("Mark'ın kilosunu giriniz.");
let MarkHeight = prompt("Mark'ın boyunu giriniz.");
let JohnMass = prompt("John'un kilosunu giriniz.");
let JohnHeight = prompt("John'un kilosunu giriniz.");

//console.log ile kullanıcının prompt ile girmiş olduğu  boy ve kilo verileri yazdırıyoruz.
console.log(`Mark ${MarkMass} kilogram ve ${MarkHeight} metredir.`);
console.log(`Mark'ın beden kitle indeksi: ${calculateMarkBMI()} olarak hesaplanmıştır`);
console.log(`John ${JohnMass} kilogram ve ${JohnHeight} metredir.`);
console.log(`John'un beden kitle indeksi: ${calculateJohnBMI()} olarak hesaplanmıştır`);

// calculateJohnBMI() ve  calculateMarkBMI() adında bir fonksiyon oluşturuyoruz ve bu fonsiyon kiloyu boyun karesine bölerek beden-kitle indeksini hesaplıyor.
//Öncelikle John'un beden-kitle indeksini hesaplayan bir fonksiyon yazalım.
function calculateJohnBMI() {
    return (Math.floor(JohnMass / (JohnHeight * JohnHeight)));
}

//Şimdi de Mark'ın beden-kitle indeksini hesaplayan bir fonksiyon yazalım.
function calculateMarkBMI() {
    return (Math.floor(MarkMass / (MarkHeight * MarkHeight)));
}

//fonksiyonlarımızla hesaplamış olduğumuz return değerlerini bir değişkene atayalım.
let markBMI=calculateMarkBMI();
let JohnBMI=calculateJohnBMI();

// controlBMI diye iki parametreli (name,bmi) bir fonksiyon oluşturalım. bnmi değerini if else ile koşula bağlayıp return ile döndürüyoruz.
function controlMarkBMI(bmi) {
    if (bmi < 18.5) {
        return "Mark zayıf "
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Mark normal "
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Mark şişman "
    } else {
        return "Mark obez "
    }
}

function controlJohnkBMI(bmi) {
    if (bmi < 18.5) {
        return "John zayıf "
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "John normal "
    } else if (bmi >= 25 && bmi < 29.9) {
        return "John şişman "
    } else {
        return "John obez "
    }
}

//conrolBMI adındaki fonksiyonumuza argumanlarımızı ("Marké,markBMI) girerek fonksiyonumuzu çalıştıralım ve consol.log ile sonucu consol'da görelim.
console.log(controlMarkBMI(markBMI));
console.log(controlJohnkBMI(JohnBMI));

