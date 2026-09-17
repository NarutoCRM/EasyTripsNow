function formatPhoneNumber(phoneNumber) {
  // Remove any non-digit characters from the phone number
  const cleaned = ('' + phoneNumber).replace(/\D/g, '');
  // Format the phone number as (XXX) XXX-XXXX
  return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

export { formatPhoneNumber }