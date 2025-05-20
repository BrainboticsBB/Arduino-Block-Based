Blockly.defineBlocksWithJsonArray([
  {
    "type": "digital_write",
    "message0": "Set pin %1 to %2",
    "args0": [
      {
        "type": "field_number",
        "name": "PIN",
        "value": 13
      },
      {
        "type": "field_dropdown",
        "name": "STATE",
        "options": [
          ["HIGH", "HIGH"],
          ["LOW", "LOW"]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Set a digital pin HIGH or LOW",
    "helpUrl": ""
  },
  {
    "type": "delay",
    "message0": "Wait %1 milliseconds",
    "args0": [
      {
        "type": "field_number",
        "name": "TIME",
        "value": 1000
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 120,
    "tooltip": "Delay in milliseconds",
    "helpUrl": ""
  },
  {
    "type": "analog_read",
    "message0": "Read analog pin %1",
    "args0": [
      {
        "type": "field_number",
        "name": "PIN",
        "value": "A0"
      }
    ],
    "output": "Number",
    "colour": 160,
    "tooltip": "Reads an analog value",
    "helpUrl": ""
  },
  {
    "type": "digital_read",
    "message0": "Read digital pin %1",
    "args0": [
      {
        "type": "field_number",
        "name": "PIN",
        "value": 2
      }
    ],
    "output": "Boolean",
    "colour": 160,
    "tooltip": "Reads a digital value",
    "helpUrl": ""
  }
]);