const validationMiddleware = (req, res, next) => {
  const { email, password } = req.body;

  if (!email.endsWith("@gmail.com")) {
    return res.status(400).send("Invalid email");
  }

  const alphaL = "abcdefghijklmnopqrstuvwxyz";
  const alphaU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+-=`[]{}/|?.,:;~";

  // Helper function to check if the password contains at least one character from the given string
  const containsCharacterFrom = (str, chars) => {
    for (let i = 0; i < str.length; i++) {
      if (chars.includes(str[i])) {
        return true;
      }
    }
    return false;
  };

  // Check if the password meets all the required conditions
  if (
    password.length < 8 ||
    !containsCharacterFrom(password, alphaL) ||
    !containsCharacterFrom(password, alphaU) ||
    !containsCharacterFrom(password, numbers) ||
    !containsCharacterFrom(password, special)
  ) {
    return res.status(400).send("Invalid password");
  }

  next();
};

module.exports = validationMiddleware;
