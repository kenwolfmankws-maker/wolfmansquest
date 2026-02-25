import { ContextQuotient } from "./cqTypes";

export function validateCQ(cq: ContextQuotient) {
  const missing: string[] = [];
  const warnings: string[] = [];

  if (!cq.identity?.humanName) missing.push("identity.humanName");
  if (!cq.goals?.whatMattersNow) missing.push("goals.whatMattersNow");
  if (!cq.constraints?.mustNotHappen?.length) missing.push("constraints.mustNotHappen");

  if (
    cq.goals?.tradeoff === "speed" &&
    cq.constraints?.mustNotHappen?.includes("do not expand scope")
  ) {
    warnings.push(
      "Speed selected while scope is tightly constrained — risk of cutting corners."
    );
  }

  return { missing, warnings };
}
