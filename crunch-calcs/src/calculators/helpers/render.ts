import type { InputConfig } from './inputConfig';
import type { OutputConfig } from './outputConfig';

export const render = (
  inputs: { [key: string]: InputConfig },
  outputs: { [key: string]: OutputConfig }
) => {
  // inputs
  for (const [key, value] of Object.entries(inputs)) {
    value.render();
    // console.log(value);
    const { toggleOptions } = value;
    if (!toggleOptions) continue;

    toggleOptions.forEach((toggleOption) => {
      const option = toggleOption.option.name;
      const optionInput = value.nodeList.find((node) => {
        return node.value === option;
      });
      const queryInput = inputs[toggleOption.query.name];

      if (queryInput.getValue() === toggleOption.query.value) {
        optionInput.disabled = false;
      } else {
        optionInput.disabled = true;
        if (optionInput.checked === true) {
          value.clear();
        }
      }
    });
  }

  // outputs
  for (const [key, value] of Object.entries(outputs)) {
    value.render();
  }
};
