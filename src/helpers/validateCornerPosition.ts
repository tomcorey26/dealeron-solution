export const validateCornerPosition = (data: string[]) => {
  if (data.length > 2) {
    alert(
      `Error: ${data.length} inputs provided for corner, only 2 required (check for extra spaces)`
    );
  }
  if (data.length < 2) {
    alert(
      `Error: ${data.length} inputs provided for corner,2 required (check for extra spaces)`
    );
  }
  //check if not number
  for (let i = 0; i < data.length; i++) {
    let char = data[i];
    if (isNaN(char as any)) {
      alert(
        `Incorrect corner position input ${char}, please pass numbers only`
      );
      return false;
    }
    if (Number(char) < 0) {
      alert(`Please provide positve numbers`);
      return false;
    }
  }
  return true;
};
