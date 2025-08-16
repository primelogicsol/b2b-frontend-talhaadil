const roleLabelMappings = {
  gst_number: {
    vendor: "GST Number",
    buyer: "State Sales Tax Permit Number",
  },
  tax_identification_number: {
    vendor: "Tax Identification Number",
    buyer: "EIN (Employee Identification Number)",
  },
  import_export_code: {
    vendor: "Import Export Code",
    buyer: "US Import Exporter",
  },

  // Banking Info
  bank_name: { vendor: "Bank Name", buyer: "Bank Name" },
  account_name: { vendor: "Account Name", buyer: "Account Name" },
  account_type: { vendor: "Account Type", buyer: "Account Type" },
  account_number: { vendor: "Account Number", buyer: "Account Number" },
  ifsc_code: { vendor: "IFSC Code", buyer: "ABA Routing Number" },
  swift_bis_code: { vendor: "SWIFT Code", buyer: "SWIFT Code" },
  iban_code: { vendor: "IBAN Code", buyer: "IBAN Code" },

  // Compliance Issues
  kyc_challenges: {
    vendor: "Have you faced challenges with KYC regulations recently?",
    buyer: "Customer Identification Program (CIP)",
  },
  gst_compliance_issues: {
    vendor: "Any issues with GST compliance in transactions?",
    buyer: "Sales Tax Compliance",
  },
  fema_payment_issues: {
    vendor: "Difficulties with FEMA for international payments recently?",
    buyer: "OFAC & FinCEN Cross-Border Payment Rules",
  },
  digital_banking_issues: {
    vendor: "Have digital banking regulations impacted your operations?",
    buyer: "Federal Reserve, OCC, FDIC, CFPB Banking Regulations",
  },
  payment_gateway_compliance_issues: {
    vendor: "Challenges with payment gateway compliance or security regulations?",
    buyer: "PCI-DSS Compliance",
  },
  fraud_cybersecurity_issues: {
    vendor: "Encountered any fraud or cybersecurity issues recently?",
    buyer: "Fraud / Cybersecurity Issues",
  },
  account_activity_issues: {
    vendor: "Any account activity issues or fraudulent claims made?",
    buyer: "Any account activity issues or fraudulent claims made?",
  },
  regulatory_actions: {
    vendor: "Have regulatory actions been taken against your account?",
    buyer: "Regulatory Actions",
  },
};
const documentMapping: Record<"vendor" | "buyer", Record<string, string>> = {
  vendor: {
    business_registration: "Business Registration Certificate",
    business_license: "Business License",
    adhaar_card: "Aadhaar Card",
    artisan_id_card: "Artisan/Trade License",
    bank_statement: "Bank Statement",
    product_catalog: "Catalog/Certifications",
    certifications: "Catalog/Certifications"
  },
  buyer: {
    business_registration: "Articles of Incorporation",
    business_license: "Business License",
    adhaar_card: "Photo ID",
    artisan_id_card: "Trade License",
    bank_statement: "Bank Statement",
    product_catalog: "Product Catalog",
    certifications: "Certifications"
  }
}
