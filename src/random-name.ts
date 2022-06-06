export const randomName = (): string => {
  const names: Array<string> = ['Dwight Schrute', 'Michael Scott', 'Pam Beesly', 'Jim Halpert', 'Jane']
  console.log(names)
  return names[Math.floor(Math.random() * names.length)];
}