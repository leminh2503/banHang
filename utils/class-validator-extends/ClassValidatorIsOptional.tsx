import {ValidateIf, ValidationOptions} from "class-validator";

export function IsOptional(
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateIf((obj, value) => {
    return value !== null && value !== undefined && value !== "";
  }, validationOptions);
}
