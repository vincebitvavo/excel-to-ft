// CONFIG ----------------------------------------------

const sourceFile = "../../downloads/Auth0_ Universal login (frontend) (1).xlsx";
const outputFile = "./output/result.txt";
const keysAtColumn = "B";
const groups = ["EN", "NL", "DE", "FR", "ES", "IT"];
const sections = [
  {
    name: "login",
    screen: "",
    sheet: "UL Login and Create",
    startFromCell: "E4",
    endAtCell: "J43",
  },
  {
    name: "mfa-otp",
    screen: "mfa-otp-challenge",
    sheet: "UL Login and Create",
    startFromCell: "E46",
    endAtCell: "J60",
  },
  {
    name: "signup-password",
    screen: "",
    sheet: "UL Login and Create",
    startFromCell: "E71",
    endAtCell: "J113",
  },
  {
    name: "mfa-otp",
    screen: "mfa-otp-enrollment-qr",
    sheet: "Reset PW + 2FA",
    startFromCell: "D4",
    endAtCell: "I17",
  },
  {
    name: "mfa-otp",
    screen: "mfa-otp-enrollment-code",
    sheet: "Reset PW + 2FA",
    startFromCell: "D20",
    endAtCell: "I30",
  },
  {
    name: "mfa-otp",
    screen: "mfa-enroll-result",
    sheet: "Reset PW + 2FA",
    startFromCell: "D33",
    endAtCell: "I43",
  },
  {
    name: "reset-password",
    screen: "",
    sheet: "Reset PW + 2FA",
    startFromCell: "D45",
    endAtCell: "I57",
  },
  {
    name: "reset-password",
    screen: "reset-password-success",
    sheet: "Reset PW + 2FA",
    startFromCell: "D60",
    endAtCell: "I63",
  },
  {
    name: "reset-password",
    screen: "reset-password-error",
    sheet: "Reset PW + 2FA",
    startFromCell: "D79",
    endAtCell: "I91",
  },
  {
    name: "reset-password",
    screen: "reset-password-request",
    sheet: "Reset PW + 2FA",
    startFromCell: "D100",
    endAtCell: "I118",
  },
  {
    name: "reset-password",
    screen: "reset-password-email",
    sheet: "Reset PW + 2FA",
    startFromCell: "D124",
    endAtCell: "I128",
  },
  {
    name: "mfa-recovery-code",
    screen: "mfa-recovery-code-enrollment",
    sheet: "Recovery 2FA",
    startFromCell: "D25",
    endAtCell: "I36",
  },
  {
    name: "mfa-recovery-code",
    screen: "mfa-recovery-code-challenge",
    sheet: "Recovery 2FA",
    startFromCell: "D42",
    endAtCell: "I58",
  },
  {
    name: "mfa",
    screen: "mfa-login-options",
    sheet: "Recovery 2FA",
    startFromCell: "D61",
    endAtCell: "I73",
  },
];

// ----------------------------------------------------

module.exports = {
  sourceFile,
  outputFile,
  keysAtColumn,
  groups,
  sections,
};
