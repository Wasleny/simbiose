class FormatCurrency {
  formatBR(value) {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  }
}

export default new FormatCurrency();
