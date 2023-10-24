// CONFIG ----------------------------------------------

const sourceFile = "../../downloads/Auth0_ Universal login (frontend) (9).xlsx";
const outputFile = "./output/result.txt";
const keysAtColumn = "B";
const langs = ["EN", "NL", "DE", "FR", "ES", "IT"];
const sections = [
  {
    group: "login",
    screen: "",
    sheet: "UL Login and Create",
    startFromCell: "E4",
    endAtCell: "J39",
  },
  {
    group: "mfa-otp",
    screen: "mfa-otp-challenge",
    sheet: "UL Login and Create",
    startFromCell: "E47",
    endAtCell: "J56",
  },
  {
    group: "signup-password",
    screen: "",
    sheet: "UL Login and Create",
    startFromCell: "E71",
    endAtCell: "J112",
  },
  {
    group: "mfa-otp",
    screen: "mfa-otp-enrollment-qr",
    sheet: "Reset PW + 2FA",
    startFromCell: "D4",
    endAtCell: "I17",
  },
  {
    group: "mfa-otp",
    screen: "mfa-otp-enrollment-code",
    sheet: "Reset PW + 2FA",
    startFromCell: "D20",
    endAtCell: "I30",
  },
  {
    group: "mfa",
    screen: "mfa-enroll-result",
    sheet: "Reset PW + 2FA",
    startFromCell: "D33",
    endAtCell: "I43",
  },
  {
    group: "reset-password",
    screen: "",
    sheet: "Reset PW + 2FA",
    startFromCell: "D45",
    endAtCell: "I57",
  },
  {
    group: "reset-password",
    screen: "reset-password-success",
    sheet: "Reset PW + 2FA",
    startFromCell: "D60",
    endAtCell: "I63",
  },
  {
    group: "reset-password",
    screen: "reset-password-error",
    sheet: "Reset PW + 2FA",
    startFromCell: "D79",
    endAtCell: "I91",
  },
  {
    group: "reset-password",
    screen: "reset-password-request",
    sheet: "Reset PW + 2FA",
    startFromCell: "D100",
    endAtCell: "I118",
  },
  {
    group: "reset-password",
    screen: "reset-password-email",
    sheet: "Reset PW + 2FA",
    startFromCell: "D124",
    endAtCell: "I128",
  },
  {
    group: "mfa-recovery-code",
    screen: "mfa-recovery-code-enrollment",
    sheet: "Recovery 2FA",
    startFromCell: "D25",
    endAtCell: "I32",
  },
  {
    group: "mfa-recovery-code",
    screen: "mfa-recovery-code-challenge",
    sheet: "Recovery 2FA",
    startFromCell: "D42",
    endAtCell: "I53",
  },
  {
    group: "mfa",
    screen: "mfa-login-options",
    sheet: "Recovery 2FA",
    startFromCell: "D64",
    endAtCell: "I76",
  },
];

// ----------------------------------------------------

module.exports = {
  sourceFile,
  outputFile,
  keysAtColumn,
  langs,
  sections,
};
