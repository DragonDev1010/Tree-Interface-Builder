import Ajv from "ajv";

export default function jsonDataSchemaValidator(jsonData) {
  const schema = {
    type: 'object',
    properties: {
      id: { type: 'number' },
      node_value: { type: 'string' },
      nodes: { type: 'array' }
    },
    required: ['id', 'node_value'],
  }

  const ajv = new Ajv()
  const validate = ajv.compile(schema)

  if(validate(jsonData))
    return true
  else
    return false
}