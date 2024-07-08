import { Definition, Sequence, SequentialStep } from "sequential-workflow-designer";

export interface MyDefinition extends Definition {
  description?: string;

  createdBy?: string;
  createdAt?: string; // Consider using Date type if possible
  lastModifiedAt?: string; // Consider using Date type if possible
  lastModifiedBy?: string;
  type?: string;
}

