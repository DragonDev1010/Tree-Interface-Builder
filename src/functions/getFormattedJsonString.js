export const getFormattedJsonString = (objectData, indent = 0) => {
  let result = `${" ".repeat(indent - 4)}{\n`;

  for (const key in objectData) {
    const value = objectData[key];

    result += `${" ".repeat(indent)}"${key}": `;

    if (typeof value === "object") {
      result += "\n" + getFormattedJsonString(value, indent + 4);
    } else {
      if (key === "id")
        result += value + "\n";
      else
        result += `"${value}"\n`;
    }
  }
  result += `${" ".repeat(indent - 4)}}\n`

  return result;
}