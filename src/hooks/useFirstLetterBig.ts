export const useFirstLetterBig = (name: string) => {

  return (
    name.includes(' ')
      ? name.split(' ')[0][0].toUpperCase() + name.split(' ')[0].substring(1) + ' ' + name.split(' ')[1][0].toUpperCase() + name.split(' ')[1].substring(1)
      : name[0].toUpperCase() + name.substring(1)
  );
};