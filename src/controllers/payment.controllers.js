import { parseInstruction } from "../services/instructionParser.js";
import { validateInstruction } from "../services/validationService.js";
import { executeInstruction } from "../services/executionService.js";

export const handlePaymentInstruction = (req, res) => {
  // destructure the response
  const { instruction, accounts } = req.body;

  if (!instruction || !accounts) {
    return res.status(400).json({
      type: null,
      amount: null,
      currency: null,
      debit_account: null,
      credit_account: null,
      execute_by: null,
      status: "failed",
      status_reason: "Missing instruction or accounts",
      status_code: "SY03",
      accounts: [],
    });
  }

  // Parse Instruction
  const parsed = parseInstruction(instruction);

  if (parsed.error) {
    return res.status(400).json(parsed.response);
  }

  // Validating

  const validate = validateInstruction(instruction);

  if (validate.error) {
    return res.status(400).json(validate.response);
  }

  // Execute / Pending Transaction

  const result = executeInstruction(instruction);

  if (result.error) {
    return res.status(200).json(result.response);
  }
};
