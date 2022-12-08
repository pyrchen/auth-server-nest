export const UserValidationConst = {
  username: {
    length: {
      min: 2,
      max: 25,
      message() {
        return `Username length should me more than q and less than 26`;
      },
    },
  },
  password: {
    length: {
      min: 6,
      max: 30,
      message() {
        return `Password length should be more than 5 and less then 31`;
      },
    },
  },
};