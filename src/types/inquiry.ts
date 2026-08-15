/**
 * COGNORA DIGITAL - Lead Inquiry Type Definitions
 */

export interface EnquiryFormData {
  name: string;
  email: string;
  company?: string;
  website?: string;
  capabilities: string[];
  budget: string;
  project_details: string;
}

export interface EnquiryDatabaseInsert {
  reference_id: string;
  name: string;
  email: string;
  company?: string | null;
  website?: string | null;
  capability: string;
  budget: string;
  project_details: string;
  status: string;
}

export interface EnquiryRecord extends EnquiryDatabaseInsert {
  id: string;
  created_at: string;
}

export interface FormValidationErrors {
  name?: string;
  email?: string;
  capabilities?: string;
  budget?: string;
  project_details?: string;
}

export interface InquiryHookState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
  referenceId: string | null;
  validationErrors: FormValidationErrors;
}
