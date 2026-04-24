import "./styles.css";

// Configurations & constants
const VALIDITY_KEYS = [
  "valueMissing",
  "tooShort",
  "tooLong",
  "patternMismatch",
];

const ERROR_MESSAGES = {
  valueMissing: "Field can't be empty.",
  tooShort: "Value is too short.",
  tooLong: "Value is too long.",
  patternMismatch: "Invalid format.",

  fields: {
    email: {
      patternMismatch:
        "Must follow the standard format e.g. johnsmith@gmail.com.",
    },
    password: {
      patternMismatch:
        "Must include 1 uppercase letter and 1 number or symbol.",
    },
  },
};

const POSTALCODE_CONSTRAINTS = {
  AL: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1001).",
  },
  AD: {
    pattern: /^AD\d{3}$/,
    message: "Postal code must be AD followed by 3 digits (e.g. AD500).",
  },
  AT: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1010).",
  },
  BY: {
    pattern: /^\d{6}$/,
    message: "Postal code must be 6 digits (e.g. 220050).",
  },
  BE: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1000).",
  },
  BA: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 71000).",
  },
  BG: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1000).",
  },
  HR: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 10000).",
  },
  CY: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 2008).",
  },
  CZ: {
    pattern: /^\d{3}\s?\d{2}$/,
    message: "Postal code must be 5 digits (e.g. 110 00).",
  },
  DK: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1050).",
  },
  EE: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 10115).",
  },
  FI: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 00100).",
  },
  FR: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 75001).",
  },
  DE: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 10115).",
  },
  GR: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 10552).",
  },
  HU: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1051).",
  },
  IS: {
    pattern: /^\d{3}$/,
    message: "Postal code must be 3 digits (e.g. 101).",
  },
  IE: {
    pattern: /^[A-Z]\d{2}\s?[A-Z0-9]{4}$/,
    message: "Enter a valid Eircode (e.g. D02 X285).",
  },
  IT: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 00100).",
  },
  XK: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 10000).",
  },
  LV: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1050).",
  },
  LI: {
    pattern: /^(948[5-9]|949[0-7])$/,
    message: "Postal code must be in range 9485–9497 (e.g. 9490).",
  },
  LT: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 01100).",
  },
  LU: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1234).",
  },
  MT: {
    pattern: /^[A-Z]{3}\s?\d{4}$/,
    message: "Postal code must be 3 letters and 4 digits (e.g. VLT 1117).",
  },
  MD: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 2001).",
  },
  MC: {
    pattern: /^980\d{2}$/,
    message: "Postal code must start with 980 (e.g. 98000).",
  },
  ME: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 81000).",
  },
  NL: {
    pattern: /^\d{4}\s?[A-Z]{2}$/,
    message: "Postal code must be 4 digits and 2 letters (e.g. 1234 AB).",
  },
  MK: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1000).",
  },
  NO: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 0001).",
  },
  PL: {
    pattern: /^\d{2}-\d{3}$/,
    message: "Postal code must be in format 12-345 (e.g. 00-001).",
  },
  PT: {
    pattern: /^\d{4}-\d{3}$/,
    message: "Postal code must be in format 1234-567 (e.g. 1000-001).",
  },
  RO: {
    pattern: /^\d{6}$/,
    message: "Postal code must be 6 digits (e.g. 010011).",
  },
  RU: {
    pattern: /^\d{6}$/,
    message: "Postal code must be 6 digits (e.g. 101000).",
  },
  SM: {
    pattern: /^4789\d$/,
    message: "Postal code must start with 4789 (e.g. 47890).",
  },
  RS: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 11000).",
  },
  SK: {
    pattern: /^\d{3}\s?\d{2}$/,
    message: "Postal code must be 5 digits (e.g. 811 01).",
  },
  SI: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 1000).",
  },
  ES: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 28001).",
  },
  SE: {
    pattern: /^\d{3}\s?\d{2}$/,
    message: "Postal code must be 5 digits (e.g. 114 55).",
  },
  CH: {
    pattern: /^\d{4}$/,
    message: "Postal code must be 4 digits (e.g. 8000).",
  },
  UA: {
    pattern: /^\d{5}$/,
    message: "Postal code must be 5 digits (e.g. 01001).",
  },
  GB: {
    pattern: /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[ABD-HJLNP-UW-Z]{2}$/,
    message: "Enter a valid UK postcode (e.g. SW1A 1AA).",
  },
  VA: { pattern: /^00120$/, message: "Postal code must be 00120." },
};

// Form validation setup (event listeners)
const form = document.querySelector("form");

form.addEventListener("input", handleLiveValidation);

// Handler functions
function handleLiveValidation(e) {
  const form = e.currentTarget;
  const element = e.target;

  const { name, value } = element;

  if (!name) return;

  if (name === "postal-code")
    handlePostalCodeValidation({ form, element, value });
  else if (name === "password-confirmation")
    handlePasswordConfirmationValidation({ form, value, element });
  else element.setCustomValidity(handleGetValidityMessage({ element, name }));
  element.reportValidity();

  return;
}

function handlePasswordConfirmationValidation({ form, value, element }) {
  const password = form.querySelector("#password")?.value;

  if (!password) {
    element.setCustomValidity("Password field is empty.");
    return;
  }
  if (password !== value) {
    element.setCustomValidity("Password not matching.");
    return;
  }
  element.setCustomValidity("");
}

function handlePostalCodeValidation({ form, element, value }) {
  const countryPrefix = form.querySelector("#country").value;

  if (!countryPrefix) {
    element.setCustomValidity(
      "Please select country before filling postal code",
    );
    return;
  }
  if (!POSTALCODE_CONSTRAINTS[countryPrefix].pattern.test(value)) {
    element.setCustomValidity(POSTALCODE_CONSTRAINTS[countryPrefix].message);
  } else {
    element.setCustomValidity("");
  }
}

function handleGetValidityMessage({ element, name }) {
  const errors = getValidityErrors(element);

  return getValidityMessage({ name, errors });
}

// helper functions
function getValidityErrors(element) {
  return VALIDITY_KEYS.filter((key) => element.validity[key]);
}

function getValidityMessage({ name, errors }) {
  return errors
    .map(
      (error) =>
        ERROR_MESSAGES.fields?.[name]?.[error] ?? ERROR_MESSAGES[error] ?? "",
    )
    .join(" ");
}
