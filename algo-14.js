// Funksiya: Arraydəki bütün rəqəmlərin ikinci parametrin böləni olub olmadığını yoxlayır
function areAllDivisors(array, divisor) {
    // Arraydəki hər bir ədəd üçün yoxlama aparır
    for (const number of array) {
        // Əgər ədəd divisor ilə bölünmüyorsa, false qaytarır
        if (number % divisor !== 0) {
            return false;
        }
    }
    // Əgər bütün ədədlər divisor ilə bölünürsə, true qaytarır
    return true;
}

// Nümunə istifadəsi
const numbersArray = [2, 4, 6, 8];
const divisor = 2;
const result = areAllDivisors(numbersArray, divisor);
console.log(`Bütün ədədlər ${divisor} ilə bölünürmü?`, result);