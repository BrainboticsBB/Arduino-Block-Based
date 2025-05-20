Blockly.Arduino = Blockly.Arduino || {};

Blockly.Arduino['digital_write'] = function(block) {
  const pin = block.getFieldValue('PIN');
  const state = block.getFieldValue('STATE');
  Blockly.Arduino.setups_['setup_output_' + pin] = 'pinMode(' + pin + ', OUTPUT);';
  return `digitalWrite(${pin}, ${state});\n`;
};

Blockly.Arduino['delay'] = function(block) {
  const time = block.getFieldValue('TIME');
  return `delay(${time});\n`;
};

Blockly.Arduino['analog_read'] = function(block) {
  const pin = block.getFieldValue('PIN');
  return [`analogRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['digital_read'] = function(block) {
  const pin = block.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_' + pin] = 'pinMode(' + pin + ', INPUT);';
  return [`digitalRead(${pin})`, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.init = function(workspace) {
  Blockly.Arduino.definitions_ = {};
  Blockly.Arduino.setups_ = {};
};

Blockly.Arduino.finish = function(code) {
  const setups = Object.values(Blockly.Arduino.setups_).join('\n');
  return `void setup() {\n${setups}\n}\n\nvoid loop() {\n${code}\n}`;
};