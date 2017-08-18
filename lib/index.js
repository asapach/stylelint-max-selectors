"use strict";

const stylelint = require("stylelint");

const ruleName = "plugin/max-selectors";
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: (max, actual) => `Expected no more than ${max} selectors, got ${actual}`
});

const rule = stylelint.createPlugin(ruleName, (max) => (root, result) => {
  const validOptions = stylelint.utils.validateOptions(
    result,
    ruleName,
    {
      actual: max,
      possible: max => typeof max === "number"
    }
  );

  if (!validOptions) {
    return;
  }

  let selectorsCount = 0;

  root.walkRules(rule => {
    selectorsCount += rule.selectors.length;
  });

  if (selectorsCount > max) {
    stylelint.utils.report({
      ruleName,
      result,
      node: root,
      message: messages.expected(max, selectorsCount),
    });
  }
});

rule.ruleName = ruleName;
rule.messages = messages;
module.exports = rule;