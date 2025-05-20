const workspace = Blockly.inject('blocklyDiv', {
  toolbox: document.getElementById('toolbox')
});

function generateCode() {
  Blockly.Arduino.init(workspace);
  let code = Blockly.Arduino.workspaceToCode(workspace);
  code = Blockly.Arduino.finish(code);
  document.getElementById('codeArea').textContent = code;
}