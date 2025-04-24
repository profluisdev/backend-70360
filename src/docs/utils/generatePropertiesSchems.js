export const generateSchemaProperties = (type, description, example) => {
  return {
    type: type,
    description: description,
    example: example
  }
}