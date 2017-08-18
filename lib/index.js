"use strict";

const stylelint = require("stylelint");

const ruleName = "plugin/max-selectors";
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: max => `Expected no more than ${max} selectors`
});

const rule = stylelint.createPlugin(ruleName, (max) => (root, result) => {
  const validOptions = stylelint.utils.validateOptions(
    result,
    ruleName,
    {actual: max}
  );

  if (!validOptions) {
    return;
  }
});

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;