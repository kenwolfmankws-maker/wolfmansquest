import { ContextQuotient } from "./cqTypes";
import { validateCQ } from "./cqValidate";

export function scoreCQ(cq: ContextQuotient) {
  const { missing, warnings } = validateCQ(cq);

  let score = 0;

  // 5 core buckets, 20 points each
  if (cq.identity?.humanName) score += 20;
  if (cq.goals?.whatMattersNow) score += 20;
  if (cq.constraints?.mustNotHappen?.length) score += 20;
  if (cq.history) score += 20;
  if (cq.preferences) score += 20;

  // Penalty for missing key fields
  score -= Math.min(40, missing.length * 10);

  // Clamp 0–100
  score = Math.max(0, Math.min(100, score));

  return { cqScore: score, missing, warnings };
}
