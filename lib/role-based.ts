// Role-based validation functions for different field types

// GST/Tax validation
export const validateGSTNumber = (gst: string): string => {
  if (!gst.trim()) return "GST number is required"
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
  if (!gstRegex.test(gst.toUpperCase())) {
    return "Please enter a valid GST number (15 characters: 22AAAAA0000A1Z5)"
  }
  return ""
}

export const validateStateSalesTaxPermit = (permit: string): string => {
  if (!permit.trim()) return "State Sales Tax Permit Number is required"
  if (permit.trim().length < 6 || permit.trim().length > 20) {
    return "State Sales Tax Permit must be between 6-20 characters"
  }
  if (!/^[A-Z0-9-]+$/.test(permit.toUpperCase())) {
    return "State Sales Tax Permit must contain only letters, numbers, and hyphens"
  }
  return ""
}

// Tax ID validation
export const validateTaxIdVendor = (taxId: string): string => {
  if (!taxId.trim()) return "Tax identification number is required"
  if (taxId.trim().length < 10 || taxId.trim().length > 15) {
    return "Tax ID must be between 10-15 characters"
  }
  if (!/^[A-Z0-9]+$/.test(taxId.toUpperCase())) {
    return "Tax ID must contain only letters and numbers"
  }
  return ""
}

export const validateEIN = (ein: string): string => {
  if (!ein.trim()) return "EIN (Employee Identification Number) is required"
  const einRegex = /^[0-9]{2}-[0-9]{7}$/
  if (!einRegex.test(ein)) {
    return "Please enter a valid EIN format (XX-XXXXXXX)"
  }
  return ""
}

// Import/Export validation
export const validateImportExportCode = (code: string): string => {
  if (!code.trim()) return "Import Export Code is required"
  const iecRegex = /^[A-Z]{5}[0-9]{5}$/
  if (!iecRegex.test(code.toUpperCase())) {
    return "Please enter a valid Import Export Code (5 letters + 5 numbers)"
  }
  return ""
}

export const validateUSImportExporter = (code: string): string => {
  if (!code.trim()) return "US Import Exporter number is required"
  if (code.trim().length < 8 || code.trim().length > 15) {
    return "US Import Exporter number must be between 8-15 characters"
  }
  if (!/^[A-Z0-9]+$/.test(code.toUpperCase())) {
    return "US Import Exporter number must contain only letters and numbers"
  }
  return ""
}

// Banking validation
export const validateIFSCCode = (ifsc: string): string => {
  if (!ifsc.trim()) return "IFSC code is required"
  const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/
  if (!ifscRegex.test(ifsc.toUpperCase())) {
    return "Please enter a valid IFSC code (e.g., SBIN0001234)"
  }
  return ""
}

export const validateABARoutingNumber = (routing: string): string => {
  if (!routing.trim()) return "ABA Routing Number is required"
  if (!/^[0-9]{9}$/.test(routing)) {
    return "ABA Routing Number must be exactly 9 digits"
  }

  // ABA routing number checksum validation
  const digits = routing.split("").map(Number)
  const checksum =
    (3 * (digits[0] + digits[3] + digits[6]) +
      7 * (digits[1] + digits[4] + digits[7]) +
      (digits[2] + digits[5] + digits[8])) %
    10

  if (checksum !== 0) {
    return "Please enter a valid ABA Routing Number"
  }
  return ""
}

// Role-based validation dispatcher
export const validateFieldByRole = (fieldName: string, value: string, userRole: "vendor" | "buyer"): string => {
  switch (fieldName) {
    case "gstNumber":
      return userRole === "vendor" ? validateGSTNumber(value) : validateStateSalesTaxPermit(value)

    case "taxIdentificationNumber":
      return userRole === "vendor" ? validateTaxIdVendor(value) : validateEIN(value)

    case "importExportCode":
      return userRole === "vendor" ? validateImportExportCode(value) : validateUSImportExporter(value)

    case "ifscCode":
      return userRole === "vendor" ? validateIFSCCode(value) : validateABARoutingNumber(value)

    default:
      return ""
  }
}
