export default function deepCopyOfNestedObject(nestedObject) {
  return JSON.parse(JSON.stringify(nestedObject))
}