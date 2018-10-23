class Loger {
  static logovanje(poruka) {
    var d = new Date();
    console.log(
      `[${d.getDate()}.${d.getMonth() +
        1}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}] ${poruka}`
    );
  }
}
