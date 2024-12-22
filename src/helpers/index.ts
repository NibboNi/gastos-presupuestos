export function formatCurrency(quantity: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(quantity);
}

export function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  return new Intl.DateTimeFormat("es-ES", options).format(dateObj);
}
