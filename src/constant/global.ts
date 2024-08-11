export const monthsName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthsName.map((month) => ({
  value: month,
  label: month,
}));

export const gender = ["Male", "Female"];

export const genderOptions = gender.map((gen) => ({
  value: gen.toLowerCase(),
  label: gen,
}));

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const bloodGroupOptions = bloodGroups.map((group) => ({
  value: group,
  label: group,
}));
