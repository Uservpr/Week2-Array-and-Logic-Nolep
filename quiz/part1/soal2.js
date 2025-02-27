let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let fullName = input[1].trim() + " Elsharawy"; 
    let province = "Provinsi " + input[2];
    let dateParts = input[3].split("/");
    let formattedDate = `${dateParts[1]}-${dateParts[0]}-${dateParts[2]}`;
    let limitedName = fullName.length > 15 ? fullName.substring(0, 15) : fullName;

    let output = [
        input[0],
        fullName,
        province,
        input[3],
        "Pria",
        "SMA Internasional Metro"
    ];

    console.log(output);
    console.log(dateParts[1]);
    console.log(dateParts.reverse());
    console.log(formattedDate);
    console.log(limitedName);
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */