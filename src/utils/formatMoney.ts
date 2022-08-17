export function formatMoney(value: number) {
  return value.toLocaleString('pt-Br', {
    minimumFractionDigits: 2,
  })
}
