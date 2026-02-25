import {
  cqDefaults,
  scoreCQ,
  ContextQuotient,
} from "../../domain";

export function assembleCQ(
  overrides?: Partial<ContextQuotient>
) {
  const merged: ContextQuotient = {
    ...cqDefaults,
    ...overrides,
    identity: {
      ...cqDefaults.identity,
      ...overrides?.identity,
    },
    goals: {
      ...cqDefaults.goals,
      ...overrides?.goals,
    },
    constraints: {
      ...cqDefaults.constraints,
      ...overrides?.constraints,
    },
    history: {
      ...cqDefaults.history,
      ...overrides?.history,
    },
    preferences: {
      ...cqDefaults.preferences,
      ...overrides?.preferences,
    },
  };

  const result = scoreCQ(merged);

  return {
    ...merged,
    computed: result,
  };
}
