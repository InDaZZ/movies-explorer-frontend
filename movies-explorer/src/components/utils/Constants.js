export const DEVICE_PARAMETERS = {
  desktop: {
    width: 851,
    cards: {
      total: 16,
      more: 8,
    },
  },
  tablet: {
    width: 850,
    cards: {
      total: 8,
      more: 4,
    },
  },
  mobile: {
    width: 550,
    cards: {
      total: 5,
      more: 3,
    },
  },
};

//export const REGEXP_EMAIL = /^((([0-9A-Za-z][-0-9A-z.]+[0-9A-Za-z])|([0-9А-Яа-я][-0-9А-я.]+[0-9А-Яа-я]))@([-A-Za-z]+\.){1,2}[-A-Za-z]{2,3})$/u;
export const REGEXP_EMAIL = /^((([0-9A-Za-z][-0-9A-z.]+[0-9A-Za-z])|([0-9А-Яа-я][-0-9А-я.]+[0-9А-Яа-я]))@([-A-Za-z]+\.){1,2}[-A-Za-z]{2,3})$/u;
export const REGEXP_USER_NAME = /[0-9+_)*&^%$#@!<>|(\.\,\/\`\~]/i;