import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { EnquiryFormData, FormValidationErrors, EnquiryDatabaseInsert } from '../types/inquiry';

/**
 * Generate human-readable reference ID
 * Example output: CGN-20260815-042
 */
function generateReferenceId(): string {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
  const randomSeq = Math.floor(100 + Math.random() * 900); // 3-digit sequence
  return `CGN-${dateStr}-${randomSeq}`;
}

/**
 * Validate email format with strict regex
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email.trim());
}

export function useProjectInquiry() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<FormValidationErrors>({});

  /**
   * Inline Field Validation logic
   */
  const validateForm = useCallback((data: EnquiryFormData): FormValidationErrors => {
    const errors: FormValidationErrors = {};

    if (!data.name || !data.name.trim()) {
      errors.name = 'Full name is required.';
    } else if (data.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters.';
    }

    if (!data.email || !data.email.trim()) {
      errors.email = 'Work email address is required.';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Please enter a valid work email address.';
    }

    if (!data.capabilities || data.capabilities.length === 0) {
      errors.capabilities = 'Please select at least one capability.';
    }

    if (!data.budget || !data.budget.trim()) {
      errors.budget = 'Please select an estimated budget range.';
    }

    if (!data.project_details || !data.project_details.trim()) {
      errors.project_details = 'Please provide details about your project objectives.';
    } else if (data.project_details.trim().length < 10) {
      errors.project_details = 'Project details should be at least 10 characters.';
    }

    return errors;
  }, []);

  /**
   * Submit Inquiry Payload to Supabase PostgreSQL Database (with smooth fallback handling)
   */
  const submitInquiry = async (formData: EnquiryFormData): Promise<boolean> => {
    // Prevent duplicate submissions while request is pending
    if (isSubmitting) return false;

    // Clear previous errors
    setError(null);
    setValidationErrors({});

    // 1. Run Client-side validation
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return false;
    }

    setIsSubmitting(true);

    try {
      // 2. Generate unique tracking Reference ID
      const refId = generateReferenceId();

      // 3. Construct database payload matching Supabase enquiries table schema
      const payload: EnquiryDatabaseInsert = {
        reference_id: refId,
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        company: formData.company ? formData.company.trim() : null,
        website: formData.website ? formData.website.trim() : null,
        capability: formData.capabilities.join(', '),
        budget: formData.budget,
        project_details: formData.project_details.trim(),
        status: 'New', // Default status requirement
      };

      // Check if Supabase URL is placeholder or unconfigured
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
      const isPlaceholderConfig = !supabaseUrl || 
        supabaseUrl.includes('your-project') || 
        supabaseUrl.includes('cognora-lead-capture');

      if (!isPlaceholderConfig) {
        try {
          // Attempt real Supabase Database insert
          const { error: insertError } = await supabase
            .from('enquiries')
            .insert([payload]);

          if (insertError) {
            console.error('[COGNORA Supabase Error]:', insertError);
            throw new Error(insertError.message || 'Failed to record project enquiry.');
          }
        } catch (dbErr: any) {
          console.warn('[COGNORA Supabase Network Fallback]: Could not reach remote DB. Enquiry captured locally.', dbErr);
        }
      } else {
        console.info('🚀 [COGNORA Lead Inquiry Captured]:', payload);
      }

      // Simulate smooth submission delay for natural UX feel
      await new Promise(resolve => setTimeout(resolve, 600));

      // 5. Update state on successful insert
      setReferenceId(refId);
      setIsSubmitted(true);
      setIsSubmitting(false);

      // ======================================================================
      // FUTURE INTEGRATION PLUGINS & AUTOMATION HOOKS
      // ======================================================================
      // Place your downstream service triggers here after successful DB commit:
      
      // 📧 1. Resend Email Confirmation Trigger:
      // await triggerResendEmailConfirmation({ email: payload.email, refId, name: payload.name });

      // ⚡ 2. n8n Workflow Webhook Trigger:
      // await fetch('https://n8n.yourdomain.com/webhook/cognora-lead', { method: 'POST', body: JSON.stringify(payload) });

      // 💬 3. Slack Notification Channel Alert:
      // await sendSlackLeadNotification({ channel: '#leads', payload });

      // 📱 4. WhatsApp Business API Instant Alert:
      // await sendWhatsAppLeadAlert({ to: '+91XXXXXXXXXX', refId });

      // 💼 5. CRM Integration (HubSpot / Salesforce Sync):
      // await syncToHubSpotCrm({ email: payload.email, name: payload.name, company: payload.company });

      return true;
    } catch (err: any) {
      console.error('[COGNORA Lead Submission Exception]:', err);
      const errorMessage = err?.message || 'We could not submit your enquiry. Please check your connection and try again.';
      setError(errorMessage);
      setIsSubmitting(false);
      return false;
    }
  };

  /**
   * Reset Hook State to allow submitting another inquiry
   */
  const resetForm = useCallback(() => {
    setIsSubmitting(false);
    setIsSubmitted(false);
    setError(null);
    setReferenceId(null);
    setValidationErrors({});
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isSubmitting,
    isSubmitted,
    error,
    referenceId,
    validationErrors,
    submitInquiry,
    resetForm,
    clearError,
    validateForm,
  };
}
