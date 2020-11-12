export interface PersonNameModel {
  firstName: string;
  lastName: string;
  middleName?: string;
}

export interface PersonFullNameModel {
  firstName: string;
  lastName: string;
  middleName?: string;
  fullName: string;
}

export function parsePersonName(fullName: string): PersonNameModel {
  const names = fullName?.split(' ');
  if (names && names.length < 2) {
    throw Error('Wrong name format!');
  }
  return {
    firstName: names[0],
    lastName: names[1],
    middleName: names[2] || '',
  };
}
