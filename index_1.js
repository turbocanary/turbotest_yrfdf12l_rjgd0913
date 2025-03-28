function anotherInsecurePassword() {
  // GOOD: the random suffix is cryptographically secure
  var array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  var suffix = array[0];
  var password = "sssAAAA" + suffix;
  return password;
}