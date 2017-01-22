var comp = new Array(6);
comp[0] = "monitor";
comp[1] = "motherboard";
comp[2] = "chip";
comp[3] = "hard drive";
comp[4] = "CD-RW drive";
comp[5] = "power supply";
comp.sort();

for (var count = 0; count < comp.length; count++) {
    document.write(comp[count] + "<br/>");
}
