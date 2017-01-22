//increasing stars
for (var count = 1; count <= 7; count++) {
    for (var nestcount = 1; nestcount <= count; nestcount++) {
        document.write("*");
    }
    document.write("<BR>");
}

//decreasing stars
for (var count = 6; count >= 1; count--) {
    for (var nestcount = 1; nestcount <= count; nestcount++) {
        document.write("*");
    }
    document.write("<BR>");
}
